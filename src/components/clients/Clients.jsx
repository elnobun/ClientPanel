import React, { Component, Fragment } from 'react';
import { NavLink as Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

class Client extends Component {
  render() {
    const clients = [
      {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        phone: '111-111-111',
        balance: '10'
      }
    ];

    if (clients) {
      return (
        <Fragment>
          <div className="row">
            <div className="col-md-6">
              <h2>
                <i className="fas fa-user-cog text-muted" />&nbsp; Client
              </h2>
            </div>
            <div className="col-md-6">amount</div>
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>£{parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" />&nbsp; Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

Client.propTypes = {};

export default Client;
