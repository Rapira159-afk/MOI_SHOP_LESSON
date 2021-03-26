import React from 'react';
import q from './Account.module.css'

const Account = () => {
    return (<div className={q.Account}> <button onClick = {()=> alert("ОЛАЛА")}>Аккаунт</button> </div>)
};
export {Account};