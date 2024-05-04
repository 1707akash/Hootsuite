

import './Card.css'

const Card = (props) => {
  return (
    <div className='cards'>
        <img src={props.imgurl} alt="" />
        <h3>{props.price}</h3>
        <p>{props.texts}</p>
    </div>
  )
}

export default Card