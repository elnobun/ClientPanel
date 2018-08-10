import React from 'react';
import Clients from '../clients/Clients';
import Sidebar from './Sidebar';
// import PropTypes from 'prop-types';

const Dashboard = props => {
  return (
    <div className="row">
      <div className="col-md-10">
        <Clients />
      </div>
      <div className="col-md-2">
        <Sidebar />
      </div>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
