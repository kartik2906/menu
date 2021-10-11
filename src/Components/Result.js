import React from 'react'

export const Result = ({data}) => {
  return (
        <ul>
            {data.map(datas =>(
                <li key={datas.id} > {datas.title} </li>
            ))}
        </ul>
        // <div>
        //   {console.log(data)}
        // </div>

  )
}
