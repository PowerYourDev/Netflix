import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const MultiLangselect = ({header}) => {
    const {i18n}=useTranslation()

    const selectOptions=[
        {
            name:"English",
            code:"en"
        },
        {
            name:"Hindi",
            code:"hi"
        }
    ]

    const handleLangChange=(e)=>{
     
       i18n.changeLanguage(e.target.value)
    }

    useEffect(()=>{
            document.body.dir=i18n.dir()
    },[i18n,i18n.language])

  return (
    //
    <div className={header==="header"&&'absolute right-[3%] z-10 top-[3%]'}>
     
        <select onChange={handleLangChange} className= {`w-[120px] border border-white border-opacity-60 ${header==="header"?"":'bg-transparent'}`}>
            {selectOptions.map((lan)=>{
                return (
                    <option value={lan.code} key={lan.code} className={header==="header"?"":'text-black'}>{lan.name}</option>
                )
            })}
        </select>
    </div>
  )
}

export default MultiLangselect