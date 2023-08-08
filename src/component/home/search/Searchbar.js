import React from 'react'
import { useState } from "react";
import "./Searchbar.css";
import Select from 'react-select'
import Button from 'react-bootstrap/Button';

function Searchbar() {
    const[showtab, setShowtab]= useState(1);
 
  const handletab = (e)=>{
   setShowtab(e);
     }


     const makes = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
     const models = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
     const prices = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
    
    return (
        <div className="dropdown-manage">
            
            
            <div className="col-sm-12  dropdown-button"> 
            <ul className="nav  mb-3 mt-1" id="pills-tab" role="tablist">
           <li className="nav-item" role="presentation">
           <button className= {showtab===1? "nav-link nav-manages active": "nav-link nav-manages" }  onClick={()=>handletab(1)}>Make/Model</button>
           </li>
           <li className="nav-item" role="presentation">
             <button className={ showtab===2 ? "nav-link active ms-1": "nav-link nav-manage ms-1"}  onClick={()=>handletab(2)}>Body Style</button>
           </li>
 
           <li className="nav-item" role="presentation">
             <button className={ showtab===3 ? "nav-link active ms-1": "nav-link nav-manage ms-1"}  onClick={()=>handletab(3)}>Payment</button>
           </li>
       </ul>


       <div className="tab-content text-dark" id="pills-tabContent">
 
            {/* start tab 1*/} 
            <div  className= { showtab===1 ? "tab-pane  show active":"tab-pane fade show"} > 
            <div className="d-flex orginal mt-2">
            <Select className="select select-manage ms-3" placeholder="All Makes" options={makes} />
          <Select className="select select-manage ms-3" placeholder="All Models" options={models} />
        
          <Select className="select select-price ms-4" placeholder="Min Price" options={prices} />
          <p className="ms-3 mt-2">TO</p>
          <Select className="select select-price ms-4" placeholder="Max Price" options={prices} />
        
          
            </div>
            <div className="d-flex">
            <Select className="select ms-3" placeholder="250 Miles" options={makes} />
          <Select className="select ms-4" placeholder="Zip Code" options={models} />
          <Button className="ms-4 select-button" variant="danger"><h5><i className="fa fa-search me-2 fs-5"></i>FIND YOURS</h5></Button>
          
            </div>
            
          

           </div>
           {/* close tab 1*/} 
 
 
          {/* start tab 2*/} 
           <div  className= { showtab===2 ? "tab-pane fade show active": "tab-pane fade"} > 
           <div className="d-flex mt-2">
            <Select className="select ms-3" placeholder="All Body Style" options={makes} />
          <Select className="select ms-4" placeholder="Max Miles" options={models} />
          <Select className="select ms-4" placeholder="Min Price" options={prices} />
          <p className="ms-3 mt-2">TO</p>
          <Select className="select ms-4" placeholder="Max Price" options={prices} />
            </div>
            <div className="d-flex">
            <Select className="select ms-3" placeholder="All Makes" options={makes} />
          <Select className="select ms-4" placeholder="All Models" options={models} />
          <Button className="ms-4 select-button" variant="danger"><h5><i className="fa fa-search me-2 fs-5"></i>FIND YOURS</h5></Button>
          
            </div>
           </div>
           {/* close tab 2*/} 
 
 
            {/* start tab 3*/} 
            <div  className= { showtab===3 ? "tab-pane fade show active": "tab-pane fade"} > 
            <div className="d-flex mt-2">
            <Select className="select ms-3" placeholder="Min Payment" options={makes} />
          <Select className="select ms-4" placeholder="Max Payment" options={models} />
          <Select className="select ms-4" placeholder="Min Price" options={prices} />
          <p className="ms-3 mt-2">TO</p>
          <Select className="select ms-4" placeholder="Max Price" options={prices} />
            </div>
            <div className="d-flex">
            <Select className="select ms-3" placeholder="250 Miles" options={makes} />
          <Select className="select ms-4" placeholder="Zip Code" options={models} />
          <Button className="ms-4 select-button" variant="danger"><h5><i className="fa fa-search me-2 fs-5"></i>FIND YOURS</h5></Button>
          
            </div>
           </div>
           {/* close tab 3*/} 
 
 
      </div>
            
            </div>









               
                
            
               

           </div> 
        
    )
}

export default Searchbar