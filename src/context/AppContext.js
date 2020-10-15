import React, { useState, createContext, useEffect } from 'react';
import {demoData, demoDataFollowers} from './../components/demoData';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const url = "https://api.github.com/";
    const [userName, setUserName] = useState(demoData.login)
    const [userData, setUserData] = useState(demoData);
    const [userFollowers, setUserFollowers] = useState(demoDataFollowers);
    const [userRepos, setUserRepos] = useState([])
    const [inputValue, setInputValue] = useState("");
    const [request, setRequest] = useState(0);
    const [errorMsg, setErrorMsg] = useState({hasError: false, msg: ""})
    
    const [loadingUser, setLoadingUser] = useState(false);
    const [loadingUserFollower, setLoadingUserFollower] = useState(false);

    const fetchAllData = async() => {
        setLoadingUser(true);
        const response = await fetch(url+"users/"+userName);
        if(response.ok){
            setLoadingUserFollower(true);
            const refdata = await response.json();
            setUserData(refdata);
            await Promise.all([
                fetch(url+"users/"+userName+"/followers"),
                fetch(`${url}users/${userName}/repos`)
            ])
            .then(response => Promise.all(response.map(items => items.json())))
            .then(data => {
                const [ followers, repos ] = data;
                setUserFollowers(followers)
                setUserRepos(repos)
                setLoadingUserFollower(false)
            })
            .catch(err => console.log(err))
        }else{
            toggleError(true, "No Users Found");
        }
        fetchRequest();
        setLoadingUser(false);
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
    
    useEffect(() => {
        fetchAllData();
    },[userName])
    
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
                loadingUser, loadingUserFollower,
                errorMsg, setErrorMsg,
                toggleError
            }
        } >
            {children}
        </AppContext.Provider>
    )
}