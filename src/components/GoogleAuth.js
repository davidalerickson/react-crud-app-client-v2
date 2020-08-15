import React, { Component } from 'react'

export class GoogleAuth extends Component {

    state = { isSignedIn: null }

    componentDidMount() {
        //Load the client Google OAuth from loader on the window object that was referenced in the script tag index.html
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({ 
                clientId: '603572671189-vep01tu0k5v0j4qo30dejeimkk8t95kj.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                //after init create and auth2 instance and update state with isSignedIn which will rerender and we can then say if user is signed in 
                this.auth = window.gapi.auth2.getAuthInstance()
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
                this.auth.isSignedIn.listen(this.onAuthChange) 
                 
            })
        })
    }

    onAuthChange = () => {
        //update state when login or logout
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    }

    onSignIn = () => {
        this.auth.signIn()
    }

    onSignOut = () => {
        this.auth.signOut()
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null){
            return null
        }else if(this.state.isSignedIn){
            return (
                <button onClick={this.auth.signOut} className="ui red google button">
                    <i className="google icon"/>
                        Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.auth.signIn} className="ui red google button">
                    <i className="google icon"/>
                        Sign in with Google
                </button>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

export default GoogleAuth

