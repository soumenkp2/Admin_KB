import React from 'react'

function VendorDataCard(props) {
    return (
        <div class="card">
            <div class="card-body">
                <p>Vendor Name: {props.name}</p>
                <p>Vendor Phone: {props.phone}</p>
            <button className= 'btn btn-sm btn-danger' type="button" onClick={props.onBack}>GO Back</button>
            </div>
        </div>
    )
}

export default VendorDataCard