

import './Footer.css'
import Card from './Card'
import Rocket from '../rocket.PNG'
import Page from '../page.PNG'
import Chats from '../chats.PNG'

const Footer = () => {
  return (
    <div className='footer' >
    <Card imgurl ={Rocket} price='2500' texts='enterprise organisations successfully launched'  />
    <Card imgurl ={Page} price='45,000' texts='enterprise users onboarded seamlessly' />
    <Card imgurl ={Chats} price='200,000+' texts='professionals trained on product and startegy' />
    </div>
  )
}

export default Footer