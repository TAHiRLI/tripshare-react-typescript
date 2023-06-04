import React from "react";
import { TripType } from "../../pages/Search/types";
import {FaStar} from "react-icons/fa"


import "./style.scss";

const Trip: React.FC<PropsSetting> = ({ data }) => {
  return (
    <div className="trip row g-0 mt-2">
      <div className="trip__carImg col-5 m-auto d-block col-sm-3">
        <img src={data.driver.carImg} alt="car" />

        
      </div>

      <div className="trip__info col-12 col-sm-5 mt-4 mt-sm-0 ps-4">

      <div className="trip__info__driver">
          <div className="trip__info__driver__img">
            <img src={data.driver.img} alt="Driver" />
          </div>
          <div className="trip__info__driver__info">
            <p className="driverName">{data.driver.fullname}</p>
            <p className="d-flex align-items-center">
              
              <FaStar className="me-2 text-warning"/> {data.driver.rating} / 5
            </p>
          </div>
        </div>
        <div className="trip__info__data">
          <p className="fw-bold">
            <span>{data.from}</span> - <span>{data.to}</span>{" "}
          </p>
          <p>Siqaret: Olmaz</p>
          <p>Ev Heyvanı: Olmaz</p>
          <p>Baqaj: Uyğundur</p>
        </div>
   
      </div>
      <div className="priceBox col-12 col-sm-4 ">
        <div className="priceBox__time">{data.when.replace("T", " ")}</div>
        <div className="priceBox__price">
          <div className="current__price">7.00 Azn</div>
          <button className="btn-order" >Sifariş et</button>
        </div>
      </div>
      
    </div>
  );
};

export default Trip;

interface PropsSetting {
  data: TripType;
}
