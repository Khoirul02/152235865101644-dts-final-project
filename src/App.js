import {Switch, Route, Redirect } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Detail from './pages/Detail';
import Favorite from './pages/Favorite';
// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import './assets/styles/tailwind.css';

function App() {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/favorite" component={Favorite} />
            <Route exact path="/detail/:id" component={Detail} />
            <Redirect from="*" to="/" />
        </Switch>
    );
}

export default App;
