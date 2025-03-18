import PropTypes from "prop-types";

function UserGreeting({ isLoggedIn = false, username = "Guest" }) {
    console.log("UserGreeting props:", { isLoggedIn, username });

    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Please log in to continue</h2>
    // }

    // return(props.isLoggedIn ?   <h2 className="welcome-message">Welcome {props.username}</h2> :
    //     <h2 className="login-prompt">Please log in to continue</h2>);

    
    const welcomeMessage = <h2 className="welcome-message">Welcome {username}</h2>;
    const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>;

    return isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

export default UserGreeting

/*
import PropTypes from "prop-types";

function UserGreeting(props) {
    const { isLoggedIn, username } = props;

    const displayName = username ?? "Guest"; 

    console.log("UserGreeting props:", { isLoggedIn, displayName });

    const welcomeMessage = <h2 className="welcome-message">Welcome {displayName}</h2>;
    const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>;

    return isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
};

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest", 
};

export default UserGreeting; */