import React, { Component } from "react";
import Aksi from './aksi'
import axios from "axios";

export default class Content extends Component {
  render() {
    return (
      <div>
        <Ujian />
      </div>
    );
  }
}

class Ujian extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios.get("http://localhost:3001/ujian").then(temp => {
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
              <th>Nama</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {this.state.data.map(item => (
              <tr>
                <td>{item.Kode_Ujian}</td>
                <td>{item.Nama_Ujian}</td>
                <td>{item.Status_Ujian}</td>
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
