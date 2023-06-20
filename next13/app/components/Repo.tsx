import React from 'react'
import Link from 'next/link';
import {FaStar, FaCodeBranch, FaEye} from 'react-icons/fa'

async function getRepo(name:string) {
    const response = await fetch(`https://api.github.com/repos/zoheballadin/${name}`)
    const repo = await response.json();
    return repo
}

export default async function Repo({name}) {
    let repo = await getRepo(name)
    console.log(repo)
  return (
    <>
    <h2>{repo.name}</h2>
    <p>{repo.description}</p>
    <div className="card-stats">
        <div className="card-stat">
            <FaStar/>
            <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
            <FaCodeBranch/>
            <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
            <FaEye/>
            <span>{repo.watchers_count}</span>
        </div>
    </div>
    </>
  )
}
