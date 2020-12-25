import React, { Component } from 'react';
import Appointment from './Appointment';

class ListAppointments extends Component {
  render() {
    const { appointments } = this.props;
    return (
      <div>
        {appointments.map((item) => (
          <Appointment appointment={item} key={item.aptId} />
        ))}
      </div>
    );
  }
}

export default ListAppointments;
