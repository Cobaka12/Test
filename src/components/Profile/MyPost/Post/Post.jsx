import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  

  return (
   
 
 


  
 
     <div className={s.item}>
         <img src="https://www.cartonionline.com/wordpress/wp-content/uploads/2020/04/Avatar-The-Last-Airbender-1000x600.jpg"></img>
         
         <div>
         <span>like count:{props.counte}</span>
         </div>
     </div>
  
 
 



    
    





  
  )
}

export default Post;