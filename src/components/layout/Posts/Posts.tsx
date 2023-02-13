import { FC, useEffect, useState } from 'react'
import { v4 } from 'uuid'
import { IPost } from '../../../types'
import { Post } from '../Post/Post'
import userLogo from './../../../assets/userLogo.png'
import post_1 from './../../../assets/post_1.jpg'
import styles from './Posts.module.scss'
import { QuerySnapshot, collection, doc, onSnapshot } from 'firebase/firestore'
import { useAuth } from '../../providers/useAuth'

interface IPosts {
  // posts: IPost[]
}

export const Posts: FC<IPosts> = ({}) => {
  const { db } = useAuth()

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const unsub = onSnapshot(collection(db, 'posts'), (doc) => {
          doc.forEach((d) => {
            setPosts((prev) => [d.data(), ...prev])
          })
        })
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className={styles.posts}>
      {posts?.map((post, index) => (
        <Post key={v4()} {...post} />
      ))}
    </div>
  )
}
