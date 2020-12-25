import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

class AddAppointments extends Component {
  constructor() {
    super();
    this.state = {
      petName: '',
      ownerName: '',
      aptDate: '',
      aptTime: '',
      aptNotes: '',
    };
  }

  handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };

  handleAdd = (e) => {
    e.preventDefault();
    const { petName, ownerName, aptDate, aptTime, aptNotes } = this.state;
    this.props.addApt({ petName, ownerName, aptDate: `${aptDate} ${aptTime}`, aptTime, aptNotes });
    this.setState({
      petName: '',
      ownerName: '',
      aptDate: '',
      aptTime: '',
      aptNotes: '',
    });
  };

  render() {
    const cardClasses = `card textcenter mt-3${this.props.formDisplay ? '' : ' add-appointment'}`;
    return (
      <div className={cardClasses}>
        <div onClick={this.props.handleToggle} className="apt-addheading card-header bg-primary text-white">
          <FaPlus /> Add Appointment
        </div>

        <div className="card-body">
          <form id="aptForm" noValidate>
            <div className="form-group form-row">
              <label className="col-md-2 col-form-label text-md-right" htmlFor="petName" readOnly>
                Pet Name
              </label>
              <div className="col-md-10">
                <input
                  value={this.state.petName}
                  onChange={this.handleChange}
                  type="text"
                  className="form-control"
                  name="petName"
                  placeholder="Pet's Name"
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-md-2 col-form-label text-md-right" htmlFor="ownerName">
                Pet Owner
              </label>
              <div className="col-md-10">
                <input
                  value={this.state.ownerName}
                  onChange={this.handleChange}
                  type="text"
                  className="form-control"
                  name="ownerName"
                  placeholder="Owner's Name"
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-md-2 col-form-label text-md-right" htmlFor="aptDate">
                Date
              </label>
              <div className="col-md-4">
                <input
                  value={this.state.aptDate}
                  onChange={this.handleChange}
                  type="date"
                  className="form-control"
                  name="aptDate"
                  id="aptDate"
                />
              </div>
              <label className="col-md-2 col-form-label text-md-right" htmlFor="aptTime">
                Time
              </label>
              <div className="col-md-4">
                <input
                  value={this.state.aptTime}
                  onChange={this.handleChange}
                  type="time"
                  className="form-control"
                  name="aptTime"
                  id="aptTime"
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-md-2 text-md-right" htmlFor="aptNotes">
                Apt. Notes
              </label>
              <div className="col-md-10">
                <textarea
                  value={this.state.aptNotes}
                  onChange={this.handleChange}
                  className="form-control"
                  rows="4"
                  cols="50"
                  name="aptNotes"
                  id="aptNotes"
                  placeholder="Appointment Notes"
                />
              </div>
            </div>

            <div className="form-group form-row mb-0">
              <div className="offset-md-2 col-md-10">
                <button onClick={this.handleAdd} type="submit" className="btn btn-primary d-block ml-auto">
                  Add Appointment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddAppointments;
