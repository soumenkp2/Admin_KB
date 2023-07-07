import React,{useState, useEffect} from 'react'
import { collection } from 'firebase/firestore'
import { db } from '../firebase-config'
import { useCollectionData } from 'react-firebase-hooks/firestore';
function Navbar(props) {

  const [pincode, setPincode] = useState("");
  const [query, setQuery] = useState("");
  const istpart='/BhangaarItems/UttarPradesh/'  
  const iistpart='/Orders/OrderDetailList'

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  }

  const getData = (event) => {
    event.preventDefault();    
    setQuery(collection(db, istpart+pincode+iistpart));
    props.onSearchClick(true);
  }

  const [docs] = useCollectionData(query);

  useEffect(() => {
    if (docs && docs.length > 0) {
      props.onGetSearchResult(docs);
    }
  }, [docs]);

  
    return (
    <div>
      <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
    <a className="navbar-brand">Brand Name </a>
    <form className="d-flex" role="search" onSubmit={getData}>
      <input className="form-control me-2" type="search" placeholder="Search Your PinCode" aria-label="Search" value={pincode} onChange={handlePincodeChange}/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Navbar