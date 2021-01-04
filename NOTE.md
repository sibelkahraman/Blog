# Redirection
Using ```this.props.history.push('new_page')``` is add current page to stack 
Using ```this.props.history.replace('new_page')``` and ```<Redirect to='/new_page'>``` are not add current page to stack

Stack is used to go to backward or forward between pages