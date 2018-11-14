import React from 'react';

const Order = (props) => {
  const { setSelectedOrder, order } = props;
  const { id, amount, address, created_on } = order;
  const createdDate = new Date(created_on).toLocaleDateString('en-GB');
  return (
    <li className="raised order" key={id} onClick={() => setSelectedOrder(order)}>
      <div className="order-header">
        <p>
          <span className="bold">Order date: </span>
          <span>{createdDate}</span>
        </p>
      </div>
      <div className="order-body">
        <div className="order-details">
          <p>
            <span className="semi-bold">Amount: </span>
            <span>{"\u20A6"}{amount}</span>
          </p>
          <p>
            <span className="semi-bold">Order number: </span>
            <span>{id}</span>
          </p>
          <p>
            <span className="semi-bold">Payment method: </span>
            <span>Pay on delivery</span>
          </p>
        </div>
        <div className="order-address">
          <p><span className="semi-bold">Delivery address:</span></p>
          <p>{address}</p>
        </div>
      </div>
    </li>
  )
}

export default Order;
