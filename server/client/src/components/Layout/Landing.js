import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component{
    render(){
        return(
            <div style={{ height: "75vh" }} className="container valign-wrapper">
                <div className="='row">
                    <div className="col s12 center-align">
                        <h4>
                            <b>Login Auth App</b>
                             <p>A full-stack app with user authentication via passport and JWT</p>
                            <div className="col s6">
                                <Link
                                    to="/register"
                                    style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                    }}
                                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                >
                                    Register
                                </Link>
                            </div>
                            <div className="col s6">
                                <Link
                                    to="/login"
                                    style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                    }}
                                    className="btn btn-large btn-flat waves-effect white black-text"
                                >
                                    Log In
                                </Link>
                            </div>
                        </h4>

                    </div>
                </div>

            </div>
        )
    }
}

export default Landing;