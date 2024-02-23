import { useEffect } from "react";
// import data from "./data"
import FridgeBody from "./FridgeBody"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
function Fridge() {
    const [data, setData] = useState([]);
    useEffect(()=> {
        fetch("http://43.201.115.15:8080/inventory")
        .then(res=>res.json())
        .then(data => setData(data));
    },[]);
    const navigate = useNavigate();
  return (
    <>
    <div  className="m-10 flex justify-end">
      <button
      className="text-4xl px-20 py-5 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
      onClick={() => {      navigate("/food");   }}>
      편의점 가기
      </button>
    </div>
    {/* <span>{data.map(item=><FridgeBody item={item} key={item.id}/>)}</span> */}
    <div className="flex justify-center">
    <FridgeBody items={data}/>
    </div>
    </>
  )
}
export default Fridge









