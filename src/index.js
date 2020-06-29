import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import axios from "axios";
import InfiniteLoading from "react-simple-infinite-scroll";

import "./style.scss";

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  useEffect(() => {
    axios.get("https://api.spacexdata.com/v3/launches").then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, []);

  const handleChange = (e) => {
    setSearch(e.currentTarget.value);
  };

  const filtered = search
    ? data.filter((d) =>
        d.mission_name.toLocaleLowerCase().includes(search.toLowerCase())
      )
    : data;

  if (loading) {
    return <div>Loading..</div>;
  }

  return (
    <div className="main-container">
      <div className="search-container">
        <form className="form-search">
          <label className="label">Search</label>
          <div className="input-container">
            <input
              type="text"
              placeholder="type here"
              value={search}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
      <div className="data-container">
        {filtered.map((d, i) => (
          <Card
            img={d.links.mission_patch_small}
            name={d.mission_name}
            rocket={d.rocket.rocket_name}
            type={d.rocket.rocket_type}
            year={d.launch_year}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
