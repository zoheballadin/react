import React from 'react'
import Link from 'next/link'
import RepoDirs from '@/app/components/RepoDirs'
// import {FaStar, FaCodeBranch, FaEye} from "react-icons"

export default async function ReposPage() {
    const repos: any[] = await getRepos()
    console.log(repos)
  return (
    <div className='repos-container'>
        <h2>Repos</h2>
        <ul>
            {repos.map(item =>  (
                <li key={item.id} className='repo'>
                    <Link href={`/code/repos/${item.name}`}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <div className="repo-details">
                            <span>
                                star {item.stargazers_count}
                            </span>
                            <span>
                                forks {item.forks_count}
                            </span>
                            <span>
                                watchers {item.watchers_count}
                            </span>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
        {repos[0].name}
    </div>
  ) 
}


async function getRepos(){
    const response = await fetch("https://api.github.com/users/zoheballadin/repos", {
        next: {
            revalidate: 60      //it will cache for 60 seconds here
        }
    })
    await new Promise(resolve => setTimeout(resolve, 1000))
    const data: any[] = await response.json()
    return data
}