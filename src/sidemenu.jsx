import React from 'react'
import Usermanagement from './Usermanagement.jsx';
import Dashboard from './dashboard.jsx';
import Permissions from './permissions.jsx';
import Actions from './Actions.jsx';
import Notifications from './Notifications.jsx';
import Portfolio from './portfolio.jsx';
const sidemenu = ({count}) => {
let content;
if( count==1)
content=<Dashboard/>;
if(count==2)
    content=<Portfolio/>;
if(count==3)
content=<Notifications/>;
if(count==4)
content=<Actions/>;
if(count==5)
content=<Permissions/>;
if(count==6)
content=<Usermanagement/>;
  return (
    <div >{content}</div>
  )
}

export default sidemenu