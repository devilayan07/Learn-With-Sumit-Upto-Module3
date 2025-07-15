// import React from 'react'

// function PlaceTree({item}) {
//     const innerPlanet=item?.childPlaces
//   return (
//     <li>
//         {item?.title}
//         {innerPlanet?.length>0 && (
//             <ol>
//                 {
//                     innerPlanet?.map((place)=> <PlaceTree key={place?.id} item={place}/>)
//                 }
//             </ol>
//         ) }
//     </li>
//   )
// }

// export default PlaceTree




import React from 'react'

function PlaceTree({id,placesById,onComplete,parentId}) {
    const place=placesById[id]
    const childIds=place?.childIds
  return (
    <li>
        {place?.title}  <button onClick={()=>onComplete(parentId,id)}>Complete</button>
        {childIds?.length>0 && (
            <ol>
                {
                    childIds?.map((childid)=> (<PlaceTree 
                        key={childid} 
                        id={childid} 
                        parentId={id}
                        placesById={placesById}
                         onComplete={onComplete}
                         />))
                }
            </ol>
        ) }
    </li>
  )
}

export default PlaceTree




