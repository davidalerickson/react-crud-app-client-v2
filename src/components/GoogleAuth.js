import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

export class GoogleAuth extends Component {

    componentDidMount() {
        //Load the client Google OAuth from loader on the window object that was referenced in the script tag index.html
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({ 
                clientId: '603572671189-vep01tu0k5v0j4qo30dejeimkk8t95kj.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                //after init create and auth2 instance and update state with isSignedIn which will rerender and we can then say if user is signed in 
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange) 
                 
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        //update state when login or logout/login with google userId
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
        }else{
            this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton() {
        if(this.props.isSignedIn === null){
            return null
        }else if(this.props.isSignedIn){
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"/>
                        Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
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

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)

