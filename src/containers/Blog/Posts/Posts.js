import React, {Component} from 'react';
import axios from '../../../axiosInstance';
import Post from '../../../components/Post/Post';
import {Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state={
        post:[],
        error:false
    }

    componentDidMount(){
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author:'Sibel'
                    }
                });
                this.setState({post: updatedPosts});
                console.log(response);
            })
            .catch(error => {
                console.log(error)
            });
    
    }
    postSelectedHandler = (id) =>{
        //Programaticly navigation to next page
        //this.props.history.push({pathname: '/posts/' + id});
        this.props.history.push('/posts/' + id);

    }
    render(){
        console.log('POSTS');
        let posts = <div>Something Went Wrong</div>
        if(!this.state.error){
            posts = this.state.post.map(
                post => {
                    return (
                        //<Link to={'/posts/' + post.id} >
                            <Post 
                            key={post.id}
                            title={post.title} 
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}/>
                        //</Link>
                        );
                });
        }
        console.log(posts);
        return(
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
            </div>
        );
    }
}

export default Posts;