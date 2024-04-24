import React , {useState} from 'react';
import axios  from "axios";
import {useNavigate} from "react-router-dom";

const CreateUser = () => {

    //  crate the hook for name, email, age, and address. 
    
    const [name,   setName]        = useState("");
    const [email,   setEmail]      = useState("");
    const [age,     setAge]          = useState(0);
    const [address , setAddress] = useState("");

    const navigate = useNavigate();

    const resetFormFields = ()=>{
      setName("");
      setEmail("");
      setAge("");
      setAddress("");
    }

    const  submitformHandler =(submitevent)=>{
      submitevent.preventDefault();
      axios.post("http://localhost:4000/createUser" , {name, email, age, address})
      .then(result => {
        console.log(result);
        alert("New user added to database.");
        resetFormFields();
        navigate("/");
    })
      .catch(err => console.log(err));
    }

  return (
    <div className="container mt-5 mb-5">
      <h4>Create Users</h4>

      <div className="border p-5">
        <form  onSubmit={submitformHandler}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="name"
              onChange={(e)=> setName(e.target.value)}
              value = {name}
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Email
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              name="email"
              onChange={(e)=> setEmail(e.target.value)}
              value = {email}
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Age
            </label>
            <input type="number" class="form-control" 
            name="age" 
            onChange={(e)=> setAge(e.target.value)}
            value = {age}
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Address
            </label>
            <input
              type="text"      class="form-control"    id="exampleInputPassword1"
              name="address"
              onChange={(e)=> setAddress(e.target.value)}
              value = {address}
            />
          </div>

          <button type="submit" 
          class="btn btn-sm btn-outline-success">
            Add User
          </button>
        </form>
      </div>
    </div>

  )
}

export default CreateUser