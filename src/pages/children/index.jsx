import React from 'react'

import Header from '../../components/Header';
import { addChildrenMovies } from '../../redux/sliceReducers/chilldrenSlice';
import useFetchNowPlaying from '../../customHooks/useFetchNowPlaying';
import { useSelector } from 'react-redux';
import Cardrow from '../../components/MoviesBrowse/movieLists/cardRow';
import { useTranslation } from 'react-i18next';
import ShimmerUi from '../../components/shimmerUi';


const Children = () => {
    const {t}=useTranslation()
    const childrenData=useSelector((state)=>state.chilldrenSlice.children)
   const children_API_URL= process.env.REACT_APP_CHILDREN_TRENDING_TV_SHOWS_API_ENDPOINT



    useFetchNowPlaying(children_API_URL,addChildrenMovies)

    if(!childrenData) return <ShimmerUi/>

    return (
        <div className="bg-black h-screen">
          <Header />
    
          
            <div className="pt-[70px] bg-inherit">
              <Cardrow title={t("My List")} data={childrenData} />
            </div>
         
        </div>
      );
}

export default Children