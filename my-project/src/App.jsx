import { useState ,useEffect} from 'react';
import './App.css'
import AddCard from './components/AddCard.jsx';
import CardList from './components/CardList.jsx';


function App() {
const namesinlocalstotage=JSON.parse(localStorage.getItem("names"));
console.log(namesinlocalstotage)
// const[names,setNames]=useState(namesinlocalstotage || []);
const [names, setNames] = useState([]); 

useEffect(saveCardsInLocalStorage,[names]);
// useEffect(getProductsfromapi,[]);//initaial render

// function getProductsfromapi(){
//   fetch("https://fakestoreapi.com/products")
//   .then(res=>res.json())
//     .then(products=>{
//       const productsnames=products.map(p=>p.title);
//       setNames(productsnames);
//     })
// }
function saveCardsInLocalStorage(){
  console.log("HELLO"); 
  const key="names";
  const value=JSON.stringify(names);
  localStorage.setItem(key,value);
}
function addCard(value){
  console.log("adding ", value); 
  // const value=refInput.current.value;
  // const newNames=[...names,value];
  const newNames = [];
  names.forEach(name => newNames.push(name)); 
  newNames.push(value); 

  console.log(newNames)
  setNames(newNames);
}

function deleteCard(title){
  const newNames=names.filter(n=>n!=title);
  setNames(newNames);
}


return (
    <>
      <CardList names={names} deleteCard={deleteCard}/>
      <AddCard addCard={addCard}/>
    </>
  )
}

export default App;



{/* {
        person.map(p=>{
          return (
          <Card>
            <h1 className='text-2xl'>{p.name}</h1>
            <h2 className='text-lg'>{p.company}</h2>
          </Card>
          )
        })
      } */}
      {/* {
        names.map(name=>{
          return <li>{name}</li>
        })
      } */}

      {/* {[<li>One</li>,<li>Two</li>,<li>Three</li>]} */}


     // const names=["Sandy","mom"];
//   const names=[
//     {name:"sandy",company:"Coding block",},
//     {name:"shivanshu",company:"oyo"},
// ]


 {/* <div>
          <Card title="One" width={100}></Card>
          <Card title="Two" width={100}></Card>
          <Card title="Three" ></Card>
          <Card>
            <h1 className='underline font-bold'>Sandeep Kumar</h1>
          </Card>
     </div>   */}