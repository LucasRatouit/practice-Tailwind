import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const [idComponent, setIdComponent] = useState(1);

    const value = { idComponent, setIdComponent }
  
    return (
      <StateContext.Provider value={value}>
        {children}
      </StateContext.Provider>
    );
}

export const useStateContext = () => {
    return useContext(StateContext);
}
