import React, { Component } from 'react'
//import { Table} from 'reactstrap';
import {Table} from 'react-bootstrap'
class DataTable extends Component {
  render() {
    const items = this.props.items.map(item => {
      return (
        <tr key={item.id}>
          <th scope="row">{item.user_id}</th>
          <td>{item.full_name}</td>
          <td>{item.section}</td>
          <td>{item.year}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
        </tr>
        )
      })

    return (
      <>
      <Table responsive hover>
        <thead>
          <tr>
            <th>StudentID</th>
            <th>FullName</th>
            <th>Section</th>
            <th>Year</th>
            <th>Email</th>
            <th>Phone</th>
            
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    </>
    )
  }
}

export default DataTable