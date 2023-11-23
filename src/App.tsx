import ListGroup from "./components/ListGroup"
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  // let items = [
  //   'Beograd',
  //   'Novi Sad',
  //   'Nis',
  //   'Podgorica',
  //   'Prcanj'
  // ];

  // const handleSelectedItem = (item: string) => {
  //   console.log(item);
    
  // }

  // return <div><ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectedItem} /></div>

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>children <span>prop</span> </Alert>}
      <Button color="warning" onClick={() => setAlertVisibility(true)}>clickit!</Button>
    </div>
  )
}

export default App;
