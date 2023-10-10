import React, { useState } from "react";

import SweetPagination from "sweetpagination";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from 'react-router-dom';
function Products()  {

    const itemsvirual = [];
        
    const [currentPageData, setCurrentPageData] = useState(itemsvirual);
    const items = [
        {id:1, title: 'Утюг', alias: 'ytug', src:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Moench_2339.jpg/1200px-Moench_2339.jpg'},
        {id:2, title: 'Компьютер',alias: 'pc',src:'https://s1.stc.all.kpcdn.net/russia/wp-content/uploads/2019/01/Altai-.jpg'},
        {id:3, title: 'Наушники', alias: 'headphones', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoaBaZztXmYDfQ3Dvzn1tuEZ9gOUiV-jn4iw&usqp=CAU'},
        {id:4, title: 'Наушники2', alias: 'headphones1', src:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Moench_2339.jpg/1200px-Moench_2339.jpg'},
        {id:5, title: 'Наушники3', alias: 'headphones2',src:'https://s1.stc.all.kpcdn.net/russia/wp-content/uploads/2019/01/Altai-.jpg'},
        {id:6, title: 'Наушники4', alias: 'headphones3', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoaBaZztXmYDfQ3Dvzn1tuEZ9gOUiV-jn4iw&usqp=CAU'},
        {id:7, title: 'Наушники5', alias: 'headphones4',src:'https://s1.stc.all.kpcdn.net/russia/wp-content/uploads/2019/01/Altai-.jpg'},
        {id:8, title: 'Наушники6', alias: 'headphones5', src:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Moench_2339.jpg/1200px-Moench_2339.jpg'},
        {id:9, title: 'Наушники7', alias: 'headphones6', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoaBaZztXmYDfQ3Dvzn1tuEZ9gOUiV-jn4iw&usqp=CAU'},
        {id:10, title: 'Наушники8', alias: 'headphones7', src:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Moench_2339.jpg/1200px-Moench_2339.jpg'},
        {id:11, title: 'Наушники9', alias: 'headphones8', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoaBaZztXmYDfQ3Dvzn1tuEZ9gOUiV-jn4iw&usqp=CAU'},
        {id:12, title: 'Наушники10', alias: 'headphones9',src:'https://s1.stc.all.kpcdn.net/russia/wp-content/uploads/2019/01/Altai-.jpg'}
        
        ];



return (
    <div>
        <div className="columns-3 ...">
      { currentPageData.map((product) => (
        <div className="item"  key={product.id}>
              <Link to={`/product/${product.alias}`} >  <img className="w-full aspect-video ..." src={product.src} />
          
          <h3>Item #{product.title}</h3></Link> 
           </div>
      ))}
</div>
      <SweetPagination
        currentPageData={setCurrentPageData}
        getData={items}
        navigation={true}
        dataPerPage={3}
      />
    </div>
  );









}

export default Products;