import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";
// import { Data } from "../data";
import axios from "axios";
import "./Home.css";

function Home() {
  const [queryCheck, setQueryCheck] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      // const res = await axios.get(`http://localhost:5000/?q=${queryCheck}`);
      const res = await axios.get(
        `http://localhost:5000/api/search?q=${queryCheck}`
      );
      if (queryCheck) {
        setData(res.data);
      } else if (queryCheck === "") {
        setData([]);
      }
    };
    fetchDetails();
  }, [queryCheck]);
  console.log(data);

  const toTable = () => {
    navigate("/table", { state: { data: data, queryCheck: queryCheck } });
  };
  return (
    <div>
      <div className="wrapper">
        <h1 style={{ textAlign: "center" }}>SEARCH iT</h1>
        <div className="search-input">
          <input
            type="text"
            placeholder="Search......"
            className="searchbar"
            onChange={(e) => setQueryCheck(e.target.value)}
          />

          <div className="autocom-box">
            {data.map((item) => (
              <li key={item._id} onClick={toTable}>
                {item.title}
              </li>
            ))}
          </div>

          <button onClick={toTable} className="icon">
            <FaSistrix />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
