/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Productscard from "../components/Productscard";

const Home = () => {
  const [data, setdata] = useState([]);
  const [ld, setld] = useState(false);

  const getdata = async () => {
    setld(true);
    const api = await axios.get(
      "https://643fce41b9e6d064beff2e05.mockapi.io/reactdemo"
    );
    setdata(api.data);

    setld(false);
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <section id="home">
        <div className="container">
          <div className="home_content">
            {ld ? (
              <img src="../image/ld3.gif" style={{ marginLeft: "550px" }}></img>
            ) : (
              data.map((item) => (
                <Productscard key={item.id} {...item}></Productscard>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
