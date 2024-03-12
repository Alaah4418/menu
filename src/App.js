import React, { useState } from "react";
import "./index.css";
import { Container} from "react-bootstrap";
import NavBar from "./components/navBar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemList from "./components/ItemList";
import { items } from "./data";

const App = () => {
  const [itemsData, setitemsData] = useState(items);

  //to get all category unique 
  const allCategory = ["All" , ...new Set(items.map((i) => i.category))];

  //to filter by category
  function filterByCategory(cat) {
    if (cat === "All") {
      setitemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setitemsData(newArr);
    }
  }

  //to filter by search
  function filterBySearch(word) {
    if (word !== ""){
      const newArr = items.filter((item) => item.title === word);
      setitemsData(newArr);
    }
  }

  return (
    <div className="font colorBody ">
      <NavBar filterBySearch={filterBySearch}/>
      <Container className="py-2">
        <Header/>
        <Category filterByCategory={filterByCategory} allCategory={allCategory}/>
        <ItemList itemsData={itemsData}/>
      </Container>
    </div>
  );
};

export default App;
