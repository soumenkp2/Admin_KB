import React, { useEffect, useState } from 'react';

function Completed({dataItems}) {
  const [custDataItems, setCustDataItems] = useState('');
  const [showCompletedOrders, setShowCompletedOrders] = useState(false);


  const handleSeeAllClick = () => {

    const completedItems = [];

    console.log(dataItems);

    for (const item in dataItems) {
      completedItems.push(dataItems[item]);
    }
    setCustDataItems(completedItems.map(data => (
    <tr key={data.orderNo}>
    <td>{data.userName}</td>
    <td>{data.userPhone}</td>
    <td>{data.userState}</td>
    <td>{data.orderStatus}</td>
    <td>{data.orderNo}</td>
  </tr>)));



    setShowCompletedOrders(true);
    
  };
  return (
    <div className="col-sm-6">
      <div className="card text-center completed">
        <div className="card-body">
          <h5 className="card-title">Completed Orders</h5>
          <p className="card-text">Click on the button below to get redirected</p>
          <a href="#" className="btn btn-primary cmplt-btn" onClick={handleSeeAllClick}>See All</a>
        </div>
      </div>
      {showCompletedOrders && ( 
        <table className='table table-bordered bg-success '>
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

export default Completed;
