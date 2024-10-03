import { useState, useEffect } from "react";
import iphoneOne from '../assets/iphone-one.png'
import iphoneTwo from '../assets/iphone-two.png'

const dataSources = [
  iphoneOne,
  iphoneTwo
];

const DEFAULT_DATA_SOURCE = dataSources[0];
const Y_OFFSET_DIFFERENCE = 100;

export default function ScrollImageChanger() {
  const [dataSource, setDataSource] = useState(DEFAULT_DATA_SOURCE);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      const index =
        Math.floor(position / Y_OFFSET_DIFFERENCE) % dataSources.length;
      const selectedSource = dataSources[index];
      if (selectedSource === dataSource) {
        return;
      }
      setDataSource(selectedSource);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dataSource]);

  return (
   <div>
    <div className="main-changer">
     <div>
    <p className='f-heading'>
    Fluid AI: Simplify, Organize, <br/> and Achieve More
    </p>
    <p className='f-text'>In a world where daily tasks, communication, and <br/>
    goals often become overwhelming, Fluid AI offers<br/>
     an innovative solution. Combining advanced AI<br/>
      technology with a user-friendly interface, it brings <br/>
      together to-do lists, chats, saved items, and bucket<br/>
       lists into one seamless platform.</p>
    </div>
    <div
      style={{ height: '200vh', background: 'black' }}
    >
      <div
        style={{
          position: "sticky",
          top: 10,
          left: 10,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {/* <p style={{ color: "white", textAlign: "center" }}>{dataSource}</p> */}
        <img
          src={dataSource}
          alt="currently selected source"
         className="changing-image"
        />
      </div>
    </div>
 
   </div>
   
   </div>
  );
}
