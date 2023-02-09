import { FC, useState } from 'react'
import styles from './AddPost.module.scss'
import { IPost, TypeSetState } from '../../../types'
import { dataUsers } from '../sidebar/UserItems/dataUsers'

interface IAddPost {
  setPosts: TypeSetState<IPost[]>
}

export const AddPost: FC<IAddPost> = ({ setPosts }) => {
  const [content, setContent] = useState('')

  const addPostHandler = (e: any) => {
    if (content) {
      setPosts((prev) => [
        {
          author: dataUsers[0],
          content,
          createdAt: '5 min ago',
        },
        ...prev,
      ])

      setContent('')
    }
  }

  const addPostPress = (e: any) => {
    if (e.key === 'Enter' && content) {
      setPosts((prev) => [
        {
          author: dataUsers[0],
          content,
          createdAt: '5 min ago',
        },
        ...prev,
      ])

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
