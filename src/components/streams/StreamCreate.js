import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {

    renderInput({ input, label, meta  }){ //destructured formProps
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input}/>
                <div>{meta.error}</div>
            </div>
   

        )
    }

    //redux-form handleSubmit prevents default action just passes in values
    onSubmit(formValues){

    }

    render(){
        return (
            <div>
                <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
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

export default reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate)

