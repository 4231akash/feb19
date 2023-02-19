import React from 'react';

const BackDrop = ({Sidebar,CloseToggle}) => {
    return (
        <div  className={Sidebar?"backdrop backdrop--open":"backdrop" } onClick={CloseToggle}></div>
    );
}

export default BackDrop;
