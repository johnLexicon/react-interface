import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';

class Appointment extends Component {
  render() {
    const { appointment } = this.props;
    return (
      <div className="appointment-list item-list mb-3">
        <div className="pet-item col media py-3">
          <div className="mr-3">
            <button
              onClick={() => {
                this.props.handleDelete(appointment);
              }}
              className="pet-delete btn btn-sm btn-danger"
            >
              <FaTimes />
            </button>
          </div>

          <div className="pet-info media-body">
            <div className="pet-head d-flex">
              <span className="pet-name">{appointment.petName}</span>
              <span className="apt-date ml-auto">{appointment.aptDate}</span>
            </div>

            <div className="owner-name">
              <span className="label-item">Owner: </span>
              <span>{appointment.ownerName}</span>
            </div>
            <div className="apt-notes">{appointment.aptNotes}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Appointment;
