import React from "react"
import ReactDOM from "react-dom"
import { Route, Switch } from "react-router-dom"
import { About, Skills, Experience, Resume } from "../Pages";
class MainContainer extends React.Component{
   constructor(props){
      super(props);        
   }
    
    
   render() {

      return (
         <Switch>
            <Route exact path="/AboutMe" component={About} />
            <Route exact path="/AboutMe/about" component={About} />
            <Route path="/AboutMe/skills" component={Skills} />
            <Route path="/AboutMe/experience" component={Experience} />
            <Route path="/AboutMe/resume" component={Resume} />
         </Switch>
      )

   }
}

export { MainContainer }

