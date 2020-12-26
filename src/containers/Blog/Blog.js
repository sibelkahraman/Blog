import React, { Component } from 'react';
import './Blog.css';
import Posts from '../../containers/Blog/Posts/Posts';
import NewPost from '../../containers/Blog/NewPost/NewPost';
import FullPost from '../../containers/Blog/FullPost/FullPost';

import {Route, NavLink} from 'react-router-dom';


class Blog extends Component {

    render () {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><NavLink exact to='/'>Home</NavLink></li>
                            <li><NavLink to={{
                                        pathname:'/new-post',
                                        hash:'#submit',
                                        search:'?quick-submit=true'}}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={() => <p>Home</p>}/>
                <Route path='/' render={() => <h1>Home 2</h1>}/> */}
                <Route path='/' exact component={Posts}/>
                <Route path='/new-post' component={NewPost}/>
                <Route path='/:id' exact component={FullPost}/>
            </div>
        );
    }
}

export default Blog;