import React from 'react';
import MyPosts from './MyPost/MyPosts';
import s from './Profile.module.css';

const Profile = () =>{

  return(

<div className={s.content}>
  <div>
    <img src='https://gran-tur.com/assets/image/Blog/%D0%A2%D1%83%D1%80%D1%86%D0%B8%D1%8F/%D0%9F%D0%BB%D1%8F%D0%B6%D0%B8%20%D0%A2%D1%83%D1%80%D1%86%D0%B8%D0%B8/plyaz%20kliopatry.jpg'></img>
  </div>
  <div>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrZIUNMsa_Ne3kDry55Nls37MYLjW1g6u0A&usqp=CAU'></img>
  </div>
  <div>
    ava + disription
  </div>
  <MyPosts></MyPosts>
  

</div>

  


  )
}

export default Profile;