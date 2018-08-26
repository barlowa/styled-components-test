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
  padding: 10px;
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
        There are currently {this.props.global.users} users online!
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
        UserData={this.props.global.result9}
      />
      <Users
        UserData={this.props.global.result10}
      />
      <Users
        UserData={this.props.global.result11}
      />
      <Users
        UserData={this.props.global.result12}
      />
      <Users
        UserData={this.props.global.result13}
      />
      <Users
        UserData={this.props.global.result14}
      />
      <Users
        UserData={this.props.global.result15}
      />
      <Users
        UserData={this.props.global.result16}
      />
      <Users
        UserData={this.props.global.result17}
      />
      <Users
        UserData={this.props.global.result18}
      />
      <Users
        UserData={this.props.global.result19}
      />
      <Users
        UserData={this.props.global.result20}
      />
      <Users
        UserData={this.props.global.result21}
      />
      <Users
        UserData={this.props.global.result22}
      />
      <Users
        UserData={this.props.global.result23}
      />
      <Users
        UserData={this.props.global.result24}
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
        UserData={this.props.global.result9}
      />
      <Users
        UserData={this.props.global.result10}
      />
      <Users
        UserData={this.props.global.result11}
      />
      <Users
        UserData={this.props.global.result12}
      />
      <Users
        UserData={this.props.global.result13}
      />
      <Users
        UserData={this.props.global.result14}
      />
      <Users
        UserData={this.props.global.result15}
      />
      <Users
        UserData={this.props.global.result16}
      />
      <Users
        UserData={this.props.global.result17}
      />
      <Users
        UserData={this.props.global.result18}
      />
      <Users
        UserData={this.props.global.result19}
      />
      <Users
        UserData={this.props.global.result20}
      />
      <Users
        UserData={this.props.global.result21}
      />
      <Users
        UserData={this.props.global.result22}
      />
      <Users
        UserData={this.props.global.result23}
      />
      <Users
        UserData={this.props.global.result24}
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