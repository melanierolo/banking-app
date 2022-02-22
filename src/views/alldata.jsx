import "../App.css";
import { useContext, useState } from "react";
import { UserContext } from "../context/context";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";

function AllData() {
  const ctx = useContext(UserContext);

  const [users, setUsers] = useState(ctx.users);

  console.log(users);

  return (
    <Container className="min-vh-100 p-4">
      <h1>All Data in Store</h1>

      <Table hover responsive="sm" variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {users.map((todo, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{users[i].name}</td>
              <td>{users[i].email}</td>
              <td>{users[i].password}</td>
              <td>{users[i].balance}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default AllData;
