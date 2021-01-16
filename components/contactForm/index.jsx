import { useState } from 'react'
import styles from './index.module.css'

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = () => {
    event.preventDefault();
    alert(`submitted:${name}--${email}--${text}--!`);
    setName("");
    setEmail("");
    setText("");
  }

  return (
    <div className={styles.wrapper}>
      <h2>Contact</h2>
      <div className={styles.form__container}>
        <form onSubmit={()=>handleSubmit()}>
          <div className={`${styles.form__item} ${styles.form__name}`}>
            <input
              name="name"
              type="text"
              value={name}
              placeholder="お名前"
              onChange={(e)=>handleNameChange(e)}
            >
            </input>
          </div>
          <div className={`${styles.form__item} ${styles.form__email}`}>
            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e)=>handleEmailChange(e)}
            />
          </div>
          <div className={`${styles.form__item} ${styles.form__text}`}>
            <textarea
              type="text"
              value={text}
              placeholder="内容"
              onChange={(e)=>handleTextChange(e)}
            />
          </div>
          <div className={styles.submit}>
            <button className={`button`} type="submit" value="Submit">送信</button>
          </div>
        </form>
      </div>
    </div>
  )
}