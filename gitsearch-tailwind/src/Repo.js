import React from 'react'
import { Link } from 'react-router-dom'
export const Repo = ({repo}) => {
  return (
    <div className="repos"><h3 className='test'><Link to={repo.html_url} target="_blank">{repo.name}</Link></h3></div>
  )
}
