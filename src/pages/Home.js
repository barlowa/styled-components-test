import React from 'react';
import { connect } from 'react-redux';
import { testAction } from '../actions/globalActions'
import styled from "styled-components";
import {Container} from "../styledComponents/theme";


// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;



class Home extends React.Component{
  componentDidMount(){
    this.props.testAction()
  }
  render(){
    return (
      <div>
        <Wrapper>
            <Title>
              Hello World, this is my first styled component!
              </Title>
        </Wrapper>
            <Container>
               {this.props.global.result4? this.props.global.result4.data.map((results)=>{
                  return(
                    <div>
                      <img src={results.avatar}/>
                      <div>{results.first_name}</div>
                      <div>{results.last_name}</div>
                    </div>
                    )
                  })
                : ''}
              </Container>
              <Container>
               {this.props.global.result3 ? this.props.global.result3.data.map((results)=>{
                  return(
                    <div>
                      <img src={results.avatar}/>
                      <div>{results.first_name}</div>
                      <div>{results.last_name}</div>
                    </div>
                    )
                  })
                : ''}
              </Container>
              <Container>
               {this.props.global.result2? this.props.global.result2.data.map((results)=>{
                  return(
                    <div>
                      <img src={results.avatar}/>
                      <div>{results.first_name}</div>
                      <div>{results.last_name}</div>
                    </div>
                    )
                  })
                : ''}
              </Container>
              <Container>
               {this.props.global.result1? this.props.global.result1.data.map((results)=>{
                  return(
                    <div>
                      <img src={results.avatar}/>
                      <div>{results.first_name}</div>
                      <div>{results.last_name}</div>
                    </div>
                    )
                  })
                : ''}
              </Container>
      </div>
    );//return
  }//render
}//component


const mapStateToProps = (state => {
  return { 
    global: state.global
  }
})

export default connect((mapStateToProps), { testAction })(Home);