import Repo from '@/app/components/Repo'
import React from 'react'
import Link from 'next/link'
import RepoDirs from '@/app/components/RepoDirs'
import { Suspense } from 'react'

//use params prop for dynamic routing
export default function RepoPage({params: {name}}) {
    
  return (
    <div className='card'>
        <Link className='btn btn-back' href="/code/repos">
            Back to repos
        </Link>
        <Suspense fallback={<div>loading repo...</div>}>
        <Repo name={name}/>
        </Suspense>
        <Suspense fallback={<div>loading dirs...</div>}>

        <RepoDirs name={name}/>
        </Suspense>
    </div>
  )
}
