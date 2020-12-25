import React, { Component } from 'react';
import '../css/App.css';
import AddAppointments from './AddAppointments';
import ListAppointments from './ListAppointments';
import SearchAppointments from './SearchAppointments';

class App extends Component {
  constructor() {
    super();
    this.state = {
      appointments: [],
      lastIndex: 0,
    };
  }

  componentDidMount() {
    fetch('./data.json')
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          appointments: result.map((a) => {
            a.aptId = this.state.lastIndex;
            this.setState({ lastIndex: this.state.lastIndex + 1 });
            return a;
          }),
        });
      });
  }

  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointments />
                <SearchAppointments />
                <ListAppointments appointments={this.state.appointments} />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
