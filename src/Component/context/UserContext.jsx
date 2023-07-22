import React, {useState} from "react";

const UserContext = React.createContext();

export const AuthProvider = ({children})=>{
    const [appliedId, setAppliedId] = useState('');
    const [marketAppliedList, setMarketAppliedList] = useState([]);

    return (
        <UserContext.Provider value={{marketAppliedList, setMarketAppliedList, appliedId, setAppliedId}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;