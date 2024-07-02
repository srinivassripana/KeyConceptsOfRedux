import React from "react";

class UserClass extends React.Component{
   constructor(props){
    super(props);
    
    
    this.state={  
        userInfo : {
            name: "dummy-name",
            bio : "dummy-bio"
        }
    }
  
   };
   async componentDidMount(){
    
    const data = await fetch("https://api.github.com/users/srinivassripana");
    const  json = await data.json();
    console.log(json);

    this.setState({
        userInfo:json,
    })
 
   }
    render(){
        const {name , bio , avatar_url } = this.state.userInfo;
        return(
        <div  className=" ">
        <img className="mx-auto mb-4"src={avatar_url}></img>
        <h2>This is {name}</h2><br></br>
        <h3>currently persuing B.Tech</h3><br></br>
        <h4>{bio}</h4><br></br>
        </div>
        );
    };
}
export default UserClass;