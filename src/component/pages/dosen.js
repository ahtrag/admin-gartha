import React, { Component } from "react";
import Aksi from './aksi'
import axios from "axios";

export default class Content extends Component {
  render() {
    return (
      <div>
        <Dosen />
      </div>
    );
  }
}

class Dosen extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios.get("http://localhost:3001/dosen").then(temp => {
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
              <th>Kode Jurusan</th>
              <th>Kode Type Dosen</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {this.state.data.map(item => (
              <tr>
                <td>{item.Kode_Dosen}</td>
                <td>{item.Nama_Dosen}</td>
                <td>{item.Kode_Jurusan}</td>
                <td>{item.Kode_Type_Dosen}</td>
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
