import './contactStyle.css';

const Contact = () => {

  function handleForm(e) {
    e.preventDefault()
    const button = document.getElementById('send');
    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;
    button.setAttribute('href', `mailto:fabio_sosapy@outlook.com?subject=name: ${name} email: ${email}&body=${message}`);
    button.click();
  }

  return (
    <section className="contact container mb-5 mt-5 pt-5 pt-md-5 text-sm-start text-md-center" data-bs-spy='scroll' data-bs-target='#navbar-container' data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true">
      <h2 className='text-start text-md-center text-uppercase fw-bolder fs-1' id='contact'>contact</h2>
      <form className='form-control' id='form' onSubmit={handleForm} action=''>
        <label htmlFor="name" className="form-label col-12 col-md-6">
          <input type="text" name='name' id='name' placeholder="Full Name" className="form-control" required/>
        </label>
        <label htmlFor="email" className="form-label col-12 col-md-6 ps-md-2">
          <input type="email" name='email' id='email' placeholder="Email" className="form-control" required/>
        </label>
        <label htmlFor="message" className="form-label col-12 col-md-12">
          <textarea name="message" id='message' cols="30" placeholder="Message" className="form-control" rows='3' required></textarea>
        </label>
        <button className="btn btn-success ">Send message</button>
      </form>
      <a href="mailto:fabio_sosapy@outlook.com" id='send' target='_blank'>send</a>
    </section>
  )
}

export default Contact