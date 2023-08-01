import React, {useState} from "react";

const UserContext = React.createContext();

export const AuthProvider = ({children})=>{
    const [appliedId, setAppliedId] = useState('');
    const [marketAppliedList, setMarketAppliedList] = useState([]);
    const [influStatus, setInfluStatus] = useState('');

    return (
        <UserContext.Provider value={{influStatus, setInfluStatus, marketAppliedList, setMarketAppliedList, appliedId, setAppliedId}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;