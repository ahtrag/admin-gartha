import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {mahasiswa,dosen,jurusan,agama,ujian,nilai} from "./pages";

export default class Content extends Component {
  render() {
    return (
      <div className="content-wrapper">
        

        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Data Details</h3>
                </div>
                <div className="box-body">
                  <Switch>
                    <Route path="/mahasiswa" component={mahasiswa} />
                    <Route path="/dosen" component={dosen} />
                    <Route path="/jurusan" component={jurusan} />
                    <Route path="/agama" component={agama} />
                    <Route path="/ujian" component={ujian} />
                    <Route path="/nilai" component={nilai} />
                    {/* <Route path="/bobot" component={bobot} /> */}
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}