import React,{Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>Welcome to {this.props.name}'s Recipe Site!</h1>
            </div>
         );
    }
}
 
export default Header;