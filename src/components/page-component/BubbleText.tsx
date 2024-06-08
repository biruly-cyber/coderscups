import React from 'react'
import styles from '../../app/custom-css/BubbleText.module.css'

const BubbleText = () => {
  return (
    <h2 className="text-center text-5xl font-thin text-indigo-300">
      {"Unlock the Secrets of Web Development".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  )
}

export default BubbleText