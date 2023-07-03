import { useRouter } from 'next/router'
import React from 'react'

export default function Article  ({article}) {
    const router = useRouter();
    const {id} = router.query
    console.log(id)
    console.log(article)
  return (
    <div>Article {article.title}</div>
  )
}

export const getStaticProps = async(context) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json();

    return {
        props: {
            article
        }
    }
  }

  export const getStaticPaths = async() =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const articles = await res.json();

    const ids = articles.map(item => item.id);
    const paths = ids.map(item => ({params: {id: item.toString()}}))

    return {
      paths,
      fallback: false //returns 404 if page doesnt exist
    }

  }
// export const getServerSideProps = async(context) =>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json();

//     return {
//         props: {
//             article
//         }
//     }
//   }


