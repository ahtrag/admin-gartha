import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

export default class SideBar extends Component {
  render() {
    return (
      <div>
        <aside className="main-sidebar">
          <section className="sidebar">
            <div className="user-panel">
              <div className="pull-left image">
                <img
                  src="img/user2-160x160.jpg"
                  className="img-circle"
                  alt="User img"
                />
              </div>
              <div className="pull-left info">
                <p>Alexander Pierce</p>
                <a href="">
                  <i className="fa fa-circle text-success" /> Online
                </a>
              </div>
            </div>
            <form action="" method="get" className="sidebar-form">
              <div className="input-group">
                <input
                  type="text"
                  name="q"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="input-group-btn">
                  <button
                    type="submit"
                    name="search"
                    id="search-btn"
                    className="btn btn-flat"
                  >
                    <i className="fa fa-search" />
                  </button>
                </span>
              </div>
            </form>
            <ul className="sidebar-menu" data-widget="tree">
              <li className="header">MAIN NAVIGATION</li>
              <li className="treeview">
                <a href="">
                  <i className="fa fa-list-alt" />
                  <span>Tabel Mahasiswa</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li>
                    <Link to={"/mahasiswa"}>
                      <i className="fa fa-circle-o" /> Mahasiswa
                    </Link>
                  </li>
                  <li>
                    <Link to={"/dosen"}>
                      <i className="fa fa-circle-o" /> Dosen
                    </Link>
                  </li>
                  <li>
                    <Link to={"/jurusan"}>
                      <i className="fa fa-circle-o" /> Jurusan
                    </Link>
                  </li>
                  <li>
                    <Link to={"/agama"}>
                      <i className="fa fa-circle-o" /> Agama
                    </Link>
                  </li>
                  <li>
                    <Link to={"/ujian"}>
                      <i className="fa fa-circle-o" /> Ujian
                    </Link>
                  </li>
                  <li>
                    <Link to={"/nilai"}>
                      <i className="fa fa-circle-o" /> Nilai
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </aside>

        <Switch>
          <Route path="/mahasiswa" component={mahasiswa} />
          <Route path="/dosen" component={dosen} />
          <Route path="/jurusan" component={jurusan} />
          <Route path="/agama" component={agama} />
          <Route path="/ujian" component={ujian} />
          <Route path="/nilai" component={nilai} />
        </Switch>
      </div>
    );
  }
}

const mahasiswa = () => (
  <div className="content-wrapper">
    <section className="content-header">
      <h1>Mahasiswa</h1>
    </section>
  </div>
);

const dosen = () => (
  <div className="content-wrapper">
    <section className="content-header">
      <h1>Dosen</h1>
    </section>
  </div>
);

const jurusan = () => (
  <div className="content-wrapper">
    <section className="content-header">
      <h1>Jurusan</h1>
    </section>
  </div>
);

const agama = () => (
  <div className="content-wrapper">
    <section className="content-header">
      <h1>Agama</h1>
    </section>
  </div>
);

const ujian = () => (
  <div className="content-wrapper">
    <section className="content-header">
      <h1>Ujian</h1>
    </section>
  </div>
);

const nilai = () => (
  <div className="content-wrapper">
    <section className="content-header">
      <h1>Nilai</h1>
    </section>
  </div>
);

