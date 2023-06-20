'use client'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'

import React from 'react'

export default function Article() {

    const router = useSearchParams();
    console.log(router.get("id"))
    const pathname = usePathname();
    console.log(pathname)
   
  return (
    <div>
        {/* <ArticleHead/> */}
        this is an article </div>
  )
}
