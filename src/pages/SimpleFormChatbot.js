import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';

class SimpleFormChatbot extends Component {
  render() {
    return (
        <ChatBot 
            steps={[
            {
                id:'intro', 
                message:'Apakah anda mau mendapatkan infromasi yang lebih lengkap?', 
                trigger:'intro-user',
            },
            {
              id:'intro-user', 
              options:[
              {value:'y', label:'Ya', trigger:'yes-response'},
              {value:'n', label:'Tidak', trigger:'no-response'},
              ] 
            },
            {
              id:'yes-response', 
              message:'Silahkan Registrasi dan Login terlebih dahulu', 
              trigger:'end'
            },
            {
              id:'no-response', 
              message:'Oke, Selamat Datang di Website Restaurant Apps', 
              end:true,
            },
            {
              id:'end', 
              message:'Selamat Datang di Website Restaurant Apps', 
              end:true,
            },
            ]}
        />
    );
  }
       
}

export default SimpleFormChatbot;