import React, { useEffect, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { db } from '../firebase-config';

function Confirmed({dataItems}) {

  const [custDataItems, setCustDataItems] = useState('');
  const [showConfirmedOrders, setShowConfirmedOrders] = useState(false);


  const handleSeeAllClick = () => {

    const confirmedItems = [];

    console.log(dataItems);

    for (const item in dataItems) {
      confirmedItems.push(dataItems[item]);
    }

    console.log(confirmedItems);
    setCustDataItems(confirmedItems.map(data => (
    <tr key={data.orderNo}>
    <td>{data.userName}</td>
    <td>{data.userPhone}</td>
    <td>{data.userState}</td>
    <td>{data.orderStatus}</td>
    <td>{data.orderNo}</td>
  </tr>)));



    setShowConfirmedOrders(true);
    
  };
  
  return (
    <div className="col-sm-6">
      <div className="card text-center confirmed" id='confirmed'>
        <div className="card-body">
          <h5 className="card-title">Confirmed Orders</h5>
          <p className="card-text">Click on the button below to get redirected</p>
          <a href="#" className="btn btn-primary" onClick={handleSeeAllClick}>See All</a>
        </div>
      </div>
      
      {showConfirmedOrders && ( 
        <table className='table table-bordered bg-info'>
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

export default Confirmed;
