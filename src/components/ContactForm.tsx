import React, { useState } from 'react';
import styled from 'styled-components';
import { init, send } from 'emailjs-com';


const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 50px 0;
  height: var(--page-height);
`;

const H2 = styled.h2`
  color: ${props => props.theme.grayscale.darkgrey};
`;

const MidAlign = styled.div`
  width: 500px;
  max-width: 100%;
  padding: 0 25px;
  margin: 0 auto;
  box-sizing: border-box;
`;


const Content = styled.div`
  width: 100%;
`;

const EmailBox = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;

  font-family: inherit;
  border: 1px solid ${props => props.theme.main.light};

  outline: none;

  :focus {
    background-color: #eef4f5;
  }
`;

const MessageBox = styled.textarea`
  box-sizing: border-box;
  display: block;
  width: 100%;
  min-height: 150px;
  padding: 10px;

  border: 1px solid ${props => props.theme.main.light};
  font-family: inherit;

  outline: none;
  resize: vertical;

  :focus {
    background-color: #eef4f5;
  }
`;

const Button = styled.a`
  box-sizing: border-box;
  display: inline-block;
  margin-top: 10px;
  cursor: pointer;

  padding: 10px 20px;

  background-color: #eef4f5;
  border-radius: 2px;
`;

interface ResponseMessageProps {
  colour?: string
}

const ResponseMessage = styled.span<ResponseMessageProps>`
  font-style: italic;
  padding-left: 10px;

  color: ${props => props.colour ?? "black"};
`

export default function ContactForm() {
  const [responseMessage, setResponseMessage]: [any, any] = useState({});

  init('user_tkQmv7PBHgWwHtOT4o1XD');

  const handleSubmit = () => {
    const email = document.getElementById('email-input')! as HTMLInputElement;
    const message = document.getElementById('message-input')! as HTMLInputElement;


    // If @ symbol exists
    if (email.value.indexOf('@') !== -1) {
      const templateObject = {
        reply_to: email.value,
        message: message.value,
      };

      setResponseMessage({ message: "Message sent successfully!", colour: "green" });
      email.value = '';
      message.value = '';
      
      setTimeout(() => {
        setResponseMessage({});
      }, 3000);

      send('contact_service', 'template_vg8jwp9', templateObject).then((err) => {
        if (err.status === 200) {
          console.log('Email sent!');
          


        } else {
          throw new Error('Error when sending email!');
        }
      });
    }
  };

  return (
    <Container>
      <MidAlign>
        <Content>
          <H2>Let's grab a coffee.</H2>
          <EmailBox placeholder={'your email address'} id={'email-input'} />
          <MessageBox name='text' rows={1} cols={1} placeholder={'message...'} id={'message-input'} />

          <Button onClick={handleSubmit}>Send</Button><ResponseMessage colour={responseMessage ? responseMessage.colour : null}>{responseMessage ? responseMessage.message : null}</ResponseMessage>
        </Content>
      </MidAlign>
    </Container>
  );
}
