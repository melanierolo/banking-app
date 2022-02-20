import "../App.css";
import { useContext, useState } from "react";
import { UserContext } from "../context/context";
import Table from "react-bootstrap/Table";

function AllData() {
  const ctx = useContext(UserContext);

  const [users, setUsers] = useState(ctx.users);
  console.log(users);

  return (
    <div className="Alldata__content">
      <h1>All Data in Store</h1>
      <br />
      <div>
        <Table responsive="sm" variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Name</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((todo, i) => (
              <tr key={i}>
                <td></td>
                <td>{users[i].name}</td>
                <td>{users[i].email}</td>
                <td>{users[i].password}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default AllData;
