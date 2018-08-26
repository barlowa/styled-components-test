import React from 'react';
import { connect } from 'react-redux';
import { testAction } from '../actions/globalActions'
import styled from "styled-components";
import Users from '../components/users'

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  text-align: center;
`;

class Home extends React.Component{
  componentDidMount(){
    this.props.testAction()
  }
  render(){
    return (
    <Wrapper>
      <Title>
        There are currently {this.props.global.users} online!
      </Title>
      <Users
        UserData={this.props.global.result1}
      />
      <Users
        UserData={this.props.global.result2}
      />
      <Users
        UserData={this.props.global.result3}
      />
      <Users
        UserData={this.props.global.result4}
      />
      <Users
        UserData={this.props.global.result5}
      />
      <Users
        UserData={this.props.global.result6}
      />
      <Users
        UserData={this.props.global.result7}
      />
      <Users
        UserData={this.props.global.result8}
      />
      <Users
        UserData={this.props.global.result1}
      />
      <Users
        UserData={this.props.global.result2}
      />
      <Users
        UserData={this.props.global.result3}
      />
      <Users
        UserData={this.props.global.result4}
      />
      <Users
        UserData={this.props.global.result5}
      />
      <Users
        UserData={this.props.global.result6}
      />
      <Users
        UserData={this.props.global.result7}
      />
      <Users
        UserData={this.props.global.result8}
      />
      <Users
        UserData={this.props.global.result1}
      />
      <Users
        UserData={this.props.global.result2}
      />
      <Users
        UserData={this.props.global.result3}
      />
      <Users
        UserData={this.props.global.result4}
      />
      <Users
        UserData={this.props.global.result5}
      />
      <Users
        UserData={this.props.global.result6}
      />
      <Users
        UserData={this.props.global.result7}
      />
      <Users
        UserData={this.props.global.result8}
      />
    </Wrapper>
    );//return
  }//render
}//component


const mapStateToProps = (state => {
  return { 
    global: state.global
  }
})

export default connect((mapStateToProps), { testAction })(Home);