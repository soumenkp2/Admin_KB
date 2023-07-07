import React, { useState } from 'react';

function Cancelled({dataItems}) {
  const [custDataItems, setCustDataItems] = useState('');
  const [showCancelledOrders, setShowCancelledOrders] = useState(false);


  const handleSeeAllClick = () => {

    const cancelledItems = [];

    console.log(dataItems);

    for (const item in dataItems) {
      cancelledItems.push(dataItems[item]);
    }
    setCustDataItems(cancelledItems.map(data => (
    <tr key={data.orderNo}>
    <td>{data.userName}</td>
    <td>{data.userPhone}</td>
    <td>{data.userState}</td>
    <td>{data.orderStatus}</td>
    <td>{data.orderNo}</td>
  </tr>)));



    setShowCancelledOrders(true);
    
  };

  return (
    <div className="col-sm-6">
      <div className="card text-center cancelled">
        <div className="card-body">
          <h5 className="card-title">Cancelled Orders</h5>
          <p className="card-text">Click on the button below to get redirected</p>
          <a href="#" className="btn btn-primary " onClick={handleSeeAllClick}>See All</a>
        </div>
      </div>
      {showCancelledOrders && ( 
        <table className='table table-bordered bg-danger'>
          <thead>
            <tr>
              <th>User Name</th>
              <th>User Phone</th>
              <th>User State</th>
              <th>Order Status</th>
              <th>Order No</th>
            </tr>
          </thead>
          <tbody>
            {custDataItems}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Cancelled;
