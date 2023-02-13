import React, { FC, useState } from 'react'
import styles from './Home.module.scss'
import userLogo from './../../assets/userLogo.png'
import post_1 from './../../assets/post_1.jpg'
import { AddPost } from '../../components/layout/AddPost/AddPost'
import { IPost } from '../../types'
import { Posts } from '../../components/layout/Posts/Posts'

export const Home: FC = () => {
  return (
    <div className={styles.home}>
      <AddPost />
      <Posts />
    </div>
  )
}
