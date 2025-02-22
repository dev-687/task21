import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageCard from './components/ImageCard'
import img0 from './assets/images/img0.jpg'
import img1 from './assets/images/img1.jpg'
import img2 from './assets/images/img2.jpg'
import img3 from './assets/images/img3.jpg'
import img4 from './assets/images/img4.jpg'
function App() {
  const [count, setCount] = useState(0)

  const objArr=[
    {
      id:1,
      title:"Title IMG ",
      description:"Image Description for IMG ",
      img:img0
    },
    {
      id:2,
      title:"Title IMG ",
      description:"Image Description for IMG ",
      img:img1
    },
    {
      id:3,
      title:"Title IMG ",
      description:"Image Description for IMG ",
      img:img2
    },
    {
      id:4,
      title:"Title IMG ",
      description:"Image Description for IMG ",
      img:img3
    },
    {
      id:5,
      title:"Title IMG ",
      description:"Image Description for IMG ",
      img:img4
    },
    {
      id:6,
      title:"Title IMG ",
      description:"Image Description for IMG ",
      img:img0
    },
    {
      id:7,
      title:"Title IMG ",
      description:"Image Description for IMG ",
      img:img1
    },
    {
      id:8,
      title:"Title IMG ",
      description:"Image Description for IMG ",
      img:img2
    },
    {
      id:9,
      title:"Title IMG ",
      description:"Image Description for IMG ",
      img:img3
    },
    {
      id:10,
      title:"Title IMG ",
      description:"Image Description for IMG ",
      img:img4
    },
    {
      id:11,
      title:"Title IMG ",
      description:"Image Description for IMG ",
      img:img0
    },
    {
      id:12,
      title:"Title IMG ",
      description:"Image Description for IMG ",
      img:img1
    },


  ];

  return (
    <>
      <div className="grid grid-cols-3 gap-4 min-h-screen items-center justify-center px-30 py-12 bg-black">
        <h1 className="text-blue-500 text-center col-span-3 text-3xl">All the cards are here.</h1>
        { objArr.map((obj)=>(
            <ImageCard key={obj.id} index={obj.id}  title={obj.title} description={obj.description} img={obj.img} />
          ))}

        
      </div>

    </>
  )
}

export default App
