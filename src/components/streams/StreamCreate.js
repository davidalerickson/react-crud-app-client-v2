import React from 'react'
import { Field, reduxForm } from 'redux-form'
import  { connect } from 'react-redux'
import { createStream } from '../../actions'

class StreamCreate extends React.Component {

    renderError({ error, touched }){
        if(touched && error){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta  }) => { //destructured formProps
        //test if touched and error to see if you want to display error class on field
        const classNm = `field ${meta.error && meta.touched ? "error" : ""}`
        return (
            <div className={classNm}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        )
    }

    //redux-form handleSubmit prevents default action just passes in values
    onSubmit = (formValues) => {
        this.props.createStream(formValues)
    }

    render(){
        return (
            <div>
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="title" component={this.renderInput} label="Enter Title"/>
                    <Field name="description" component={this.renderInput} label="Enter Description"/>
                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        )
    }
}

const validate= (formValues) => {
    // console.log(formValues)
    const errors = {};
    if(!formValues.title){
        errors.title = 'You must enter a title'
    }
    if(!formValues.description){
        errors.description = 'You must enter a description'
    }
    return errors
}

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate)

//reduxForm had already wired to redux, so we created formWrapped to encapusulate everything in to a connect.
export default connect(null, { createStream })(formWrapped)

