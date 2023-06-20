'use client';
import { useRouter } from 'next/router'
import React from 'react'


export default function ArticleHead() {
    const router = useRouter();
    const {id} = router.query
  return (
    <div>ArticleHead {id}</div>
  )
}
