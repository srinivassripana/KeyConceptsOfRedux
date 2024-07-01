import { useState } from "react";


const User = ({name})=>{
    const [count ] = useState(0);
    const [counnt2] = useState(1);
    return (
        <div  className="user-det">
        <h1>count : {count}</h1>
        <h1>count2 : {counnt2}</h1>
        <h2>{name}</h2>
        <h3>currently persuing B.Tech</h3>
        <h4>Just gona rock the front End</h4>
        </div>
    );
}

export default User;