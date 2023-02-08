import React from 'react'

export const Alert = ({alert}) => {
  return (
    <div>
        {
            alert != null && (
                <center>
                    <h2 className={alert.type}>{alert.msg}</h2>
                </center>
            )
        }
    </div>
  )
}
