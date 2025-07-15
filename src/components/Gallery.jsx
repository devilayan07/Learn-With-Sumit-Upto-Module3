export function Profile(){  // named export
    return(
                            <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />

    )
}

export function Card(){
    return(
        <h1>This is a card component</h1>
    )
}

export default function Gallery(){  // default export
    return(
            <section>
      <h1>Amazing scientists</h1>
      <Profile/>
      <Profile/>
      <Profile/>
      </section>
    )
}