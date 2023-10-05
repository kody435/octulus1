import React from 'react'


export default function Client({data, data2}: {data: any, data2: any}) {
  return (
    <>
    <pre>{JSON.stringify(data, null, 2)}</pre>
    <pre>{JSON.stringify(data2, null, 2)}</pre>
    </>
  )
}
