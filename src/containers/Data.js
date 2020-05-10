//import "./Home.css";
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import DataTable from "../components/DataTable";
//import Form from "../components/Form";
import SearchBox from '../components/search'

class Data extends Component {
  state = {
    items: [],
    search :""
  };
  

  getItems() {
    fetch("http://localhost:3000/crud")
      .then((response) => response.json())
      .then((items) => this.setState({ items }))
      .catch((err) => console.log(err));
  }

  addItemToState = (item) => {
    this.setState((prevState) => ({
      items: [...prevState.items, item],
    }));
  };

  deleteItemFromState = (id) => {
    const updatedItems = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: updatedItems });
  };
  
  componentDidMount() {
    this.getItems();
  }
  handleChange=(e)=>{
    this.setState({search:e.target.value})
}


  render() {
      const {search,items} = this.state;
      const filterIds = items.filter(ids =>{
          return ids.full_name.toLowerCase().includes(search.toLowerCase()) || ids.user_id.toLowerCase().includes(search.toLowerCase()) 
      }) 
    return (
      <div className="Home">
        <div className="lander">
          <Container className="App">
          
            <Row>
              <Col>
                <h1 style={{ margin: "20px 0" }}>Student Info</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2 style={{ margin: "20px 0" }}>Student Database</h2>
              </Col>
            </Row>
            <Row>
            <Col>
            <SearchBox
            placeholder='search by Id or Name'
            handleChange={this.handleChange}
           />
            </Col>
            </Row>
           
            <Row>
          <Col>
            <DataTable items={filterIds}  />
          </Col>
        </Row>

          </Container>
        </div>
      </div>
    );
  }
}

export default Data;
