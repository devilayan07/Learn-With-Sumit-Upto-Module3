 function Item({name,isPacked}){
    let itemContent="";
    if(isPacked){
        itemContent= <span>{name + "✅"}</span>
    }
    else{
        itemContent=<span>{name}</span>
    }
    return(
<li className="item">{itemContent}</li>
)
 }

export default function PackingList(){
    return(
        <section>
          <h1>Sally ride's packing list</h1>

          <ul>
            <Item 
            isPacked={true}
            name="Space Unit"
            />

            <Item 
            isPacked={true}
            name="Helmet with a golden leaf"
            
            />

            <Item 
            isPacked={false}
            name="Photo of Tam"
            />
          </ul>
        </section>
    )
}


// just for memory

// const lang="Javascript1";

// const result1=lang && "Javascript";  // left side truthy hole right side return korbe;otherwise left side return korbe

// const result2=lang || "Javascript"; // left side falsey hole right side return korbe, otherwise left side return korbe

// // Javascript has 6 falsey value  null, undefined,"",NaN,0,false
// const result3=lang ??  "Javascript"; // Nullish Coaleshing operator:left side Nullish (Null or Undefined) hole right side return korbe,otherwise left side return korbe
// console.log(result1) // Javascript
// console.log(result2) // Javascript1
// console.log(result3) // Javascript1