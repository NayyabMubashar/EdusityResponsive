import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';







const Testimonials = () => {
const slider=useRef();
let tx=0;
    const slideForward=()=>{
   if(tx > -50  ){
    tx -=25
   }
   slider.current.style.transform=`translateX(${tx}%)`
    }
    
const slideBackword=()=>{
if(tx < 0 ){
    tx +=25
   }
   slider.current.style.transform=`translateX(${tx}%)`
}
  return (
    <div className='testimonials'>
      <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
          <img src={back_icon} alt='' className='back-btn' onClick={slideBackword}/>
    <div className="slider">
   <ul ref={slider}>
    <li>
        <div className="slide">
            <div className="user-info">
                <img src={user_1} alt=''/>
                <div>
                    <h3>William Jackson</h3>
                    <span>Edusity,USA</span>
                </div>
            </div>
            <p>“Studying at this university has helped me grow both academically and personally. The teachers are supportive, and the learning environment motivates me to do my best.”

“I really appreciate the balance between theory and practical work. The projects and presentations have improved my confidence and skills.”</p>
        </div>
    </li>

    <li>
        <div className="slide">
            <div className="user-info">
                <img src={user_2} alt=''/>
                <div>
                    <h3>Henri</h3>
                    <span>Edusity,INDIA</span>
                </div>
            </div>
            <p>“Studying at this university has helped me grow both academically and personally. The teachers are supportive, and the learning environment motivates me to do my best.”

“I really appreciate the balance between theory and practical work. The projects and presentations have improved my confidence and skills.”</p>
        </div>
    </li>

    <li>
        <div className="slide">
            <div className="user-info">
                <img src={user_3} alt=''/>
                <div>
                    <h3>Estori Daka</h3>
                    <span>Edusity,New York</span>
                </div>
            </div>
            <p>“Studying at this university has helped me grow both academically and personally. The teachers are supportive, and the learning environment motivates me to do my best.”

“I really appreciate the balance between theory and practical work. The projects and presentations have improved my confidence and skills.”</p>
        </div>
    </li>

    <li>
        <div className="slide">
            <div className="user-info">
                <img src={user_4} alt=''/>
                <div>
                    <h3>Thevi Golium</h3>
                    <span>Edusity,Dubai</span>
                </div>
            </div>
            <p>“Studying at this university has helped me grow both academically and personally. The teachers are supportive, and the learning environment motivates me to do my best.”

“I really appreciate the balance between theory and practical work. The projects and presentations have improved my confidence and skills.”</p>
        </div>
    </li>
   </ul>
    </div>
    </div>
  )
}

export default Testimonials
