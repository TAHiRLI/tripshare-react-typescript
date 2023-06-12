import React from "react";
import DropdownList from "../../components/DropdownList";
import { SearchTermType, TripType } from "./types";
import TripList from "../../components/TripList";
import { cityService } from "../../APIs/services/cityService";

const Trips: Array<TripType> = [
  {
    from: "Masallı",
    to: "Quba",
    when: "2023-06-07T15:20",
    totalSeats: 4,
    availableSeats: 2,
    smoking: false,
    pets: false,
    luggage: true,
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
    driver: {
      id: 1,
      fullname: "Tahir Tahirli",
      rating: 4.8,
      numOfReviews: 12,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkp9a2rrD1Sskb9HLt5mDaTt4QaIs8CcBg&usqp=CAU",
      carImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQKe4VGrcTdNTVKxLho3AhO9II74F63oRmvA&usqp=CAU",
    },
  },

  {
    from: "Quba",
    to: "Sumqayıt",
    when: "2023-06-07T15:20",
    totalSeats: 4,
    availableSeats: 2,
    smoking: false,
    pets: false,
    luggage: true,
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
    driver: {
      id: 1,
      fullname: "Tahir Tahirli",
      rating: 4.8,
      numOfReviews: 12,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkp9a2rrD1Sskb9HLt5mDaTt4QaIs8CcBg&usqp=CAU",
      carImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQKe4VGrcTdNTVKxLho3AhO9II74F63oRmvA&usqp=CAU",
    },
  },

  {
    from: "Bakı",
    to: "Quba",
    when: "2023-07-07T15:20",
    totalSeats: 4,
    availableSeats: 2,
    smoking: false,
    pets: false,
    luggage: true,
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
    driver: {
      id: 1,
      fullname: "Tahir Tahirli",
      rating: 4.8,
      numOfReviews: 12,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkp9a2rrD1Sskb9HLt5mDaTt4QaIs8CcBg&usqp=CAU",
      carImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQKe4VGrcTdNTVKxLho3AhO9II74F63oRmvA&usqp=CAU",
    },
  },

  {
    from: "Bakı",
    to: "Lənkəran",
    when: "2023-06-05T15:20",
    totalSeats: 4,
    availableSeats: 2,
    smoking: false,
    pets: false,
    luggage: true,
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
    driver: {
      id: 1,
      fullname: "Tahir Tahirli",
      rating: 4.8,
      numOfReviews: 12,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkp9a2rrD1Sskb9HLt5mDaTt4QaIs8CcBg&usqp=CAU",
      carImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQKe4VGrcTdNTVKxLho3AhO9II74F63oRmvA&usqp=CAU",
    },
  },
];

function SearchPage() {
  const [searchTerm, setSearchTerm] = React.useState<
    SearchTermType | undefined
  >(undefined);

  const handleSubmit = (item: SearchTermType) => {
    setSearchTerm(item);
  };


 



  let renderedTrips = Trips;

  if (searchTerm) {
    renderedTrips = Trips.filter((item) => {
      if (searchTerm.from && item.from !== searchTerm.from) 
        return false;
      
      if (searchTerm.to && item.to !== searchTerm.to) 
        return false;
      

      if (searchTerm.when && new Date(item.when) < new Date(searchTerm.when)) 
        return false;

      if (searchTerm.count && item.availableSeats < searchTerm.count)
        return false;

      return true;
    });
  }

  renderedTrips.sort(function (a, b) {
    let dateA = new Date(a.when);
    let dateB = new Date(b.when);
    return dateA.getTime() - dateB.getTime();
  });

  return (
    <div className="bg-success p-2 h-min-100">
      <div className="row g-0">
        <div className="col-12 col-md-5 ">
          <DropdownList handleSearch={handleSubmit} />
        </div>
        <div className="col-12 col-md-7 ">
          <TripList data={renderedTrips} />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
