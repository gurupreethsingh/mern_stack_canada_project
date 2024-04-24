import React from 'react'

const Header = () => {
  return (
    <div>
        <h1 className='bg-dark text-center'>MERN STACK APP</h1>
    <div className='d-flex justify-content-around bg-light text-dark m-0 p-0'>
            <div>
                <nav class="nav">
                <a class="nav-link text-dark" href="/">PAA-app</a>
                <a class="nav-link text-dark" href="/">Home</a>
                <a class="nav-link text-dark" href="/create_user">CreateUser</a>
                </nav>
            </div>

            <div>
                <nav class="nav">
                <a class="nav-link text-dark" href="#">Login</a>
                <a class="nav-link text-dark" href="#">Register</a>
                <a class="nav-link text-dark" href="#">Logout</a>
                </nav>
            </div>
        </div>
    </div>
    
  )
}

export default Header;