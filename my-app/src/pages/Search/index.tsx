import React from "react";
import DropdownList from "../../components/DropdownList";
import { SearchTermType, TripType } from "./types";
import TripList from "../../components/TripList";

const Trips: Array<TripType> = [
  {
    from: "Baki",
    to: "Lənkəran",
    when: "2023-06-07T15:20",
    totalSeats: 4,
    availableSeats: 2,
    smoking:false,
    pets:false,
    luggage:true,
    pickupLocations: [
      {
        name: "Lökbatan dairəsi",
        link: "https://goo.gl/maps/6G4NwMS9dJeXJe8F7?coh=178571&entry=tt",
      },
      {
        name: "Masallı",
        link: "https://goo.gl/maps/6G4NwMS9dJeXJe8F7?coh=178571&entry=tt",
      },
    ],
    driver:
    {
        id:1,
        fullname:"Tahir Tahirli",
        rating:4.8,
        numOfReviews:12,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkp9a2rrD1Sskb9HLt5mDaTt4QaIs8CcBg&usqp=CAU",
        carImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQKe4VGrcTdNTVKxLho3AhO9II74F63oRmvA&usqp=CAU"
    },
      
  },



];

function SearchPage() {
  const [searchTerm, setSearchTerm] = React.useState<SearchTermType>({});

  const handleSubmit = (item: SearchTermType) => {
    setSearchTerm(item);
    console.log(item);
  };

  return (
    <div className="bg-success p-2 h-min-100">
      <div className="row g-0">
        <div className="col-12 col-md-5 ">
          <DropdownList handleSearch={handleSubmit} />
        </div>
        <div className="col-12 col-md-7 ">
            <TripList data={Trips}/>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
