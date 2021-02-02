import './index.css'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useEffect, useState } from 'react';

function ProductPage(){
  const {id} = useParams();
  const [product, setProduct]= useState(null);
  useEffect(function(){
    axios.get(`https://21110f55-d913-4ba2-94e8-d1b559d92f2b.mock.pstmn.io/products/${id}`)
  .then(function(result){
    // const products = result.data.products;
    setProduct(result.data);
    // console.log(result);
  }).catch(function(error){
    console.error('에러발생: ',error);
  });},[]);
  // console.log(product);

  if(product === null){
    return <h1>상품 정보를 받고 있습니다...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/"+product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2020년 12월 8일</div>
        <div id="description">{product.description}</div>
        

      </div>
    </div>
  );
}

export default ProductPage;
