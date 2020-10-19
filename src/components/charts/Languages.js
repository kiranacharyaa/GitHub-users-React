import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import {AppContext} from '../../store/AppContext';

function Languages() {

    const {userRepos} = useContext(AppContext)
    let languages = userRepos.reduce((total, items) => {
        const {language} = items;
        if(language === null){
            return total;
        }
        if(!total[language]){
            total[language] = {label: language, value: 1}
        }else{
            total[language] = {...total[language], value: total[language].value + 1}
        }
        return total;
    }, {});
    languages = Object.values(languages).sort((a,b) => b.value - a.value).slice(0,5);
    
    let dataCh = {
        labels: languages.map(items => items.label),
        datasets: [{
            data: languages.map(items => items.value),
            label: 'Language Popularity',
            backgroundColor: [
                '#00bcd4',
                '#4caf50',
                '#ff9800',
                '#9c27b0',
                '#3f51b5',
                '#607d8b'
            ],
            borderWidth: 1
        }]
    }
    
    return (
        <>
            <Bar
                data={dataCh}
                height={350}
                options={{ maintainAspectRatio: false }}
            />
        </>
    )
}

export default Languages
