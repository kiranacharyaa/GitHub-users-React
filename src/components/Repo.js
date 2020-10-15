import React, { useContext } from 'react';
import RepoItem from './RepoItem';
import {AppContext} from './../context/AppContext';

function Repo() {

    const {userRepos} = useContext(AppContext);

    return (
        <div className="row">
            {userRepos.slice(0, 4).map((items) => (
                <div className="col-sm-6" key={items.id}>
                    <RepoItem  
                        name={items.name} 
                        language={items.language}
                        stargazers_count={items.stargazers_count} 
                        forks_count={items.forks_count}
                        updated_at={items.updated_at} 
                    />
                </div>
                ))
            }
        </div>
    )
}

export default Repo
