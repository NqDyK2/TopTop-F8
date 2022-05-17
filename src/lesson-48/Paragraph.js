import React,{useContext} from 'react'
import { ThemeContext } from '../App'

const Paragraph = () => {
    const theme = useContext(ThemeContext)
  return (
    <p className={theme}>Paragraphhhhh!!!!!</p> 
  )
}

export default Paragraph