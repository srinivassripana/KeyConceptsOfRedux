import User from "../components/User";
import UserClass from "../components/UserClass";
import React from "react";
class About extends React.Component{
    constructor(props){
        super(props);
        console.log("this is parent constructor")
    };
    componentDidMount(){
        console.log("this is parent mount")
    };
    render() {
        console.log("this is parent render");
        return(
            
            <div className="about">
            <h1>This is the about page</h1>
            {/* <User name = {"Sai Srinivas Sripana"}/> */}
            <UserClass name = {"sai srinivas"}  location = {"Bhimavaram"}/>
        </div>
        );
      
       
    };
        

};

export default About;