import React from 'react';

function Footer ()  {
  
  return (
    <div className='bg-dark !important'>
        <footer className=" text-center text-lg-start bg-dark">
  {/* <!-- Grid container --> */}
  <div className="container  p-4 bg-dark footerdiv">
    {/* <!--Grid row--> */}
    <div className="row bg-dark ">
      {/* <!--Grid column--> */}
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0 bg-dark">
        <h5 className="text-uppercase text-light">Icons</h5>

        <ul className="list-unstyled mb-0 bg-dark">
          <li>
            <a className="text-secondary" href='shoes' >Link 1</a>
          </li>
          <li>
            <a className="text-secondary" href='shoes'>Link 2</a>
          </li>
          <li>
            <a className="text-secondary" href='shoes'>Link 3</a>
          </li>
          <li>
            <a className="text-secondary" href='shoes' >Link 4</a>
          </li>
        </ul>
      </div>
      {/* <!--Grid column--> */}

      {/* <!--Grid column--> */}
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0 bg-dark">
        <h5 className="text-uppercase mb-0 text-light">Kicks</h5>

        <ul className="list-unstyled">
          <li>
            <a className="text-secondary"href='shoes' >Air Force 1</a>
          </li>
          <li>
            <a className="text-secondary"href='shoes' >Air Max 90</a>
          </li>
          <li>
            <a className="text-secondary"href='shoes' >Air  Max 95</a>
          </li>
          <li>
            <a className="text-secondary"href='shoes' >Huarache</a>
          </li>
        </ul>
      </div>
      {/* <!--Grid column--> */}

      {/* <!--Grid column--> */}
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0 bg-dark">
        <h5 className="text-uppercase text-light">Clothing</h5>

        <ul className="list-unstyled mb-0">
          <li>
            <a className="text-secondary"href='shoes' >Link 1</a>
          </li>
          <li>
            <a className="text-secondary"href='shoes' >Link 2</a>
          </li>
          <li>
            <a className="text-secondary"href='shoes' >Link 3</a>
          </li>
          <li>
            <a className="text-secondary"href='shoes' >Link 4</a>
          </li>
        </ul>
      </div>
      {/* <!--Grid column--> */}

      {/* <!--Grid column--> */}
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0 bg-dark">
        <h5 className="text-uppercase mb-0 text-light">Kids</h5>

        <ul className="list-unstyled">
          <li>
            <a className="text-secondary"href='shoes'>Link 1</a>
          </li>
          <li>
            <a className="text-secondary"href='shoes'>Link 2</a>
          </li>
          <li>
            <a className="text-secondary"href='shoes'>Link 3</a>
          </li>
          <li>
            <a className="text-secondary"href='shoes'>Link 4</a>
          </li>
        </ul>
      </div>
      {/* <!--Grid column--> */}
    </div>
    {/* <!--Grid row--> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-3 text-secondary p-3" style={{backgroundColor: "#111"}}>
    © 2023 Nike, Inc.All Rights Reserved.
   
  </div>
  {/* <!-- Copyright --> */}
</footer>
    </div>
  )
}
export default Footer;