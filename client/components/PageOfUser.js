import React from 'react';
import {Link} from 'react-router-dom';
import RaisedButton from "material-ui/RaisedButton";

class PageOfUsers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='messageOfReg'> YOU were registered</div>
                <Link to="/"> <RaisedButton label='Exit'
                                            className='btnExit'
                                            primary/>
                </Link>
            </div>
        );
    }
}

export default PageOfUsers;