import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "../api/axios";
// import { BsStarFill, BsStar } from "react-icons/bs";
const SingleProduct = () => {
  const item = useParams();
  console.log(item);
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});

  const getProduct = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/products/${item.id}`);
      if (response.status === 200) {
        console.log(response);
        setProduct(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {product && (
        <div className=" border border-orange-400 rounded-md p-4">
          <img
            src={product.image}
            alt={product.description}
            className="h-40  w-full object-scale-down"
          />
          <div>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <p>${product.price}</p>
            <p>{product?.rating?.rate}</p>
            {/* <p className='flex'>
              {[...Array(Math.round(product?.rating?.rate))].map((e, i) => (
                <BsStarFill key={i} className=' text-yellow-600' />
              ))}
              {[...Array(5 - Math.round(product?.rating?.rate))].map((e, i) => (
                <BsStar key={i} className='text-yellow-600' />
              ))}
            </p> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
