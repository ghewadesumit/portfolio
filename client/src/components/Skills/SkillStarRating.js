import React from 'react'
import './SkillStarRating.scss';

import {FaStar} from 'react-icons/fa';
import { FaStarHalf } from 'react-icons/fa';

export const SkillStarRating = ({rating,skillName,skillIcon}) => {
    let starRatingValue = [0.5,1,1.5,2,2.5,3,3.5,4,4.5,5];
    
  return (
    // <div className=""> 
         <div className="starContainer">

            <h5 className="text">{skillName}</h5>
            <div className="iconContainer">
                {skillIcon} 
            </div>
            <div className="starHolder">
                {([...Array(starRatingValue.length)]).map((star,index)=>{

                    const ratingValue = starRatingValue[index];

                    return (
                    <>
                    {
                    
                    Number.isInteger(ratingValue) ? 
                    (<label className="fullStar"><input type="radio" name="rating" value={ratingValue} />
                    <FaStar className="star" color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"} size={30}/></label>) 
                    : 
                    (<label className="halfStar"><input type="radio" name="rating" value={ratingValue}/>
                    <FaStarHalf className="star" color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"} size={30}/></label>) 
                    
                    }
                    </>);
                })}
            {/* </div> */}
         </div>
        
    </div>          
        
  )
}
