import Head from 'next/head'
import React from 'react'
import AboutLayout from '@/components/AboutLayout'
import Link from 'next/link'

export default async function About ()  {
  let articles: any[] = await getData()
  // console.log(articles)
  return (
        <AboutLayout>
    <div>
        <title>hello</title>
    <h1 className='text-black text-5xl'>HELLO</h1>
    {
      articles.map(item => (
        <Link href="articles/[id]" as={`article/${item.id}`}>
        
        <h3>{item.title}</h3>
        </Link>
      ))
    }
    </div>
        </AboutLayout>
  )
}

export const getData= async() =>{ 
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  return res.json()
  
}