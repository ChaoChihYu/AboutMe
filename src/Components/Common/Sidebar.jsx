import React from "react"
import ReactDOM from "react-dom"
import { Link } from "react-router-dom"

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFileAlt, faBriefcase, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
  },
});


class Sidebar extends React.Component{
   constructor(props){
      super(props);
         this.state = {           
      }        
   }
    
    
   render() {

      const { classes } = this.props;

      return (
         <div class="sidebar">
            <div style={{textAlign:'center'}}>
               <h3>趙之瑜</h3>
               <small>Karen Chao</small>
               <img />
               <p>Welcome to my personal website!</p>
               <Divider />
            </div>

            <ul style={{textAlign:'left'}}>
               <li>
                  <Link to="/AboutMe/about">
                     <FontAwesomeIcon icon={ faUser }/> About Me
                  </Link>
               </li>
               <li>
                  <Link to="/AboutMe/skills">
                     <FontAwesomeIcon icon={ faBookOpen }/> Skills
                  </Link>
               </li>          
               <li>
                  <Link to="/AboutMe/experience">
                     <FontAwesomeIcon icon={ faBriefcase }/> Work Experience
                  </Link>
               </li>
               <li>
                  <Link to="/AboutMe/resume">
                     <FontAwesomeIcon icon={ faFileAlt }/> Resume
                  </Link>
               </li>    
            </ul>
            
         </div> 

      )
    }
}


Sidebar.propTypes = {
   classes: PropTypes.object.isRequired,
};
const SidebarView = withStyles(styles)(Sidebar);
export { SidebarView }

