import React from 'react';
import NavBar from './NavBar';

const Search = (text) => {
    return (
        <div>
            <div>
                <NavBar/>
            </div>
             <div>{text} hiiii</div>
        </div>
    );
}

export default Search;
