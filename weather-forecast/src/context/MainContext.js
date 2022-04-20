import { createContext, useContext, useState } from "react";


const MainContext = createContext();

const MainProvider = ({children}) => {
    const [selectedCity, setSelectedCity] = useState("Ankara");

    const values = {selectedCity, setSelectedCity};

    return (
        <MainContext.Provider value={values}>
            {children}
        </MainContext.Provider>
    )
}

const useMain = () => useContext(MainContext);

export {useMain, MainProvider};