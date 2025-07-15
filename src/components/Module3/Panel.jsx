import React from 'react'

function Panel({isActive,title,children,onActive}) {
  return (
        <section className="panel">
      <h3>{title}</h3>
      {
        isActive ? <p> {children} </p>:<button onClick={onActive}>
          Show
        </button>


      }

    </section>

  )
}

export default Panel
