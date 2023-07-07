import React, {  useState,useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { collection} from 'firebase/firestore';
import { db } from '../firebase-config';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import VendorDataCard from './VendorDataCard';



function Orders() {
  const [bhangaarData, setBhangaarData] = useState('');
  const [showOrders, setShowOrders] = useState(false);
  const [custDataItems, setCustDataItems] = useState('');
  const [vendorData, setVendorData] = useState('');
  const [showVendorData, setShowVendorData] = useState(false);

  

  const getDataHandler = (data) => {
    setBhangaarData(data);
  }
  const handleSearchClick = (condition) => {
    setShowOrders(condition)
  }

  const dataItems = Object.values(bhangaarData)
  useEffect(() => {
    const mappedDataItems = Object.values(bhangaarData).map((data) => (
      <tr key={data.orderNo}>
        <td>{data.userName}</td>
        <td>{data.userPhone}</td>
        <td>{data.userState}</td>
        <td className={getOrderStatus(data.orderStatus)}>{data.orderStatus}</td>
        <td>{data.orderNo}</td>
        <td>
        <td>
  <button className='btn btn-sm btn-success' onClick={() => fetchVendorData(data.authvendorid)
  }>
    {data.authvendorid}
  </button>
</td>

        </td>
      </tr>
    ));
    setCustDataItems(mappedDataItems);
  }, [bhangaarData]);  
  const getOrderStatus = (orderStatus) => {
    switch (orderStatus) {
      case 'Accepted':
        return 'bg-warning text-white';
      case 'Confirmed':
        return 'bg-info text-white';
      case 'Completed':
        return 'bg-success text-white';
      case 'Cancelled':
        return 'bg-danger text-white';
      default:
        return '';
    }
  }
  const fetchVendorData = (vendorId) => {
    try {
      console.log(vendorId);
      setVendorData(collection(db, `/BhangaarItems/Vendors/${vendorId}`));
    } catch (error) {
      console.error('Error fetching vendor data:', error);
    }
  };

  const [vendorDataDocs] = useCollectionData(vendorData);
  console.log(vendorDataDocs);

  useEffect(() => {
    if (vendorDataDocs && vendorDataDocs.length > 0) {
      setShowVendorData(true);
      setShowOrders(false);
    }
  }, [vendorDataDocs]);

  const handleBackClick = () => {
    setShowOrders(true)
    setShowVendorData(false)
  }
  

  return (
    <div> <div className='d-flex'><div className='w-auto'><Sidebar></Sidebar></div>
    <div className='col'>
    <Navbar onGetSearchResult={getDataHandler} onSearchClick={handleSearchClick}></Navbar>
    <div className='d-flex container justify-content-center'>
    {showOrders && (
        <table className='table table-bordered'>
          <thead>
            <tr >
              <th>User Name</th>
              <th>User Phone</th>
              <th>User State</th>
              <th>Order Status</th>
              <th>Order No</th>
              <th>Vendor Id</th>
            </tr>
          </thead>
          <tbody>
            {custDataItems}
          </tbody>
        </table>
    )}
    </div> 
    {showVendorData && 
    <VendorDataCard name={vendorDataDocs[0].name} phone={vendorDataDocs[0].phone} onBack={handleBackClick}/>
    }
    </div>
    </div>    
    </div>

  );
}
export default Orders;