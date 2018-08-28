import React, { Component } from "react";
import Aksi from './aksi'
import axios from "axios";

export default class Content extends Component {
  render() {
    return (
      <div>
        <Nilai />
      </div>
    );
  }
}

class Nilai extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios.get("http://localhost:3001/nilai").then(temp => {
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
              <th>Kode Nilai</th>
              <th>Kode Mahasiswa</th>
              <th>Kode Ujian</th>
              <th>Nilai</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {this.state.data.map(item => (
              <tr>
                <td>{item.Kode_Nilai}</td>
                <td>{item.Kode_Mahasiswa}</td>
                <td>{item.Kode_Ujian}</td>
                <td>{item.Nilai}</td>
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
