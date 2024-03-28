import { useState } from "react"


export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {}

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {}

  return (
    <section className="flex relative flex-col lg:flex-row max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in touch</h1>
        <form className="flex w-full flex-col gap-7 mt-14">
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
        </form>
      </div>
    </section>
  )
}