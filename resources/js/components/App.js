import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from './Portfolio';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/blog' component={Blog}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/portfolio' component={Portfolio}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
