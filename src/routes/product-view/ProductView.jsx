import './ProductView.css';
import { useParams } from 'react-router-dom';
import { apiInstance } from '../../api';
import { useEffect, useState } from 'react';


const ProductView = () => {
    const {id} = useParams();
    const [apiResult, setApiResult] = useState({
        data: null,
        loading: true,
        error: false
    })


    useEffect(() => {
        async function loadData() {
            try{
                const response = await apiInstance(`/products/${id}`);
                setApiResult({
                    data: response.data,
                    loading: false,
                    error: false
                })
            }catch(error){
                setApiResult({
                    data: null,
                    loading: false,
                    error: true
                })
            }
        }

        loadData();
    }, [])
    let product = apiResult.data
  return (
    <div className='product__wrapper'>
        {
            apiResult.loading ? <p>Loading...</p> : 
            <div className='product__item'>
                <img src={product.images[0]} alt="" />
                <div>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <strong>${product.price}</strong>
                </div>
            </div>
        }
    </div>
  )
}

export default ProductView