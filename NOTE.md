## Redirection
Using ```this.props.history.push('new_page')``` is add current page to stack.
Using ```this.props.history.replace('new_page')``` and ```<Redirect to='/new_page'>``` are not add current page to stack.

Stack is used to go to backward or forward between pages.

## Lazy Loading
React has lazy method that takes a method that will lazy load, It is added at 16:6 version.

```cont lazyLoadingComponent = React.lazy(() => { return import('component route'); }); ```

# Suspense
    
Suspense is React Component, It is added 16:6 version,
It waits some code to load and declaratively specify a loading state(like a spinner) while we are waiting.