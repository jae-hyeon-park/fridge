import React from 'react'
import makeOptions from './util'

const Inventory = () => {

const inventoryList=[];

fetch("http://43.201.115.15:8080/inventory", makeOptions("GET") )
    .then((response) => response.json())
    .then(data => {
        data.map(item => {
            inventoryList.push(item);
          });
        });

  return (
    <div>Inventory</div>
  )
}

export default Inventory