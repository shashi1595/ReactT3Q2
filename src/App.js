import React, { Component } from "react";
import "./styles.css";
class App extends Component {
  render() {
    return (
      <div>
        <h1 className="emp">Employee Details</h1>
        <table className="table">
          <tr>
            <th className="th">Employee Id</th>
            <th className="th">Employee Name</th>
            <th className="th">Email Id</th>
          </tr>
          <tr className>
            <td>20111710</td>
            <td>Shashi</td>
            <td>shashi@wipro.com</td>
          </tr>
          <tr>
            <td>4589660</td>
            <td>Amit</td>
            <td>amit@wipro.com</td>
          </tr>
          <tr>
            <td>60346710</td>
            <td>Akshay</td>
            <td>akshay@wipro.com</td>
          </tr>
          <tr>
            <td>45698756</td>
            <td>Vikash</td>
            <td>vikash@wipro.com</td>
          </tr>
          <tr>
            <td>56987524</td>
            <td>Pratik</td>
            <td>pratik@wipro.com</td>
          </tr>
        </table>
      </div>
    );
  }
}
export default App;
