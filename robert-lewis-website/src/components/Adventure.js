import React,{useState,useEffect} from "react"
import Axios from "axios"
import Styled from "styled-components"

const AdventureContainerStyle = Styled.div`
background-color:red;
height: 50vh;
`

const ClassSelectStyle = Styled.div`
font-size: 2rem;
display:flex;
justify-content:space-around;
flex-wrap: wrap;
height: 50vh;
`

const ClassButtonStyle = Styled.div`
width: 10%;
margin-left:7.5%;
margin-right:7.5%;
height: 20%;
margin-top:1.5%;
display:flex;
justify-content:center;
align-items:center;
background-color:blue;
`

const Adventure = () => {
    const dadApiMasterUrl = "https://www.dnd5eapi.co/api/classes"

    const [dadApiUrl,setDadApiUrl] = useState(dadApiMasterUrl)
    const [dadApiObj,setDadApiObj] = useState()
    const [adventureStatus,SetAdventureStatus] = useState("classSelect")

    useEffect(() => {
        Axios.get(dadApiUrl)
        .then(res => {
            setDadApiObj(res.data)
            console.log(res.data)
        })
    },[dadApiUrl])

    return(
        <AdventureContainerStyle>

            {dadApiObj && adventureStatus === "classSelect" && 
            <ClassSelectStyle>
                {dadApiObj.results.map(el => <ClassButtonStyle>{el.name}</ClassButtonStyle>)}
            </ClassSelectStyle>}

        </AdventureContainerStyle>
    )
}

export default Adventure