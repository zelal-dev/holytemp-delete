import { Button, DescriptionText, SectionTitle } from "../shared"

const ContactUs = () => {
  return (
    <>
      <SectionTitle>Contact Us </SectionTitle>
      <DescriptionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A dictum eget
        eleifend quam. Orci quis et cras viverra feugiat pretium. Maecenas
        tortor, aliquet blandit ornare. Sem a mattis interdum consectetur.
      </DescriptionText>
      <form>
        <input type='text' placeholder='Full Name' />
        <input type='text' placeholder='Phone' />
        <input type='email' placeholder='Email' />
        <textarea
          name='message'
          cols='30'
          rows='10'
          placeholder='Type your message'
        ></textarea>
      </form>
      <Button variant='square'>Send Message</Button>
      <img src='/contact-us-illustration.PNG' alt='Contact Us' />
    </>
  )
}

export default ContactUs
