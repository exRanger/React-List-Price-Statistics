import React from 'react'

import styles from './NotFound.module.scss';

export default function NotFound() {
  return (
    <div className={styles.root}>
      <h1>The page you are trying to access does not exist!</h1>
    </div>
  )
}
