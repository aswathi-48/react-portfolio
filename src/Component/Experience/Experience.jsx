import React from 'react'
import styles from './Experience.module.css'
import skills from '../../data/skills.json'
import { getImageUrl } from '../../utils'
import history from "../../data/history.json"
const Experience = () => {
  return (
    <section id='experience' className={styles.container}>
      <h2 className={styles.titile}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}> {
             skills.map((skill,id)=>{
                return<div key={id} className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                        <img src={getImageUrl(skill.imageSrc)} alt="" />
                    </div>
                    <p>{skill.title}</p>
                </div>
             })
            }
        </div>
        <ul className={styles.history}>
            {
                history.map((historyItems,id)=>{
                    return <li key={id} className={styles.historyItems}>
                        <img src={getImageUrl(historyItems.imageSrc)} alt={`${historyItems.Company} Logo`} />
                        <div className={styles.historyItemDetails}>
                            <h3>{`${historyItems.role}, ${historyItems.Company}`}</h3>
                            <p>{`${historyItems.startDate}, ${historyItems.endDate}`}</p>
                            <ul>{historyItems.experiences.map((experience,id)=>{
                                return <li key={id}>{experience}</li>;
                            })}</ul>
                        </div>

                    </li>
                })
            }
        </ul>
      </div>
    </section>
  )
}

export default Experience