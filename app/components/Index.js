import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import LogoImg from '../../public/assets/imgs/rak-logo.jpg';
import OrgList from '../containers/orgs_list';
import Login from './Login';

function loginButton() {
    return <Login />;
}

export default class Index extends Component {
    render() {
        return (
            <div className="container main">
                <div className="row">
                    <div className="col m4">
                        <div id="cellular">
                            <div className="center" id="cellular-inside">
                                <a href="index.html"><img className="smallimg" src={LogoImg} /></a>
                                <form>
                                    Category Type: <br /><br /><input id="category" type="text" name="Category" value="" /><br /><br /><br />
                                </form>
                                <button onClick={loginButton} id="viewcharity" className="btn waves-effect waves-light" type="submit" name="action">View Charities
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                            <div id="homebutton">
                            </div>
                        </div>
                        </div>
                    <div className="col m8">
                        <div id="aboutus">
                            <h2>What Is RAK?</h2>
                            <p className="padding">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                            of Lorem Ipsum.</p>
                        </div>
                        <div className="row center paddingtwo">
                            <div className="col m4">
                                <button id="login" className="btn waves-effect waves-light" type="submit" name="action">Login
                                     <i className="material-icons right">send</i>
                                </button>
                            </div>
                            <div className="col m4">
                                <button id="signup" className="btn waves-effect waves-light" type="submit" name="action">Sign Up
                                   <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
