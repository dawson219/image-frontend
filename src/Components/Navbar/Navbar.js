import React, { useState } from 'react'
import Switch from '../Switch/Switch'
import SearchBar from '../SearchBar/SearchBar'
import { navbarStyles } from './navbarStyles'
import Tag from '../Tag/Tag'
import {ReactComponent as Menu} from "../../Assets/Menu.svg"

const Navbar = ({tab, setTab, value, setValue, toggle, setToggle, suggest, setSuggest, dark, setDark, setTags}) => {
    const classes = navbarStyles(dark)
    const [menu, setMenu] = useState(false)
  return (
    <div style={{width: "100%"}} className={classes.outerWrapper} >
        <div className={classes.navbarWrapper}>
            <div className={classes.appLogo}>
                Image Gallery
            </div>
            {/* {
                <div className={classes.searchContainer}>
                <SearchBar placeholder={"Search Images Here.."} setLabels={setTags} suggest={suggest} setSuggest={setSuggest} value={value} setValue={setValue} />
            </div>
            }
            { 
                <div onClick={()=>{
                    setToggle(!toggle)
                    setSuggest(false)
                }} className={classes.search}>
                    Search
                </div>
            } */}
            <div onClick={()=>{setTab(0)}} className={`${classes.textField} ${tab === 0 && classes.active}`}>
                Explore
            </div>
            <div onClick={()=>{setTab(1)}} className={`${classes.textField} ${tab === 1 && classes.active}`}>
                Collection
            </div>
            <div onClick={()=>{setTab(2)}} className={`${classes.textField} ${tab === 2 && classes.active}`}>
                Community
            </div>
            <div className={classes.darkMode}>
                Dark Mode &nbsp;
                <Switch dark={dark} setDark={setDark} />
            </div>
            <Menu className={classes.menu} onClick={()=>{setMenu(!menu)}}  />
        </div>
        {
            menu && 
            <div className={classes.navPopup} onClick={()=>{setMenu(false)}}>
                <div onClick={()=>{setTab(0)}} className={`${classes.textItem} ${tab === 0 && classes.activeTab}`}>
                    Explore
                </div>
                <div onClick={()=>{setTab(1)}} className={`${classes.textItem} ${tab === 1 && classes.activeTab}`}>
                    Collection
                </div>
                <div onClick={()=>{setTab(2)}} className={`${classes.textItem} ${tab === 2 && classes.activeTab}`}>
                    Community
                </div>
            </div>
        }
    </div>
  )
}

export default Navbar