import React from "react";
import { TripType } from "../../pages/Search/types";

import "./style.scss";

const Trip: React.FC<PropsSetting> = ({ data }) => {
  console.log("Tripdata =", data);
  return (
    <div className="trip justify-content-between">
      <div className="trip__carImg">
        <img src={data.driver.carImg} alt="car" />

        
      </div>

      <div className="trip__info">
        <div className="trip__info__data">
          <p className="fw-bold">
            <span>{data.from}</span> - <span>{data.to}</span>{" "}
          </p>
          <p>Siqaret: Olmaz</p>
          <p>Ev Heyvanı: Olmaz</p>
          <p>Baqaj: Uyğundur</p>
        </div>
        <div className="trip__info__driver">
          <div className="trip__info__driver__img">
            <img src={data.driver.img} alt="Driver" />
          </div>
          <div className="trip__info__driver__info">
            <p className="driverName">{data.driver.fullname}</p>
            <p>
              * {data.driver.rating} / 5{" "}
              <span>({data.driver.numOfReviews} rəy)</span>
            </p>
          </div>
        </div>
      </div>
      <div className="priceBox ">
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
