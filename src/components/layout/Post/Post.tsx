import userLogo from './../../../assets/userLogo.png'
import dotsIcon from './../../../assets/dotsIcon.png'
import post_1 from './../../../assets/post_1.jpg'
import likeIcon from './../../../assets/likeIcon.png'
import commentIcon from './../../../assets/commentIcon.png'
import shareIcon from './../../../assets/shareIcon.png'
import styles from './Post.module.scss'
import { FC } from 'react'

// type Props = {
//   author: Object
//   content: string
//   createdAt: string
//   images: any
// }

export const Post = ({ author, content, createdAt, images }: any) => {
  return (
    <div className={styles.post}>
      <div className={styles.post__header}>
        <div className={styles.post__header_left}>
          <img className={styles.post__header_logo} src={author.avatar} alt="userLogo" />
          <div className={styles.post__header_left_text}>
            <p>{author.name}</p>
            <span>{createdAt}</span>
          </div>
        </div>
        <div className={styles.post__header_right}>
          <button className={styles.change__btn}>
            <img src={dotsIcon} alt="dotsIcon" className={styles.dots} />
          </button>
        </div>
      </div>
      <div className={styles.post__text}>{content}</div>
      <div className={styles.post__content}>
        {images?.length &&
          images.map((image: string | undefined, index: number) => {
            return <img key={index} src={image} alt="post_1" className={styles.post__img} />
          })}
        {/* <img src={images[0]} alt="post_1" className={styles.post__img} /> */}
      </div>
      <div className={styles.post__footer}>
        <button className={styles.post__footer_btn}>
          <img src={likeIcon} alt="likeIcon" />
          <span>10</span>
        </button>
        <button className={styles.post__footer_btn}>
          <img src={commentIcon} alt="commentIcon" />
          <span>8</span>
        </button>
        <button className={styles.post__footer_btn}>
          <img src={shareIcon} alt="shareIcon" />
          <span>3</span>
        </button>
      </div>
    </div>
  )
}
