import { FC, useState } from 'react'

import { collection, addDoc } from 'firebase/firestore'
import styles from './AddPost.module.scss'
import { IPost, TypeSetState } from '../../../types'
import { useAuth } from '../../providers/useAuth'

interface IAddPost {
  // setPosts: TypeSetState<IPost[]>
}

export const AddPost: FC<IAddPost> = ({}) => {
  const { user, db } = useAuth()
  const [content, setContent] = useState('')

  const addPostHandler = async (e: any) => {
    // if (content && user) {
    //   try {
    //     const docRef = await addDoc(collection(db, 'posts'), {
    //       author: user,
    //       content,
    //       createdAt: '10 minutes ago',
    //     })
    //     console.log('Document written with ID: ', docRef.id)
    //   } catch (e) {
    //     console.error('Error adding document: ', e)
    //   }
    // }
  }

  const addPostPress = async (e: any) => {
    if (e.key === 'Enter' && content && user) {
      try {
        const docRef = await addDoc(collection(db, 'posts'), {
          author: user,
          content,
          createdAt: '10 minutes ago',
        })
        console.log('Document written with ID: ', docRef.id)
      } catch (e) {
        console.error('Error adding document: ', e)
      }

      setContent('')
    }
  }

  return (
    <div className={styles.content}>
      <input
        onChange={(e) => setContent(e.target.value)}
        onKeyPress={addPostPress}
        value={content}
        type="text"
        placeholder="What's new, Ivan?"
        className={styles.input}
      />
      <button onClick={addPostHandler} className={styles.btn}>
        Add post
      </button>
    </div>
  )
}
