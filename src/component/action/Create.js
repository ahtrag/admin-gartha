// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import axios from "axios";
// import { Link } from "react-router-dom";

// class Create extends Component {
//   constructor() {
//     super();
//     this.state = {
//       Kode_Mahasiswa: "",
//       Nama_Mahasiswa: "",
//       Alamat: "",
//       Kode_Agama: ""
//     };
//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }
//   onChange(e) {
//     const state = this.state;
//     state[e.target.name] = e.target.value;
//     this.setState(state);
//   }

//   onSubmit(e) {
//     e.preventDefault();
//     const { Kode_Mahasiswa, Nama_Mahasiswa, Alamat, Kode_Agama } = this.state;
//     const { text, desc } = this.state;
//     const data = { text: this.state.text };
//     axios.post("/mahasiswa", {
//       Kode_Mahasiswa,
//       Nama_Mahasiswa,
//       Alamat,
//       Kode_Agama
//     });
//     axios
//       .post("http://localhost:3001/mahasiswa", { text, desc })
//       .then(result => {
//         this.props.history.push("/");
//         //console.log(result.data)
//       });
//   }

//   render() {
//     //const { isbn, title, author, description, published_year, publisher } = this.state;
//     const { text, desc } = this.state;
//     return (
//       //   <div class="container">
//       //     <div class="panel panel-default">
//       //       <div class="panel-heading">
//       //         <h3 class="panel-title">
//       //           ADD BOOK
//       //         </h3>
//       //       </div>
//       //       <div class="panel-body">
//       //         <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Book List</Link></h4>
//       //         <form onSubmit={this.onSubmit}>
//       //           <div class="form-group">
//       //             <label for="text">TEXT:</label>
//       //             <input type="text" class="form-control" name="text" value={text} onChange={this.onChange} placeholder="Text" />
//       //           </div>
//       //            <div class="form-group">
//       //             <label for="title">Desc:</label>
//       //             <input type="text" class="form-control" name="desc" value={desc} onChange={this.onChange} placeholder="Desc" />
//       //           </div>
//       //           {/*<div class="form-group">
//       //             <label for="author">Author:</label>
//       //             <input type="text" class="form-control" name="author" value={author} onChange={this.onChange} placeholder="Author" />
//       //           </div>
//       //           <div class="form-group">
//       //             <label for="description">Description:</label>
//       //             <textArea class="form-control" name="description" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{description}</textArea>
//       //           </div>
//       //           <div class="form-group">
//       //             <label for="published_date">Published Date:</label>
//       //             <input type="number" class="form-control" name="published_year" value={published_year} onChange={this.onChange} placeholder="Published Year" />
//       //           </div>
//       //           <div class="form-group">
//       //             <label for="publisher">Publisher:</label>
//       //             <input type="text" class="form-control" name="publisher" value={publisher} onChange={this.onChange} placeholder="Publisher" />
//       //           </div> */}
//       //           <button type="submit" class="btn btn-default">Submit</button>
//       //         </form>
//       //       </div>
//       //     </div>
//       //   </div>
//       <div>
//           <form role="form">
//             <div className="box-body">
//               <div className="form-group">
//                 <label htmlFor="Kode_Mahasiswa">Kode Mahasiswa</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="Kode_Mahasiswa"
//                   placeholder="Kode Mahasiswa"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="Nama_Mahasiswa">Nama Mahasiswa</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="Nama_Mahasiswa"
//                   placeholder="Nama Mahasiswa"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="Jenis_Kelamin">Jenis Kelamin</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="Jenis_Kelamin"
//                   placeholder="Jenis Kelamin"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="Alamat">Alamat</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="Alamat"
//                   placeholder="Alamat"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="Kode_Mahasiswa">Kode Jurusan</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="Kode_Mahasiswa"
//                   placeholder="Kode Mahasiswa"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="Status">Status</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="Status"
//                   placeholder="Status"
//                 />
//               </div>
//             </div>
//           </form>
//         </div>
//         <div className="modal-footer">
//           <button
//             type="button"
//             className="btn btn-default pull-left"
//             data-dismiss="modal"
//           >
//             Close
//           </button>
//           <button type="submit" className="btn btn-primary">
//             Add Data
//           </button>
//         </div>
//     );
//   }
// }

// export default Create;
