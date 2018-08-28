import React, { Component } from "react";
import axios from "axios";

export default class mmahasiswa extends Component {
  constructor() {
    super();
    this.state = {
      Kode_Mahasiswa: "",
      Nama_Mahasiswa: "",
      Jenis_Kelamin: "",
      Alamat: "",
      Kode_Jurusan: "",
      Status: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const state = this.state;
    state[e.target.id] = e.target.value; //nyamain state dng id yg ada pada form untuk si target.id
    this.setState(state);
  }

  onSubmit(e) {
    e.preventDefault(); //biar ga bisa di enter
    const {
      Kode_Mahasiswa,
      Nama_Mahasiswa,
      Jenis_Kelamin,
      Alamat,
      Kode_Jurusan,
      Status
    } = this.state;

    axios
      .post("http://localhost:3001/mahasiswa", {
        Kode_Mahasiswa,
        Nama_Mahasiswa,
        Jenis_Kelamin,
        Alamat,
        Kode_Jurusan,
        Status
      })
      .then(result => {
        window.location.reload();
        // return <Redirect to='/' />
        // history.push("/"); /*  */
      });
  }

  render() {
    const {
      Kode_Mahasiswa,
      Nama_Mahasiswa,
      Jenis_Kelamin,
      Alamat,
      Kode_Jurusan,
      Status
    } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="box-body">
          <div className="form-group">
            <label htmlFor="Kode_Mahasiswa">Kode Mahasiswa</label>
            <input
              type="text"
              className="form-control"
              id="Kode_Mahasiswa"
              placeholder="Kode Mahasiswa"
              value={Kode_Mahasiswa}
              onChange={this.onChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="Nama_Mahasiswa">Nama Mahasiswa</label>
            <input
              type="text"
              className="form-control"
              id="Nama_Mahasiswa"
              placeholder="Nama Mahasiswa"
              value={Nama_Mahasiswa}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="Jenis_Kelamin">Jenis Kelamin</label>
            <input
              type="text"
              className="form-control"
              id="Jenis_Kelamin"
              placeholder="Jenis Kelamin"
              value={Jenis_Kelamin}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="Alamat">Alamat</label>
            <input
              type="text"
              className="form-control"
              id="Alamat"
              placeholder="Alamat"
              value={Alamat}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="Kode_Jurusan">Kode Jurusan</label>
            <input
              type="text"
              className="form-control"
              id="Kode_Jurusan"
              placeholder="Kode Jurusan"
              value={Kode_Jurusan}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="Status">Status</label>
            <input
              type="text"
              className="form-control"
              id="Status"
              placeholder="Status"
              value={Status}
              onChange={this.onChange}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-default pull-left"
            data-dismiss="modal"
          >
            Close
          </button>
          <button type="submit" className="btn btn-primary">
            Add Data
          </button>
        </div>
      </form>
    );
  }
}
