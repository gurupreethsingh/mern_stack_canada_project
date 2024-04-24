import React from 'react'

const UpdateUser = () => {
  return (
    <div className='container mt-5 mb-5'
    > 
    <h4>Update User Details.</h4>
    <div className="border p-5">
        <form>
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
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Age
            </label>
            <input type="number" class="form-control" 
            name="age" />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              name="address"
            />
          </div>

          <button type="submit" class="btn btn-sm btn-outline-success">
             Update
          </button>
        </form>
      </div>
    </div>

  )
}

export default UpdateUser