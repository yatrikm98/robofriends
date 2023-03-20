import React from 'react';
import CardList from '../components/CardList';
import robots from '../components/robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
class App extends React.Component{
constructor(){
    super()
    this.state={
        robots:[],
        searchField:""
    }
}

componentDidMount(){

fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
    return response.json()
}).then(actualdata=>this.setState({robots:actualdata}))

    // console.log('check')
    
}

onSearchChange=(event)=>{
    this.setState({searchField:event.target.value})
    
   
}
    render () {
        const {robots,searchField}=this.state
        const filteredRobots=robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
         })
         return (!robots.length)?
   <h1>Loading</h1>:
 
     (
        <div className='tc'>    
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/><br/>
        <Scroll>   
        <ErrorBoundary>       
        <CardList robots={filteredRobots}/>
        </ErrorBoundary>
        </Scroll>
        </div>
    )
}
}    

export default App;