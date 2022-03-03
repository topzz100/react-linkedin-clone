import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, {useEffect, useState} from 'react'
import { db } from '../../firebase'
import { Wrapper } from './Posts.styles'
import SinglePost from './SinglePost'

const Posts = () => {
   const [posts, setPosts] = useState([])
  

  // useEffect(()=>{
  //   const q = query(collection(db, "posts"))
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         // {
  //         //   id: doc.id,
  //         //   ...doc.data()
  //         // }
  //         posts = [...posts, {id: doc.id, ...doc.data()}]
  //         }
  //       )
      
  //   });
  // },[])

   useEffect(()=>{
   const q = query(collection(db, "posts"), orderBy('timestamp', 'desc'));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  let getPosts = []
  querySnapshot.forEach((doc) => {
    getPosts = [...getPosts, {id : doc.id, ...doc.data()}]
  })
 setPosts(getPosts)
 console.log(getPosts)
});
  },[])
 console.log("Current cities in CA: ", posts);

  
  return (
    <>
      <Wrapper>
        {
           posts.map((p) => {
              return <SinglePost key = {p.id} {...p}/>
           })
        }
       
      </Wrapper>
    </>
  )
}

export default Posts