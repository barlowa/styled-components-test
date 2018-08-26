import React from 'react'
import {Container, Picture, Text} from "../styledComponents/theme";

class Users extends React.Component {
  
  render(){
    if(this.props.UserData === undefined){
      console.log('user data is empty')
      return(
        <div>
          Loading
        </div>
      )//return
      }else{
        return(
          this.props.UserData.data.map((results)=>{
            return(
              <Container key={results.id}>
                <Picture><img src={results.avatar} alt={results.first_name}/></Picture>
                <Text><div>{results.first_name}</div></Text>
                <Text><div>{results.last_name}</div></Text>
              </Container>
            )
          })
        )//return
      }//ifelse
  }//render
}//component


export default Users;