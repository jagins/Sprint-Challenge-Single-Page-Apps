import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';

function Navigation()
{
    return (
        <div className='navigation'>
            <Switch>
                <Route exact path='/'>
                    <WelcomePage/>
                </Route>
                <Route path='/characters'>
                    <CharacterList/>
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