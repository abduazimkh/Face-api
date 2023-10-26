import './Products.scss';
import { useEffect, useRef, useState } from 'react';
import { apiInstance } from '../../../api';
import MultiRangeSlider from '../../../components/range/Range';


const Product = () => {
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState("");
  const [productName, setProductName] = useState([]);
  const token = localStorage.getItem("user-token").split(".")[1]
  const iduser = JSON.parse(atob(token)).sub;
  
  const [num, setNum] = useState(0);

  // console.log(num);

  useEffect(() => {
    async function loadData(){
      try{
        const response = await apiInstance(`/products`);
        setProduct(response.data)
      }
      catch(error){
        console.log(error);
      }
    }

    loadData();
  }, [num, productName])

  useEffect(() => {
    async function loadUser(){
      try{
        const response = await apiInstance(`/users/${iduser}`);
        setUser(response.data.name)
      }
      catch(error){
        console.log(error);
      }
    }

    loadUser();
  }, [])

  useEffect(() => {
    async function renderData(){
      try{
        const response = await apiInstance(`/products/?title=${productName}`);
        setProduct(response.data)
      }
      catch(error){
        console.log(error);
      }
    }

    renderData()
  }, [product])

  const changeValu = ({min, max}) => {
    console.log(min, max);
    async function renderMinMaxData(){
      try{
        const response = await apiInstance(`/products/?price_min=${min}&price_max=${max}`)
        console.log(response);
        setProduct(response.data) 
      }
      catch(error){
        console.log(error);
      }
    }

    renderMinMaxData()
  }

  return (
    <div className='products__wrapper'>
      <div className='top-list'>
        <h2>Hello {user} 👋,</h2>
        

        <MultiRangeSlider
          min={0}
          max={1000}
          onChange={(min, max) => {
            changeValu(min, max), setNum(min)
          }}
        />
      </div>

      <div className="products-content">
          <div className='products-content-title'>
            <div className='products-content-items'>
              <h2>Product</h2>
              <p>Product Name</p>
            </div>

            <div  className='products-content-items'>
              <div className='products-content-item1'>
                <input onChange={(e) => setProductName(e.target.value)} value={productName} type="text" placeholder='Search'/>
                <select id="">
                  <option disabled selected defaultValue="0">Last 30 days</option>
                </select>
              </div>

              <div className='products-content-item2'>
                <p>Stock</p>
                <p>Price</p>
                <p>Total Sales</p>
              </div>
            </div>
          </div>

          <div className="products__cards">
            {
              product.map((card, i) => (
                <div key={card.id} className="products__card">
                  <div>
                    <img src={card.images[0]} alt="" />
                    <div className='products__card-item'>
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                    </div>
                  </div>
                  <div>
                    <p>32 in stock</p>
                    <strong>${card.price}</strong>
                    <p>20</p>
                  </div>
                </div>
              ))
            }
          </div>
      </div>
    </div>
  )
}

export default Product