import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state={
        selectedPostId: null,
        selectedPost: null
    }

    componentDidUpdate(){
        if(this.props.id){
            console.log(this.props.id);
            if(!this.state.selectedPost || (this.state.selectedPost && this.state.selectedPost.id !== this.props.id)){
                axios.get('/posts/' + this.props.id)
                    .then(response => {
                        console.log(response.data)
                        this.setState({
                            selectedPostId:this.props.id,
                            selectedPost: response.data
                        })
                });   
            }
        }
    }

    deletePostHandler = () =>{
        axios.delete('/posts/' + this.props.id)
            .then(response => {
                console.log(response);

            })
    }

    render () {
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if(this.props.id){
            post = <div style={{textAlign:'center'}}>LOADING</div>
            if(this.state.selectedPost){
                post = (
                    <div className="FullPost">
                        <h1>{this.state.selectedPost.title}</h1>
                        <p>{this.state.selectedPost.body}</p>
                        <div className="Edit">
                            <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                        </div>
                    </div>
        
                );
            }
        }
        
        
        return post;
    }
}

export default FullPost;