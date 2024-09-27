import { useEffect, useState } from 'react'
import axios from 'axios'
import Template from './components/Template/';


function App() {
  const [Image,setImage]=useState([]);
  const [loading,setloading]=useState(true);
  const [term,setterm]=useState('');

  useEffect(()=>{
    axios.get(`https://pixabay.com/api/?key=46159350-fb44063eb1996d6c0bab65f03&q=${term}&image_type=photo`)
    .then(response=>{
      setImage(response.data.hits);
      setloading(false);
    })
  },[term])

  return (
    <>
      <div>

        {/* search box */}
        <div className='flex gap-2 justify-center pb-7 pt-4'>
            <input className='h-8 pl-2 w-[300px] rounded-sm border-2 border-gray-400' type="text" placeholder='Search image' onChange={(e)=>{
              setterm(e.target.value);
            }}/>
            {/* <button className='h-8 w-[80px] bg-green-600 active:opacity-70 duration-600 rounded-sm text-white'>Search</button> */}
        </div>


          {loading ? <h1 className='text-6xl text-center mx-auto mt-32'>Loading</h1> : <div className='grid grid-cols-3 gap-4'>

        
{Image.map(image=>(
  <Template key={image.id} image={image}/>
))}
</div>}
        


        {/* <div className='grid grid-cols-3'>
            {Image.map(image=>(
              <Template key={image.id} image={image}/>
            ))}
        </div> */}
      </div>
    </>
  )
}

export default App
