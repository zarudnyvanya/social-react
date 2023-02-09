import React, { FC, useState } from 'react'
import styles from './Home.module.scss'
import userLogo from './../../assets/userLogo.png'
import post_1 from './../../assets/post_1.jpg'
import { AddPost } from '../../components/layout/AddPost/AddPost'
import { IPost } from '../../types'
import { Posts } from '../../components/layout/Posts/Posts'

export const Home: FC = () => {
  const initialPosts = [
    {
      author: {
        _id: '112',
        avatar: userLogo,
        name: 'Zarudny Ivan',
      },
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tempora commodi voluptatum esse nostrum inventore a sequi, molestiae illo cum animi voluptatibus vel nisi ipsum id! Odit ab dignissimos vitae?',
      createdAt: '12 hours ago',
      images: [post_1],
    },
  ]

  const [posts, setPosts] = useState<IPost[]>(initialPosts)
  return (
    <div className={styles.home}>
      <AddPost setPosts={setPosts} />
      <Posts posts={posts} />
    </div>
  )
}
