import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import GrilledMeat from './GrilledMeat';
import { Heart,Share,Twitter,Facebook } from 'lucide-react';

const Home = () => {

    const [count, setCount] = useState(0);
    const [showIcons,SetShowIcons]=useState(false)
    
  return (
    <div >
      <div className=" my-10 mx-80 border-2 border-gray-300 grid grid-cols-3 gap-4">
        <div className="col-span-2">
            <Link to="./GrilledMeat">
            <h3 className="my-3 text-sm  font-bold mx-5 text-purple-500">Grilled food with saled receips</h3></Link>
            <Link to="./GrilledMeat">
            <h3 className="my-3 text-sm  mx-5">Something on your “to-do list” that never gets done.</h3></Link>
            <Link to="./grilledMeat">
          <h5 className="text-xl px-5 py-5">
            {`We will cover examples for small and medium screen sizes, demonstrating how to create responsive image galleries with Tailwind CSS. We're using flex and flex-wrap utilities to create a flexible image container, centering the images horizontally with justify-We will cover examples for small and medium screen sizes, demonstrating how to create responsive image galleries with Tailwind CSS. We're using flex and flex-wrap utilities to create a flexible image container, centering the images horizontally with justify-center.`.slice(0,225)}
          </h5></Link>
        </div>
        <div className="col-span-1">
          <img 
            src="https://my-health-and-beauty.com/wp-content/uploads/2025/02/image-7.png" 
            className="w-90 h-60 py-5 px-5" 
            alt="example" 
          />
        </div>  
 <div className="mx-10 flex items-center space-x-2">
  <Share onClick={()=>SetShowIcons(!ShareIcons)}/>
    </div>


  <div className=" mx-0 flex items-center cursor-pointer">
    <Heart
      className="text-red-500 text-2xl hover:scale-110 transition-transform"
      onClick={() => setCount(count + 1)}
    />
    <span className="font-semibold text-lg ml-1">{count}</span>
  </div>
</div>
      </div>
    
  );
};

export default Home;
