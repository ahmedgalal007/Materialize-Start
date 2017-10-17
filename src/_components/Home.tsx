import * as React from "react";
var Link = require( "react-router-dom").Link;
export interface HelloProps { compiler: string; framework: string; }

export class Home extends React.Component<HelloProps, {}> {
    render() {
        return (
            <div>
                <Link to="/err">Not Found</Link>
                <div className="row">
                    <div className="col grid-example s12"><p>s12</p></div>
                    <div className="col grid-example s12 m4 l2 blue lighten-1"><p>s12 m4</p></div>
                    <div className="col grid-example s12 m4 l8 red lighten-1"><p>s12 m4</p></div>
                    <div className="col grid-example s12 m4 l2 blue lighten-1"><p>s12 m4</p></div>
                    <div className="col grid-example s12 m6 l3"><p>s12 m6 l3</p></div>
                    <div className="col grid-example s12 m6 l3"><p>s12 m6 l3</p></div>
                    <div className="col grid-example s12 m6 l3"><p>s12 m6 l3</p></div>
                    <div className="col grid-example s12 m6 l3"><p>s12 m6 l3</p></div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <div className="fixed-action-btn horizontal">
                            <a className="btn-floating btn-large red">
                                <i className="large material-icons">mode_edit</i>
                            </a>
                            <ul>
                                <li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a></li>
                                <li><a className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></a></li>
                                <li><a className="btn-floating green"><i className="material-icons">publish</i></a></li>
                                <li><a className="btn-floating blue"><i className="material-icons">attach_file</i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

