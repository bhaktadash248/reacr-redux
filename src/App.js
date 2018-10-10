import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {

    console.log(this.props);
    const {post} = this.props;
    const postlength =
      post.map( post => {
        return(
          <div key={post.id}>
          
            <Link to={'/'+ post.id}><h3>{post.title}</h3></Link>
         
          </div>
          
      )
      })

    return (
      <div>
        {postlength}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    post: state.posts
  }
}

export default connect(mapStateToProps)(App);
