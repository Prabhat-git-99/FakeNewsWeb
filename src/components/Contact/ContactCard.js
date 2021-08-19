import React from 'react';
import styled from 'styled-components';
import {BiMessageDetail} from "react-icons/bi";
// import { GrLocation } from 'react-icons/gr';
import {MdCall} from "react-icons/md";
import { GoLocation } from "react-icons/go";

import SubmitButton from './ContactButton';

const ContactCard = () => {
    return (
        <ContactCardWrapper>
            <div className='card_container'>
                <div className='form_container'>
                    <div className='form_heading'>
                        <h3 className='f_h_title'>Send us a Message</h3>
                        <span className='icon'><BiMessageDetail /></span>
                    </div>
                    <div className='form'>
                        <form className='form_box' action="https://formsubmit.co/shravanipoman1999@gmail.com" method="POST">
                            <div className='form_row'>
                                <span className='label'>Enter Name</span><br/>
                                <input type='text'placeholder='Type Here' name='name'/>
                            </div>
                            <div className='form_row'>
                                <span className='label'>Email ID</span><br/>
                                <input type='text'placeholder='Type Here' name='email'/>
                            </div>
                            <div className='form_row'>
                                <span className='label'>Mobile No.</span><br/>
                                <input type='text'placeholder='Type Here' name='mobile'/>
                            </div>
                            <div className='form_row'>
                                <span className='label'>College</span><br/>
                                <input type='text'placeholder='Type Here' name='college'/>
                            </div>
                            <div className='form_row'>
                                <span className='label'>Message</span><br/>
                                <textarea placeholder='Type Here' row='4'/>
                            </div>
                            <div className='form_row c_btn'>
                                <SubmitButton text='Submit' />
                            </div>
                        </form>
                    </div>
                </div>
                <div className='details_container'>
                    <h3>Contact Information</h3>
                    <div className='deatils_wrapper'>
                        <div className='info'>
                            <span className='icon sec'><GoLocation /></span>
                            <h5>D.Y. Patil College of engineering akurdi,411033</h5>
                        </div>
                        <div className='info'>
                            <span className='icon sec'><MdCall /></span>
                            <h4>7057965399</h4>
                        </div>
                        <div className='info'>
                            <span className='icon sec'><BiMessageDetail /></span>
                            <h4>prabatwork3939@gmail.com</h4>
                        </div>
                    </div>
                </div>
            </div>
        </ContactCardWrapper>
    )
}

const ContactCardWrapper = styled.div`
    /* width: 600px; */
    /* height: 200px; */
    @media screen and (min-width: 1000px) {
    background: white;
    box-shadow: 1px 1px 1px 2px rgba(0,0,0,0.3);
    position: absolute;
    /* top: -50%; */
    top: 70%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 10;
    }
    textarea {
        border: none;
        outline: none;
        background: transparent;
    }
    h3 {
        color: white;
    }
    .f_h_title {
        color: rgba(0,0,0,0.7);
    }
    .form_heading {
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        align-items:center;
        color: rgba(0,0,0,0.7);
    }
    .form_box {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
    }
    .form_row {
        padding: 10px;
        flex-basis: 50%;
    }
    .card_container {
        min-height: 100% !important;
    }
    input {
        border: none;
        border-bottom: 1px solid rgba(0,0,0,0.3);
        outline: none;
        background: transparent;
        
    }
    .card_container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        /* align-items: flex-start; */
        align-items: stretch;
    }
    .form_container {
        flex-basis: 100%;
        padding: 20px;
    }
    .details_container {
        padding: 20px;
        background: rgb(0, 0, 77);
        width: 100%;
        display: inline-block;
        min-height: 100% !important;
    }
    span {
        padding: 8px;
    }
    .info {
        display: flex;
        align-items: center;
        color: whitesmoke;
        letter-spacing: 1px;
    }
    .deatils_wrapper {
        margin-top: 20px;
    }
    .label {
        color: rgba(0,0,0,0.8);
        font-size: 14px;
        font-weight: bold;
        padding: 2px;
        margin-top: 5px;
    }
    .icon {
        font-size: 20px;
    }
    .sec {
        color: whitesmoke;
    }
    .c_btn {
        padding-left: 10px;
    }
    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        .card_container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .form_container {
            background: whitesmoke;
            margin-top: 20px;
        }
        .details_container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`;

export default ContactCard;
