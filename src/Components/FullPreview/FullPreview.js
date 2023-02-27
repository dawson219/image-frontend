import React, {useState} from 'react'
import { fullPreviewStyles } from './fullPreviewStyles'
import { ReactComponent as Like } from '../../Assets/like.svg'
import { ReactComponent as I } from '../../Assets/ib.svg'
import { ReactComponent as Share } from '../../Assets/Share.svg'
import FileSaver from 'file-saver'

export const downloadImage = async (id, photo) =>{
    FileSaver.saveAs(photo, `download-${id}.jpg`)
}

const FullPreview = ({image, userImage, handle, userName, likes, downloads, setPreview, id, preview, dark, idx}) => {
    const classes = fullPreviewStyles(dark)
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = ()=>{
        navigator.clipboard.writeText(preview.urls.raw)
        setShowPopup(true)

        setTimeout(()=>{
            setShowPopup(false)
        }, 2000)
    }

  return (
    <div className={classes.backdrop}>
        <div className={`${classes.card} card-${idx}`}>
            <div className={classes.imageRel} >
                <img src={image} alt="" className={classes.imageTag} />
                <div className={classes.sharing}>
                    <div className={classes.leftButtons}>
                        <div onClick={()=>{handleClick()}}  className={`${classes.share} ${classes.rel}`}>
                            <Share className={classes.icon} />
                            Share
                            {
                                showPopup && <div className={classes.popup}>Copied to Clipboard!</div>
                            }
                        </div>
                        <div className={classes.share}>
                            <a style={{textDecoration: "none", color: "white"}} href={preview.links.html} target="_blank" rel="noopener noreferrer">
                                <I className={classes.icon} />
                                Info
                            </a>
                        </div>
                    </div>
                    <div onClick={()=>{
                        downloadImage(id, image)
                    }} 
                    className={classes.download}>
                        Download
                    </div>
                </div>
            </div>
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
                <div className={classes.metrics} >
                    <div className={classes.likeCount} style={{marginRight: "0.5rem"}}>
                        {downloads > 1000 ? Math.floor(downloads/1000) + "k" : downloads}  downloads 
                    </div>
                    <div className={classes.likeCount}>
                        <Like className={classes.like} />
                        &nbsp; {likes > 1000 ? Math.floor(likes/1000) + "k" : likes}
                    </div>
                </div>
            </div>
            <div onClick={()=>{setPreview(null)}} className={classes.cross}>X</div>
        </div>
    </div>
  )
}

export default FullPreview