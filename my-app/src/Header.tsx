import React from 'react'

export interface Props{
  title : string
}

export const Header: React.FC<Props> = ({title}) => {
  return (
    <div>{title}</div>
  )
}
