import styled from "@emotion/styled"
import { Button, DescriptionText, SectionTitle } from "../shared"
const Styles = {
  Wrapper: styled.section`
    margin: 120px;
  `,
  Flex: styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
  `,
  Form: styled.form`
    margin-right: 48px;
    > input,
    textarea {
      width: 100%;
      border: 0.5px solid #a5a5a5;
      height: 60px;
      margin-bottom: 24px;
      font-size: 16px;
      line-height: 24px;
      color: #a5a5a5;
      padding-left: 24px;
    }
    > textarea {
      height: 160px;
      margin-bottom: 40px;
    }
  `,
}
const ContactUs = () => {
  return (
    <Styles.Wrapper>
      <SectionTitle center>Contact Us </SectionTitle>
      <Styles.Flex>
        <DescriptionText center>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A dictum eget
          eleifend quam. Orci quis et cras viverra feugiat pretium. Maecenas
          tortor, aliquet blandit ornare. Sem a mattis interdum consectetur.
        </DescriptionText>
      </Styles.Flex>
      <Styles.Flex>
        <Styles.Form>
          <input type='text' placeholder='Full Name' />
          <input type='text' placeholder='Phone' />
          <input type='email' placeholder='Email' />
          <textarea name='message' placeholder='Type your message'></textarea>
          <Button variant='square' width='100%'>
            Send Message
          </Button>
        </Styles.Form>
        <img src='/contact-us-illustration.PNG' alt='Contact Us' />
      </Styles.Flex>
    </Styles.Wrapper>
  )
}

export default ContactUs
