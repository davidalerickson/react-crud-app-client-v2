import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import history from '../../history'
import  { fetchStream, deleteStream } from '../../actions'


class StreamDelete extends React.Component {


    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }

    RenderActions = () => {
        return (
            <>
                <button onClick={() => this.props.deleteStream(this.props.match.params.id)} className="ui button negative">Delete</button>
                <Link to='/' className="ui button" >Cancel</Link>
            </>
        )
        }

        renderContent = () => {
            //Provides content even if stream has not yet loaded
            if(!this.props.stream){
                return 'Are you sure you want to delete this stream?'
            }
            return `Are you sure you want to delete this stream with title: "${this.props.stream.title}"`
        }


    render(){
        return (
                <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.RenderActions()}
                onDismiss={() => history.push('/')}
                />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete)

