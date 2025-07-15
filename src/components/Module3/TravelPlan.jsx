// import React, { useState } from 'react'
// import { initialTravelPlan } from '../../data/Places'
// import PlaceTree from './PlaceTree'

// function TravelPlan() {
//     const[plan,setPlan]=useState(initialTravelPlan)
//     const planets=plan?.childPlaces
//   return (
//     <>
//       <h2>Places To Visit</h2>
//       <ol>
//         {
//             planets?.map((item)=> <PlaceTree key={item?.id} item={item}/> )
//         }
//       </ol>
//     </>
//   )
// }

// export default TravelPlan




import React, { useState } from 'react'
import { initialTravelPlan } from '../../data/places-normalized'
import PlaceTree from './PlaceTree'

function TravelPlan() {
    const[plan,setPlan]=useState(initialTravelPlan)
    const root=plan[0]
    const planetIds=root?.childIds

    const handleComplete=(parentId,childId)=>{
        const parent=plan[parentId]
        const nextParent={
            ...parent,
            childIds:parent.childIds.filter((id)=>id!==childId)

        }
        setPlan({
            ...plan,
            [parentId]:nextParent
        })

    }
  return (
    <>
      <h2>Places To Visit</h2>
      <ol>
        {
            planetIds?.map((placeId)=> <PlaceTree key={placeId} id={placeId} placesById={plan} onComplete={handleComplete} parnetId={0}/> )
        }
      </ol>
    </>
  )
}

export default TravelPlan


