import { PriceItem } from "./components/PriceItem";

function App() {
  const dataItem = {
    dateCreateOfItem: new Date(2023,7, 24),
    item: 'Iphone',
    price: '$1399'
  } 
  
  return <>
      <PriceItem {...dataItem} />
  </>
  
}

export default App;
