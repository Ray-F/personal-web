import styled from "styled-components";
import { init, send } from "emailjs-com";
import { useRouter } from "next/router";

const Container = styled.div`
  display: block;
  width: inherit;
`;

const EmailBox = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;

  font-family: inherit;
  border: 1px solid ${props => props.theme.colour.grey};

  outline: none;

  :focus {
    background-color: #eef4f5;
  }
`;

const MessageBox = styled.textarea`
  display: block;
  width: 100%;
  min-height: 150px;
  padding: 10px;

  border: 1px solid ${props => props.theme.colour.grey};
  font-family: inherit;

  outline: none;
  resize: vertical;

  :focus {
    background-color: #eef4f5;
  }
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 10px;
  cursor: pointer;

  padding: 10px 20px;

  background-color: #eef4f5;
  border-radius: 2px;
`;

export default function ContactForm() {
  const router = useRouter();

  init("user_tkQmv7PBHgWwHtOT4o1XD");

  const handleSubmit = () => {
    const email = (document.getElementById("email-input")! as HTMLInputElement).value;
    const message = (document.getElementById("message-input")! as HTMLInputElement).value;


    // If @ symbol exists
    if (email.indexOf("@") !== -1) {
      const templateObject = {
        reply_to: email,
        message: message,
      };

      const res = send("contact_service", "template_vg8jwp9", templateObject).then((err) => {
        if (err.status === 200) {
          console.log("Email sent!");
          window.location.href = "/contact";
        } else {
          throw new Error("Error when sending email!");
        }
      });
    }
  };

  return (
    <Container>
      <EmailBox placeholder={"your email address"} id={"email-input"} />
      <MessageBox name='text' rows={1} cols={1} placeholder={"message..."} id={"message-input"} />

      <Button onClick={handleSubmit}>Send</Button>
    </Container>
  );
}