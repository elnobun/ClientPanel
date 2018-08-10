import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <Link to="/client/add" className="btn btn-success btn-block">
        <i className="fas fa-plus-circle" />&nbsp; New
      </Link>
    </div>
  );
};

export default Sidebar;
