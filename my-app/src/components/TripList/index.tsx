import React from 'react'
import { TripType } from '../../pages/Search/types'
import Trip from '../Trip';

const TripList:React.FC<PropsSetting> = ({data}) => {

    console.log(data);



    const renderedTrips = data.map((item,i)=>{
       return <Trip key={i} data={item} />
    })

  return (
    <div className='bg-warning p-2 trips'>
    <div  >Trips</div>
        {renderedTrips}
    </div>
  )
}

export default TripList


interface PropsSetting{
    data:Array<TripType>
}