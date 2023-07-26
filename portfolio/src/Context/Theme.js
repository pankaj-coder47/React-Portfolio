import React, { createContext } from 'react';
const Rise = createContext()





const Themer = (props) => {
    return (
        <Rise.Provider value={"hello we are working"} >
            {props.children}
        </Rise.Provider>
    )
}




export { Rise,Themer }
