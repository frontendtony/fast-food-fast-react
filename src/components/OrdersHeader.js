import React from 'react';

const OrdersHeader = (props) => {
  const { filter, onSelectChange } = props;
  return (
    <div className="raised orders-container-header">
      <p>
        <span className="bold">Filter by status</span>
        <select name="filter" id="filter"
          onChange={onSelectChange}
          value={filter}
        >
          <option value="all">All</option>
          <option value="new">New</option>
          <option value="processing">Processing</option>
          <option value="cancelled">Cancelled</option>
          <option value="complete">Complete</option>
        </select>
      </p>
    </div>
  );
};

export default OrdersHeader;
