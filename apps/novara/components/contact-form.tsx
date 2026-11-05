"use client";
export default function ContactForm() {
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.alert("This enquiry form is a frontend prototype. Message delivery will be connected in the next backend phase.");
  }
  return <form className="contact-form" onSubmit={submit}>
    <label>Your name<input name="name" required placeholder="Name" /></label>
    <label>Work email<input name="email" type="email" required placeholder="you@company.com" /></label>
    <label>Project type<select name="project"><option>Business website</option><option>Corporate website</option><option>E-commerce</option><option>Custom platform</option><option>Something else</option></select></label>
    <label>Tell us a little about it<textarea name="message" rows={3} placeholder="A few details about your project..." /></label>
    <button className="button button-light" type="submit">Prepare enquiry ↗</button>
    <small>Demonstration form. Secure enquiry delivery will be configured in the next phase.</small>
  </form>;
}
