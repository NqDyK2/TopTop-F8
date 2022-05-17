import React,{useContext} from 'react'
import { ThemeContext } from './ThemeContext'

const Paragraph = () => {
    const context = useContext(ThemeContext)
  return (
    <p className={context.theme}>Paragraphhhhh!!!!!</p> 
  )
}

export default Paragraph