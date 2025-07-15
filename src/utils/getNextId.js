export const getNextId=(data)=>{
      const maxId=data.reduce((accu,current)=>accu && accu.id>current.id ? accu.id :current.id )
      return maxId+1

    }