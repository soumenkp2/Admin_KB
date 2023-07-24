import React from 'react'
import Completed from './Completed'
import Cancelled from './Cancelled'
import Accepted from './Accepted'
import Confirmed from './Confirmed'

function Content({data}) {

  Object.filter = (obj, predicate) => 
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => (res[key] = obj[key], res), {} );

  const acceptedDataItems = Object.filter(data, dataItem => dataItem.orderStatus === "Accepted")
  const completedDataItems = Object.filter(data, dataItem => dataItem.orderStatus === "Completed")
  const cancelledDataItems = Object.filter(data, dataItem => dataItem.orderStatus === "Cancelled")
  const confirmedDataItems = Object.filter(data, dataItem => dataItem.orderStatus === "Confirmed")

  console.log(acceptedDataItems);
  console.log(completedDataItems);
  console.log(confirmedDataItems);
  console.log(cancelledDataItems);

  return (      
    <div className="container">
    <div className="row">
      <Confirmed dataItems={confirmedDataItems}></Confirmed>
      <Accepted dataItems={acceptedDataItems}></Accepted>
    </div>
    <hr></hr>
    <div className="row">
    <Completed dataItems={completedDataItems}></Completed>
    <Cancelled dataItems={cancelledDataItems}></Cancelled>
    </div>
</div>
)
}

export default Content