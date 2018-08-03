import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount(){
    console.log('Loading Posts Index');
    this.props.fetchPosts();
  }

  renderPosts(){
    // have to use lodash's map function, since posts is an object
    return _.map(this.props.posts, post => {
      return (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      );
    });
  }

  render(){
    // console.log('Current properties in Posts:', this.props.posts);  // Log properties
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    posts: state.posts
  };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
