import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: false,
        };
    }
    cliquage = () => {
        this.setState({online: !this.state.online})
    }
    render() {
        return (
        <div className="Contact">
            <img className="avatar" src={this.props.avatar}/>
        
        <div className="name">{this.props.name}</div>
          <div className="status">
            <p>{this.state.online}</p>              
                <span 
                className={this.state.online ? "status-online" : "status-offline"}
                onClick={this.cliquage}
                >                    
                </span>
                <p className="status-text">{this.state.online ? "Online" : "Offline"}</p>
          </div>
        </div>
        )
    }
}

export default Contact;