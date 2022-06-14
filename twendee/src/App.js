import React, {Component} from 'react'

class App extends Component{

constructor(props){
  super(props)
  this.state = {
    items:[],
    loading:false
  }
}

componentDidMount(){

fetch("https://randomuser.me/api/?page=3&results=10")
.then((Response) => Response.json())
.then((Response) => {
  this.setState({
    items:Response.results,
    loading:true
  })
})

}

  render(){
    var {items,loading} = this.state

    if(!loading){
      return (
        <div>Loading ...</div>
      )
    }

    else{
    return (
      <div className="container">
        <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Full Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Username</th>
      <th scope="col">Thumbnail</th>
    </tr>
  </thead>
  <tbody>
    
    {items.map ((item) => (
      <tr>
        <td> { item.name.title + item.name.first + item.name.last} </td>
        <td> { item.gender } </td>
        <td> { item.login.username } </td>
        <td><img src={ item.picture.thumbnail } alt=""></img> </td>


        
      </tr>
    ))}

    
  </tbody>
</table>
      </div>


      
    )
  }
}
}

export default App
