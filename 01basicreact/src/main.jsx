import React from 'react'
import {createRoot} from 'react-dom/client'

 import App from './App.jsx'

// function MyApp() {
//   return(
//      <div>
//       <h1>Custom App !</h1>
//      </div>
      
    
//   )
// }
const AnotherElement = (
  <a href="https://google.com" target="_blank">visit google</a>
)

const anotherUser = 'chai aur code'
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
  
)

createRoot(document.getElementById('root')).render(
  
   reactElement
  
    
  
)
