import React, { Component } from 'react'

class SearchAppointments extends Component {
  render() {
    const { orderBy, orderDir, changeOrder, searchApts } = this.props
    const dropdownBtnCls = 'sort-by dropdown-item '
    return (
      <div className="search-appointments row justify-content-center my-4">
        <div className="col-md-6">
          <div className="input-group">
            <input
              onChange={(e) => searchApts(e.target.value)}
              id="SearchApts"
              type="text"
              className="form-control"
              aria-label="Search Appointments"
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by: <span className="caret" />
              </button>

              <div className="sort-menu dropdown-menu dropdown-menu-right">
                <button
                  onClick={() => {
                    changeOrder('petName', orderDir)
                  }}
                  className={dropdownBtnCls + (orderBy === 'petName' ? 'active' : '')}
                  href="#"
                >
                  Pet Name
                </button>
                <button
                  onClick={() => {
                    changeOrder('aptDate', orderDir)
                  }}
                  className={dropdownBtnCls + (orderBy === 'aptDate' ? 'active' : '')}
                  href="#"
                >
                  Date
                </button>
                <button
                  onClick={() => {
                    changeOrder('ownerName', orderDir)
                  }}
                  className={dropdownBtnCls + (orderBy === 'ownerName' ? 'active' : '')}
                  href="#"
                >
                  Owner
                </button>
                <div role="separator" className="dropdown-divider" />
                <button
                  onClick={() => changeOrder(orderBy, 'asc')}
                  className={dropdownBtnCls + (orderDir === 'asc' ? 'active' : '')}
                  href="#"
                >
                  Asc
                </button>
                <button
                  onClick={() => changeOrder(orderBy, 'desc')}
                  className={dropdownBtnCls + (orderDir === 'desc' ? 'active' : '')}
                  href="#"
                >
                  Desc
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchAppointments
