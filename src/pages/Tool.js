import React from 'react'
import axios from 'axios';
import * as settings from '../settings';
import styled from "styled-components";
// import SubmitButton from './ContactButton';
import SubmitButton from '../components/Contact/ContactButton';


export default class PersonList extends React.Component {
    state = {
      h1: '',
      h2: '',
      output: '',
      loading: false,
      start: true
    }
  
    handleChange = event => {
    console.log(this.state.loading);
      this.setState({ h1: event.target.value });
    }
  
    handleChange1 = event => {
        this.setState({ h2: event.target.value });
    }

    handleSubmit = event => {
      event.preventDefault();
      this.setState({start: false, loading: true});
      console.log(this.state.loading);
      const user = {
        h1: this.state.h1,
        h2: this.state.h2
      };

      axios.post(`http://localhost:8000/api/classify/`, { user } 
      // {
        // headers: {
        // // 'Content-Type': 'application/json',
        // // 'Accept': '*/*',
        // 'Access-Control-Allow-Origin': '*'
        // }}
        )
        .then(res => {
          console.log(res);
          console.log(res.data);
          this.setState({ output: res.data })
          return res
        })
        .then(res => {
            this.setState({loading: false});
        })
    }
  
    render() {
      return (
        <ToolWrapper>
        <div>
          <form onSubmit={this.handleSubmit} className='form_container'>
            <div className='form_title'>
                <h3>Enter Heading and Content</h3>
            </div>
            <div className='input_area'>
                <div className='form_heading'>
                    <label for='heading'>Heading: </label>
                    <br></br>
                    <textarea id='heading' type="text" name="h1" onChange={this.handleChange} rows='5' cols='50' required/>
                </div>
                <div className='form_heading'>
                    <label for='content'>Content: </label>
                    <br></br>
                    <textarea id='content' type="text" name="h2" onChange={this.handleChange1} rows='5' cols='50' required/>
                </div>
            </div>
            
            {/* <button type="submit">submit</button> */}
            <SubmitButton text='submit' />
          </form>
          <div className='result_container'>
              { !this.state.start ?
              <div>
                  { !this.state.loading ?
                  // this.state.output[0]
                <div className='result_section_container'> 
                  <div className='result_heading'>
                    <div className='result_title'>
                        <h2>Heading</h2>
                    </div>
                    {   
                        this.state.output[0]? 
                        <h3>Seems this is {this.state.output[0]} News..</h3>:<h3></h3>
                    }
                    <br></br>
                    {   
                        this.state.output[2]? 
                        <h3>Seems this is {this.state.output[2]} News..</h3>:<h3></h3>
                    }                    
                    <br></br>
                    {   
                        this.state.output[4]? 
                        <h3>Seems this is {this.state.output[4]}</h3>:<h3></h3>
                    } 
                    <br></br>
                    {   
                        this.state.output[6]? 
                        <h3>Seems this is {this.state.output[8]}% {this.state.output[6]}</h3>:<h3></h3>
                    } 
                    <br></br>
                  </div> 
                  <div className='result_content'>
                    <div className='result_title'>
                        <h2>Content</h2>
                    </div>
                    {   
                        this.state.output[1]? 
                        <h3>Seems this is {this.state.output[1]} News..</h3>:<h3></h3>
                    }                     
                    <br></br>
                    {   
                        this.state.output[3]? 
                        <h3>Seems this is {this.state.output[3]} News..</h3>:<h3></h3>
                    } 
                    <br></br>
                    {   
                        this.state.output[5]? 
                        <h3>Seems this is {this.state.output[5]}</h3>:<h3></h3>
                    } 
                    <br></br>
                    {   
                        this.state.output[7]? 
                        <h3>Seems this is {this.state.output[9]}% {this.state.output[7]}</h3>:<h3></h3>
                    } 
                    <br></br>
                  </div>
                </div> :
                <h1>Loading..</h1>
                }
              </div>
             : 
            
                <h1>Result Will be Displayed Here</h1>
                
            }
          </div>
        </div>
        </ToolWrapper>
      )
    }
  }


const ToolWrapper = styled.div`
    margin-top: 3rem;
    padding: 30px;
    min-height: 86vh;
    display: flex;
    justify-content: center;
    /* align-items: center; */
  .form_container {
      /* margin: auto 0; */
      padding: 20px;
      /* background: purple; */
      /* box-shadow: 19px 9px 7px 3px rgba(0,0,0,0.3); */
      /* color: whitesmoke; */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
  .form_title {
      font-size: 25px;
      /* font-weight: ; */
      color: rgb(114, 185, 232);
      letter-spacing: 3px;
      padding: 15px;
      text-transform: uppercase;
      /* text-decoration: underline; */
  }
  .form_heading {
      font-size: 18px;
      font-weight: lighter;
      letter-spacing: 2px;
      padding: 15px;
      text-transform: uppercase;
  }
  .input_area {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px;
    justify-content: center;
    align-items: center;
  }
  textarea {
      // border: 1px solid grey;
      // border-radius: 10px;
      // outline: none;
      // padding: 6px;
      // font-weight: bolder;
      // font-size: 16px;
      width: 100%;
      height: 150px;
      padding: 12px 20px;
      box-sizing: border-box;
      border: 2px solid #ccc;
      border-radius: 4px;
      background-color: #f8f8f8;
      resize: none;
  }
  .result_section_container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      /* border: 1px solid black; */
      
  }
  .result_heading {
      /* background: red; */
      width: 100%;
      height: 100%;
      border: 1px solid black;
  }
  .result_content {
      /* background: green; */
      width: 100%;
      height: 100%;
      border: 1px solid black;

  }
  .result_heading, .result_content {
      padding: 10px;
      display: flex;
      /* justify-content: center; */
      align-items: center;
      flex-direction: column;
  }
  .result_container {
      padding: 20px;
      margin-top: 20px;
      width: 700px;
      height: 400px;
  }
  .result_title {
      padding: 5px;
      margin-bottom: 20px;
  }
`;

// export default Tool;