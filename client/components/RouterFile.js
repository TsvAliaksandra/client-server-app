import React from 'react';
import {BrowserRouter as Router, Route, browserHistory} from 'react-router-dom';
import PageOfRegistration from './PageOfRegistration';
import PageOfAuth  from './PageOfAutorization';
import PageOfUser from './PageOfUser';


require('../style.less');


class RouterFile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Router >
                    <div>
                        <Route exact path="/" component={PageOfAuth}/>
                        <Route path="/signup" component={PageOfRegistration}/>
                        <Route path="/users" component={PageOfUser}/>
                    </div>
                </Router>
        )
    };
}

export default RouterFile ;