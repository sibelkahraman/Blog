import React, { Component, Suspense} from 'react';
import './Blog.css';
import Posts from '../../containers/Blog/Posts/Posts';
// import NewPost from '../../containers/Blog/NewPost/NewPost';
import FullPost from '../../containers/Blog/FullPost/FullPost';
import asyncComponent from '../hoc/asyncComponent';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

const AsysncNewPost = asyncComponent(() => {
    return import('../../containers/Blog/NewPost/NewPost');
});

// Usage of lazy method 
// const Posts = React.lazy(() => {
//     return import('../../containers/Blog/Posts/Posts');
// });
// Usage lazy loading component with Suspense
{/* <Suspense fallback={<div>Loading...</div>}>
    <Post/>
</Suspense> */}

class Blog extends Component {
    state = {
        auth: true
    }
    render () {
        return (
            <div  className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/posts'>Home</NavLink></li>
                            <li><NavLink to={{
                                        pathname:'/new-post',
                                        hash:'#submit',
                                        search:'?quick-submit=true'}}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={() => <p>Home</p>}/>
                <Route path='/' render={() => <h1>Home 2</h1>}/> */}
                <Switch>
                    {this.state.auth ? <Route path='/new-post' component={AsysncNewPost}/> : null}
                    <Route path='/posts' component={Posts}/>
                    <Route render={() => <h1 style={{textAlign:'center'}}>NOT FOUND</h1>}/>
                    {/* <Redirect from='/' to='/posts'/> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;