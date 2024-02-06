import React from 'react'
import styles from './NotFound.module.scss';

export default function NotFound() {
  return (
    <div className={styles.root}>
      <h1>The page you are trying to access does not exist!</h1>
      <img
          width="72"
          height={89}
          src="img/page-not-found.svg"
          alt="Pizza logo"
        />
    </div>
  );
}
