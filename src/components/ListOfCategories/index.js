import React, { useState, useEffect } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";
import { categories as mockCategories } from "../../../api/db.json";

function usecategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(function () {
    // fetch("https://petgram-server.midudev.now.sh/categories").then((res) =>
    //   res.json()
    // ).then(response => {
    //   setCategories(categories)
    // });
    setLoading(true);
    setCategories(mockCategories);
    setLoading(false);
  }, []);
  return { categories, loading };
}

export const ListOfCategories = () => {
  const { categories, loading } = usecategoriesData();
  const [showFixed, setShowFixed] = useState(false);
  // useEffect remplaza a componentDidMount

  useEffect(
    function () {
      const onScroll = (e) => {
        const newShowFixed = window.scrollY > 200;
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
      };
      document.addEventListener("scroll", onScroll);
      // para evitar problemas de memoria al desmontar el componente
      return () => document.removeEventListener("scroll", onScroll);
    },
    [showFixed]
  );

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading ? (
        <Item kwy="loading">
          <Category />
        </Item>
      ) : (
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))
      )}
    </List>
  );
  console.log(showFixed);
  if (loading) {
    return "Cargando ...";
  }
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
