import React from "react";

const ListEvent = (props) => {
    return (
    <div class="view view-cascade gradient-card-header pink-gradient narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center">
      <table class="table table-striped">
        <thead>
          <tr id="nama-event">
            <th>Event</th>
            <th>Description of Event</th>
            <th>Picture</th>
            <th>Link</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
            <tr id="nama-event">
              <td>{props.judul}</td>
              <td>{props.isi}</td>
              <td><img src={props.image} width="256px"/></td>
              <td>{props.page}</td>
              <td>
                  <button className="btn btn-outline-danger"
                  onClick={() => { if (window.confirm('Apakah anda yakin menghapus event ini?'))
                  props.hapusProduk(props.idProduk)}}>

                      Delete

                  </button>
              </td>
            </tr>
          </tbody>
      </table>
    </div>
  )
}
export default ListEvent;