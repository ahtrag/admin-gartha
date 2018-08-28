import React, { Component } from "react";
import Aksi from './aksi'
import axios from "axios";

export default class Content extends Component {
  render() {
    return (
      <div>
        <Agama />
      </div>
    );
  }
}

class Agama extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios.get("http://localhost:3001/agama").then(temp => {
      console.log(temp);
      this.setState({
        data: temp.data
      });
    });
  }

  render() {
    return (
      <div>
        <table id="example2" className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Kode</th>
              <th>Deskripsi</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {this.state.data.map(item => (
              <tr>
                <td>{item.Kode_Agama}</td>
                <td>{item.Deskripsi}</td>
                <td>
                  <Aksi />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
