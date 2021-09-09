import React from 'react'
import { InfoSection, Pricing} from '../../components'
import { homeObjOne, homeObjTwo, homeObjThree } from './Data'


const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <Pricing />
            
        </>
    )
}

export default Home
