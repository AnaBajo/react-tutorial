import { Fragment, useState } from "react";
import { MouseEvent } from "react";

interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {
  // let items = [
  //   'Beograd',
  //   'Novi Sad',
  //   'Nis',
  //   'Podgorica',
  //   'Prcanj'
  // ];
  
  // items = [];   
  // let selectedIndex = 1;

  // tells a component that the state will change in time (from selectedIndex to setSelectedIndex)
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [name,  setName] = useState('');
  
  // event handler
  // function handleClick(event: MouseEvent): void {
  //   console.log(event);
  // }
  

  // const getMessage = () => {items.length === 0 ? <p>no item found</p> : null;}

  return (
    <>
      <h1>{heading}</h1>
      {/* { getMessage(1) } */}
      {/* {items.length === 0 ? <p>no item found</p> : null} */}
      {items.length === 0 && <p>no item found</p>}
      <ul className="list-group">
        {items.map((item, index) => <li 
          className={selectedIndex === index ? "list-group-item active" : "list-group-item"} 
          // onClick={(event) => console.log(event)} 
          // onClick={() => console.log(item, index)}
          // onClick={handleClick}
          onClick={() => {
            setSelectedIndex(index)
            onSelectItem(item)
          }} 
          key={item}>{item}</li>)
        }
      </ul>
    </>
  );
}

export default ListGroup;
