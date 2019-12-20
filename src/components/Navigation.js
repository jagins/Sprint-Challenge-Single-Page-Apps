import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';

function Navigation()
{
    return (
        <div className='navigation'>
            <Switch>
                <Route path='/characters'>
                    <CharacterList/>
                </Route>
                <Route exact path='/'>
                    <WelcomePage/>
                </Route>
            </Switch>
            <div className='nav-links'>
                <Link to='/'>Home</Link>
                <Link to='/characters'>Characters</Link>
            </div>
        </div>
    );
}

export default Navigation;