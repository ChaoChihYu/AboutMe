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
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/experience" component={Experience} />
            <Route path="/resume" component={Resume} />
         </Switch>
      )

   }
}

export { MainContainer }

