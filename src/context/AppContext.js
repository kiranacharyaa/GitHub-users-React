import React, { useState, createContext, useEffect } from 'react';
import {demoData, demoDataFollowers, demoDataRepos} from './../components/demoData';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const url = "https://api.github.com/";
    const localUserName = localStorage.getItem("userName");
    const [userName, setUserName] = useState(demoData.login);
    const [userData, setUserData] = useState(demoData);
    const [userFollowers, setUserFollowers] = useState(demoDataFollowers);
    const [userRepos, setUserRepos] = useState(demoDataRepos);
    const [inputValue, setInputValue] = useState("");
    const [request, setRequest] = useState(0);
    const [errorMsg, setErrorMsg] = useState({hasError: false, msg: ""})
    let today = new Date();
    let utA, utB, totalSecondsA, lastupdatedA, totalSecondsB, lastupdatedB;    
    
    const [loadingUserDOM, setLoadingUserDOM] = useState(true);

    const fetchAllData = async(userProp) => {
        setLoadingUserDOM(true);
        const response = await fetch(`${url}users/${userProp}`);
        if(response.ok){
            const refdata = await response.json();
            setUserData(refdata);
            localStorage.setItem("userData",JSON.stringify(refdata));
            await Promise.all([
                fetch(`${url}users/${userProp}/followers`),
                fetch(`${url}users/${userProp}/repos`)
            ])
            .then(response => Promise.all(response.map(items => items.json())))
            .then(data => {
                const [ followers, repos ] = data;
                setUserFollowers(followers)
                setUserRepos(repos)
                localStorage.setItem("userDataFollowers",JSON.stringify(followers));
                localStorage.setItem("userDataRepos",JSON.stringify(repos));
            })
            .catch(err => console.log(err))
        }else{
            toggleError(true, "No Users Found");
        }
        fetchRequest();
        setLoadingUserDOM(false);
    }

    function fetchRequest () {
        fetch(url+"rate_limit")
        .then(response => response.json())
        .then(data => {
            setRequest(data.rate.remaining);
            if(data.resources.core.remaining === 0){
                toggleError(true, "Your Request Limit per Hour has been reached, come back after some time :) Currently you are seeing my profile");
            }
        })
    }

    function toggleError(hasError = false, msg = ''){
        setErrorMsg({hasError, msg})
    }
    
    function sorted(a, b){
        utA = new Date(a.updated_at);
        totalSecondsA = ((today - utA)/1000);
        lastupdatedA = Math.floor(totalSecondsA / 60 / 60 / 24);
        
        utB = new Date(b.updated_at);
        totalSecondsB = ((today - utB)/1000);
        lastupdatedB = Math.floor(totalSecondsB / 60 / 60 / 24);

        return (lastupdatedA - lastupdatedB)
    }

    useEffect(() => {
        if(localUserName){
            setUserData(JSON.parse(localStorage.getItem("userData")));
            setUserFollowers(JSON.parse(localStorage.getItem("userDataFollowers")));
            setUserRepos(JSON.parse(localStorage.getItem("userDataRepos")));
            setLoadingUserDOM(false);
        }else if(userName === demoData.login){
            setLoadingUserDOM(false);
        }
        fetchRequest();
    },[])
    
    return(
        <AppContext.Provider 
        value = {
            {
                url,
                userName, setUserName,
                userData, setUserData,
                inputValue, setInputValue,
                userFollowers, setUserFollowers, 
                userRepos, setUserRepos,
                request, setRequest,
                fetchAllData,
                loadingUserDOM, setLoadingUserDOM,
                errorMsg, setErrorMsg,
                toggleError,
                sorted
            }
        } >
            {children}
        </AppContext.Provider>
    )
}