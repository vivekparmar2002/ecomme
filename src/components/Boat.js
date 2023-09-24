/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Productscard from "./Productscard";

const Boat = () => {
  const [mobile, setmobile] = useState([]);
  const [ld, setld] = useState(false);

  const data1 = async () => {
    setld(true);
    await axios
      .get("https://643fce41b9e6d064beff2e05.mockapi.io/reactdemo/?catagory=boat")
      .then((response) => {
        setmobile(response.data);
      });
    setld(false);
  };
  useEffect(() => {
    data1();
  }, []);
  return (
    <>
      <section id="home">
        <div className="container">
          <div className="home_content">
            {ld ? (
              <img src="../image/ld3.gif" style={{ marginLeft: "550px" }}></img>
            ) : (
              mobile.map((item) => (
                <Productscard key={item.id} {...item}></Productscard>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Boat;
