import React, { Component } from 'react'; 
import { connect } from 'react-redux';

class Postcomponents extends Component{

    handleClick = () => {
        this.props.deletePost(this.props.posts.id);
        this.props.history.push('/');
    }

    render(){
        console.log(this.props)

        const post = this.props.post ?
         
        <div>Loading</div>:

         <div>
        {this.props.posts.title}
        <button onClick={this.handleClick}>Delete Post</button>
        </div>
            
        return(
            <div>{post}</div>
        )
    }
}

const mapStateToPorps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;

    return{
        posts: state.posts.find( post => +post.id === +id ) //added plus because its a string
    }
}

const mapDispatchToPorps = (Dispatch)=> {
    return{
        deletePost: (id) => { Dispatch({type: 'Delete_Post', id: id})}
    }
}

export default connect(mapStateToPorps, mapDispatchToPorps)(Postcomponents);