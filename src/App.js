import React from 'react'
import Main from './Main';
import EditForm from './EditForm';
import NewForm from './NewForm';
import { Route, Switch } from 'react-router';

const App = ()=>{
    return(
        <>
        <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/newform' component={NewForm}/>
        <Route path='/editform' component={EditForm}/>
        </Switch>
        </>
    )
}

export default App;