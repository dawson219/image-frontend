import React from 'react'
import { imageCardStyles } from './imageCardStyles'
import { ReactComponent as Like } from '../../Assets/like.svg'

const ImageCard = ({image, userImage, handle, userName, likes, setPreview, item, dark, idx}) => {
    const classes = imageCardStyles(dark)
  return (
    <div className={`${classes.card} ${`card-${idx}`}`} onClick={()=>{setPreview(item)}}>
        <img src={image} alt="" className={classes.imageTag} />
        <div className={classes.details}>
            <div className={classes.data}>
                <div className={classes.userIcon}>
                    <img src={userImage} alt="" className={classes.useImg} />
                </div>
                <div className={classes.userNameSection}>
                    <div className={classes.userName}>{userName}</div>
                    <div className={classes.userHandle}>@{handle}</div>
                </div>
            </div>
            <div className={classes.likeCount}>
                <Like className={classes.like} />
                {likes}
            </div>
        </div>
    </div>
  )
}

export default ImageCard