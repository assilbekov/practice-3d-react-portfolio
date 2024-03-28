import { useRef, useState } from "react"
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => { }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => { }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // This is fake. I'm not going to use the service sending emails.
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        to_name: "me",
        to_email: "fake_email@fake.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_USER_ID
    )

    // Fake call.
    setTimeout(() => {
      setLoading(false);
      setForm({ name: "", email: "", message: "" })
    }, 10000)
  }

  return (
    <section className="flex relative flex-col lg:flex-row max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in touch</h1>
        <form
          className="flex w-full flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="john@gmail.com"
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your message
            <textarea
              name="message"
              className="textarea"
              placeholder="Let me know how i can help you!"
              value={form.message}
              rows={4}
              required
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={loading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  )
}