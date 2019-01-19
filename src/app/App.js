import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { action, observable, reaction } from "mobx";
import Router from "./Router";

//process.env.NODE_ENV 로 개발 인지 구분
@inject("router")
class App extends Component {

    render(){
        return (
            <React.Fragment>
                <div>
                    <Link to="/1">
                        <button>
                            11s
                        </button>
                    </Link>
                    <button onClick={()=>{this.props.router.push("/2")}}>
                        2d
                    </button>
                    <button onClick={()=>{this.props.router.push("/3")}}>
                        3ds
                    </button>
                </div>
                <div>
                    <Router />
                </div>
            </React.Fragment>
        );

    }
}

export default App;