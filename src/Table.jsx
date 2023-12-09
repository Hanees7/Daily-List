import React from "react";

const Table = ({table, deleteTo, setId}) => {
  return (
    <>
      <div className="container text-center">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Details</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {table.map((d) => {
            return (
              <>
                <tbody key={d.id}>
                  <tr>
                    <td>{d.title}</td>
                    <td>{d.desc}</td>
                    <td>
                      <button onClick={()=>setId(d.id)} className="btn btn-warning mx-2">Edit</button>
                      <button onClick={()=>deleteTo(d.id)} className="btn btn-danger">Remove</button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Table;
