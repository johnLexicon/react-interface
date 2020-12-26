import React, { Component } from 'react'
import '../css/App.css'
import AddAppointments from './AddAppointments'
import ListAppointments from './ListAppointments'
import SearchAppointments from './SearchAppointments'
import { without } from 'lodash'

class App extends Component {
  constructor() {
    super()
    this.state = {
      appointments: [],
      lastIndex: 0,
      formDisplay: false,
      orderBy: 'petName',
      orderDir: 'asc',
      queryText: '',
    }
  }

  componentDidMount() {
    fetch('./data.json')
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          appointments: result.map((a) => {
            a.aptId = this.state.lastIndex
            this.setState({ lastIndex: this.state.lastIndex + 1 })
            return a
          }),
        })
      })
  }

  toggleForm = () => {
    const currentValue = this.state.formDisplay
    this.setState({
      formDisplay: !currentValue,
    })
  }

  addApt = (apt) => {
    const temp = [...this.state.appointments]
    apt.aptId = this.state.lastIndex + 1
    temp.unshift(apt)
    this.setState({
      appointments: temp,
      lastIndex: apt.aptId,
    })
  }

  deleteApt = (apt) => {
    const temp = without(this.state.appointments, apt)
    this.setState({ appointments: temp })
  }

  changeOrder = (orderBy, orderDir) => {
    this.setState({ orderBy, orderDir })
  }

  sortApts = (aptsToSort, orderBy, orderDir) => {
    let order
    if (orderDir === 'asc') order = 1
    else order = -1

    return aptsToSort.sort((a, b) => {
      if (a[orderBy].toLowerCase() < b[orderBy].toLowerCase()) return -1 * order
      else return 1 * order
    })
  }

  filteredApts = (aptsToFilter, queryText) => {
    queryText = queryText.toLowerCase()
    return aptsToFilter.filter(
      (apt) =>
        apt['petName'].toLowerCase().includes(queryText) ||
        apt['ownerName'].toLowerCase().includes(queryText) ||
        apt['aptNotes'].toLowerCase().includes(queryText)
    )
  }

  render() {
    const { orderBy, orderDir, queryText } = this.state
    let aptsList = [...this.state.appointments]

    const sortedApts = this.sortApts(aptsList, orderBy, orderDir)
    const filteredApts = this.filteredApts(sortedApts, queryText)

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointments
                  formDisplay={this.state.formDisplay}
                  handleToggle={this.toggleForm}
                  addApt={this.addApt}
                />
                <SearchAppointments orderDir={orderDir} orderBy={orderBy} changeOrder={this.changeOrder} />
                <ListAppointments appointments={filteredApts} handleDelete={this.deleteApt} />
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default App
