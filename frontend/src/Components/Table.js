import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Table.css";

function Table() {
  const location = useLocation();
  console.log(location.state.data);
  const data = location.state.data;
  const queryCheck = location.state.queryCheck;

  useEffect(() => {
    document.title = queryCheck;
  }, []);

  return (
    <div>
      <div>
        <div className="title">
          <h2>SEARCH iT</h2>
          <input type="text" placeholder={queryCheck} className="search" />
        </div>
        <div className="navlinks">
          <ul>
            <li>All</li>
            <li>News</li>
            <li>Book</li>
            <li>Videos</li>
            <li>Images</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="details">
        {data.map((item) => (
          <div key={item.id} className="eachitem">
            <p>
              <b>{item.link}</b>
            </p>
            <Link to="/staticPage">
              <a>
                <h3>{item.title}</h3>
              </a>
            </Link>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;
