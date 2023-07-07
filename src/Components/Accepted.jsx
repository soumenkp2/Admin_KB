import React, { useState } from 'react';

function Accepted({dataItems}) {
  const [custDataItems, setCustDataItems] = useState('');
  const [showAcceptedOrders, setShowAcceptedOrders] = useState(false);


  const handleSeeAllClick = () => {

    const acceptedItems = [];

    console.log(dataItems);

    for (const item in dataItems) {
      acceptedItems.push(dataItems[item]);
    }
    setCustDataItems(acceptedItems.map(data => (
    <tr key={data.orderNo}>
    <td>{data.userName}</td>
    <td>{data.userPhone}</td>
    <td>{data.userState}</td>
    <td>{data.orderStatus}</td>
    <td>{data.orderNo}</td>
  </tr>)));
    setShowAcceptedOrders(true);
  };


  return (
    <div className="col-sm-6">
      <div className="card text-center accepted">
        <div className="card-body">
          <h5 className="card-title">Accepted Orders</h5>
          <p className="card-text">Click on the button below to get redirected</p>
          <a href="#" className="btn btn-primary" onClick={handleSeeAllClick}>See All</a>
        </div>
      </div>
      {showAcceptedOrders && ( 
        <table className='table table-bordered bg-warning'>
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

export default Accepted;
