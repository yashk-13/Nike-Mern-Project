import React from 'react';

function Footer ()  {
  
  return (
    <div className='bg-dark !important'>
        <footer className=" text-center text-lg-start ">
  {/* <!-- Grid container --> */}
  <div className="container p-4 footerdiv">
    {/* <!--Grid row--> */}
    <div className="row ">
      {/* <!--Grid column--> */}
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0 ">
        <h5 className="text-uppercase text-secondary">Icons</h5>

        <ul className="list-unstyled mb-0 ">
          <li>
            <a href="text-secondary"  >Link 1</a>
          </li>
          <li>
            <a href="text-secondary" >Link 2</a>
          </li>
          <li>
            <a href="text-secondary" >Link 3</a>
          </li>
          <li>
            <a href="text-secondary"  >Link 4</a>
          </li>
        </ul>
      </div>
      {/* <!--Grid column--> */}

      {/* <!--Grid column--> */}
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase mb-0 text-secondary">Kicks</h5>

        <ul className="list-unstyled">
          <li>
            <a href="text-secondary" >Air Force 1</a>
          </li>
          <li>
            <a href="text-secondary" >Air Max 90</a>
          </li>
          <li>
            <a href="text-secondary" >Air  Max 95</a>
          </li>
          <li>
            <a href="text-secondary" >Huarache</a>
          </li>
        </ul>
      </div>
      {/* <!--Grid column--> */}

      {/* <!--Grid column--> */}
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase text-secondary">Clothing</h5>

        <ul className="list-unstyled mb-0">
          <li>
            <a href="text-secondary" >Link 1</a>
          </li>
          <li>
            <a href="text-secondary" >Link 2</a>
          </li>
          <li>
            <a href="text-secondary" >Link 3</a>
          </li>
          <li>
            <a href="text-secondary" >Link 4</a>
          </li>
        </ul>
      </div>
      {/* <!--Grid column--> */}

      {/* <!--Grid column--> */}
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase mb-0 text-secondary">Kids</h5>

        <ul className="list-unstyled">
          <li>
            <a href="text-secondary">Link 1</a>
          </li>
          <li>
            <a href="text-secondary">Link 2</a>
          </li>
          <li>
            <a href="text-secondary">Link 3</a>
          </li>
          <li>
            <a href="text-secondary">Link 4</a>
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