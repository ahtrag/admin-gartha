import React, { Component } from "react";
// import Aksi from "./aksi";
import ModalMhs from "./modal/mmahasiswa";
import axios from "axios";

export default class Content extends Component {
  render() {
    return (
      <div>
        <Mahasiswa />
      </div>
    );
  }
}

class Mahasiswa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/mahasiswa").then(temp => {
      console.log(temp);
      this.setState({
        data: temp.data
      });
    });
  }

  delete(id) {
    console.log(id);
    axios.delete("http://localhost:3001/mahasiswa/").then(
      result => {
        window.location.reload();
      }
    );
  }

  render() {
    return (
      <div>
        <div className="box-body">
          <button
            type="button"
            className="btn btn-default"
            data-toggle="modal"
            data-target="#modal-default"
          >
            Create
          </button>
        </div>
        <div className="modal fade" id="modal-default">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
                <h4 className="modal-title">Mahasiswa</h4>
              </div>
              <div className="modal-body">
                <ModalMhs />
              </div>
            </div>
          </div>
        </div>

        <table id="example2" className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Kode</th>
              <th>Nama</th>
              <th>Jenis Kelamin</th>
              <th>Alamat</th>
              <th>Kode Jurusan</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {this.state.data.map(item => (
              <tr>
                <td>{item.Kode_Mahasiswa}</td>
                <td>{item.Nama_Mahasiswa}</td>
                <td>{item.Jenis_Kelamin}</td>
                <td>{item.Alamat}</td>
                <td>{item.Kode_Jurusan}</td>
                <td>{item.Status}</td>
                <td>
                  {/* <Aksi /> */}
                  <div className="box-tools">
                    <button type="button" className="btn btn-box-tool">
                      <i className="fa fa-eye" />
                    </button>
                    <button type="button" className="btn btn-box-tool">
                      <i className="fa fa-wrench" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-box-tool"
                      onClick={this.delete.bind(
                        this,
                        item.Kode_Mahasiswa
                      )}
                    >
                      <i className="fa fa-times" />
                    </button>
                  </div>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
