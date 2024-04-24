import React , {useState , useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([ ]);

    useEffect(()=>{
      axios.get("http://localhost:4000")
      .then(result =>{
        setUsers(result.data);
        console.log(result);
      })
      .catch(err => console.log("errro fetching data ", err));
    } , []);

  return (
    <div>
        <div className='container mt-5 mb-5'>
            <h4>All Users</h4>
            <hr/>
               <div>
               <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                    <th scope="col">Address</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                 {
                   users.map((eachuser, index)=>{
                       return(
                        <tr>
                             <td>{eachuser.name}</td>
                            <td>{eachuser.email}</td>
                            <td>{eachuser.age}</td>
                            <td>{eachuser.address}</td>
                            <td><a href="/update_user" className='btn btn-sm btn-outline-warning'>edit</a></td>
                            <td><a className='btn btn-sm btn-outline-danger'>delete</a></td>
                        </tr>
                       )
                   })
                 } 
                </tbody>
                </table>
               </div>
        </div>
    </div>
  )
}

export default Users;