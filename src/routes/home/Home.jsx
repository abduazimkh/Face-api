import "./Home.css";
import { apiInstance } from "../../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [page, setPage] = useState(1);

  const [apiResult, setApiResult] = useState({
    data: [],
    loading: true,
    error: false,
    total: 0
  });

  useEffect(() => {
    async function loadData() {
      try {
        const response = await apiInstance(
          `/products/?offset=${(page - 1) * 12}&limit=12`
        );
        const total = await apiInstance("/products");
        setApiResult({
          data: response.data,
          loading: false,
          error: false,
          total: total.data.length
        });
      } catch (error) {
        setApiResult({
          data: [],
          loading: false,
          error: true,
          total: 0
        });
      }
    }
    loadData();
  }, [page]);

  function addPage() {
    if(page < Math.ceil(apiResult.total / 12)){
        setPage(page + 1);
    }
  }

  function substractPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  return apiResult.loading ? (
    <p>Loading...</p>
  ) : (
    <div className="cards">
      {apiResult.data.map((card) => {
        return (
          <Link to={`/product-view/${card.id}`} className="card" key={card.id}>
            <img src={card.images[0]} alt="" />
            <h3>{card.title}</h3>
            <p>{card.description.slice(0, 40)}</p>
            <strong>${card.price}</strong>
          </Link>
        );
      })}

      <button onClick={substractPage}>-</button>
      {page}
      <button onClick={addPage}>+</button>
    </div>
  );
};

export default Home;
