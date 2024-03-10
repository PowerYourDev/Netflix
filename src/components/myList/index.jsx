import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


import Header from '../Header'
import Cardrow from "../MoviesBrowse/movieLists/cardRow"
import { db } from '../../utilis/firebase'
import { arrayRemove,doc,onSnapshot,updateDoc } from 'firebase/firestore'

const MyList = () => {
    const userData = useSelector((state) => state?.userSlice);
    const [myListData,setMyListData]=useState([])

useEffect(()=>{
    if(userData){
        onSnapshot(doc(db,"users",`${userData.email}`),(doc)=>{
            if(doc.data()){
                setMyListData(doc.data().myListItem)
            }
        })
    }
},[])


  return (
    <div className='bg-black h-screen'>

     <Header />

    <div className='pt-[70px]'>
    <Cardrow title={"My List"} data={myListData} />
    </div>
  </div>
  )
}

export default MyList