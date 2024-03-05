import React from 'react'

import styles from "./Contact.module.css"
import { getImageUrl } from '../../utils'

const Contact = () => {
  return (
   <footer className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel Free to reach out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
        <a href="mailto:aswathik482@gmail.com">aswathik482@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon" />
        <a href="https://www.linkedin.com/in/aswathi-k-26817b275">linkedin.com/in/aswathi-k-26817b275</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="githubIcon icon" />
        <a href="https://github.com/aswathi-48/">github.com/aswathi-48/</a>
        </li>
    </ul>
   </footer>
  )
}

export default Contact