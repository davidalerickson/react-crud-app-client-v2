import React from 'react'
import  { connect } from 'react-redux'
import { createStream } from '../../actions'
import StreamForm from './StreamForm'

class StreamCreate extends React.Component {

    //redux-form handleSubmit prevents default action just passes in values
    onSubmit = (formValues) => {
        console.log(formValues)
        this.props.createStream(formValues)
    }

    render(){
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm
                onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

//reduxForm had already wired to redux, so we created formWrapped to encapusulate everything in to a connect.
export default connect(null, { createStream })(StreamCreate)

