import React, {Component} from 'react';
import axios from '../../../axiosInstance';
import Post from '../../../components/Post/Post';
import {Link} from 'react-router-dom';

class Posts extends Component {
    state={
        post:[],
    }

    componentDidMount(){
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author:'Sibel'
                    }
                })
                this.setState({post:updatedPosts});
                console.log(response);
            })
            .catch(error => {
                console.log(error)
                // this.setState({
                //     error: true
                // })
            });
    
    }
    postSelectedHandler = (id) =>{
        this.setState({
            selectedPostId:id
        })
    }
    render(){
        let posts = <div>Something Went Wrong</div>
        if(!this.state.error){
            posts = this.state.post.map(
                post => {
                    return (
                        <Link to={'/' + post.id} key={post.id}>
                            <Post 
                            title={post.title} 
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}/>
                        </Link>);
                }
            )
        }
        return(
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;