import React from 'react'

export const List = ({ title, list }) => {
  return (
    <section>
      <h1 className='big'>{ title }</h1>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            { item.name }
          </li>
        ))}
      </ul>
    </section>
  )
}
