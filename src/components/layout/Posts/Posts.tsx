import { FC } from 'react'
import { IPost } from '../../../types'
import { Post } from '../Post/Post'
import styles from './Posts.module.scss'

interface IPosts {
  posts: IPost[]
}

export const Posts: FC<IPosts> = ({ posts }) => {
  return (
    <div className={styles.posts}>
      {posts.map((post) => (
        <Post key={post.author._id} {...post} />
      ))}
    </div>
  )
}
