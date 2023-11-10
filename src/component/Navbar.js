import React, { useState,useContext, createContext } from 'react'
import {Link} from 'react-router-dom';
import App from '../App';
import News_component from './News_component';



const bc=createContext();
export default function Navbar(props) {
  
let a="India";
const [country,setCountry]=useState(a);
const [con,setCon]=useState("in");
  function adi(abc){
console.log(abc);
    a=document.getElementById(`${abc}`).innerText;
    setCountry(a);
    setCon(`${abc}`);
props.setConn(abc);
  }
  

  
  return (
    
        <>
        
        <div>
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} sticky-top`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"><b>{props.name}</b></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/sports">Sport</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
          </li>
          
        </ul>
        
        <div className="dropdown me-4">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="countryDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa-solid fa-globe"></i> {country}
            </button>
            <div className="dropdown-menu" aria-labelledby="countryDropdown" style={{maxHeight: "200px", overflowY: "auto"}}>
            <a className="dropdown-item" href="#" id="ae" onClick={()=>adi('ae')}>United Arab Emirates</a>
                <a className="dropdown-item" href="#" id="ar" onClick={()=>adi('ar')}>Argentina</a>
                <a className="dropdown-item" href="#" id="at" onClick={()=>adi('at')}>Austria</a>
                <a className="dropdown-item" href="#" id="au" onClick={()=>adi('au')}>Australia</a>
                <a className="dropdown-item" href="#" id="be" onClick={()=>adi('be')}>Belgium</a>
                <a className="dropdown-item" href="#" id="bg" onClick={()=>adi('bg')}>Bulgaria</a>
                <a className="dropdown-item" href="#" id="br" onClick={()=>adi('br')}>Brazil</a>
                <a className="dropdown-item" href="#" id="ca" onClick={()=>adi('ca')}>Canada</a>
                <a className="dropdown-item" href="#" id="ch" onClick={()=>adi('ch')}>Switzerland</a>
                <a className="dropdown-item" href="#" id="cn" onClick={()=>adi('cn')}>China</a>
                <a className="dropdown-item" href="#" id="co" onClick={()=>adi('co')}>Colombia</a>
                <a className="dropdown-item" href="#" id="cu" onClick={()=>adi('cu')}>Cuba</a>
                <a className="dropdown-item" href="#" id="cz" onClick={()=>adi('cz')}>Czech Republic</a>
                <a className="dropdown-item" href="#" id="de" onClick={()=>adi('de')}>Germany</a>
                <a className="dropdown-item" href="#" id="eg" onClick={()=>adi('eg')}>Egypt</a>
                <a className="dropdown-item" href="#" id="fr" onClick={()=>adi('fr')}>France</a>
                <a className="dropdown-item" href="#" id="gb" onClick={()=>adi('gb')}>United Kingdom</a>
                <a className="dropdown-item" href="#" id="gr" onClick={()=>adi('gr')}>Greece</a>
                <a className="dropdown-item" href="#" id="hk" onClick={()=>adi('hk')}>Hong Kong</a>
                <a className="dropdown-item" href="#" id="hu" onClick={()=>adi('hu')}>Hungary</a>
                <a className="dropdown-item" href="#" id="id" onClick={()=>adi('id')}>Indonesia</a>
                <a className="dropdown-item" href="#" id="ie" onClick={()=>adi('ie')}>Ireland</a>
                <a className="dropdown-item" href="#" id="il" onClick={()=>adi('il')}>Israel</a>
                <a className="dropdown-item" href="#" id="in" onClick={()=>adi('in')}>India</a>
                <a className="dropdown-item" href="#" id="it" onClick={()=>adi('it')}>Italy</a>
                <a className="dropdown-item" href="#" id="jp" onClick={()=>adi('jp')}>Japan</a>
                <a className="dropdown-item" href="#" id="kr" onClick={()=>adi('kr')}>South Korea</a>
                <a className="dropdown-item" href="#" id="lt" onClick={()=>adi('lt')}>Lithuania</a>
                <a className="dropdown-item" href="#" id="lv" onClick={()=>adi('lv')}>Latvia</a>
                <a className="dropdown-item" href="#" id="ma" onClick={()=>adi('ma')}>Morocco</a>
                <a className="dropdown-item" href="#" id="mx" onClick={()=>adi('mx')}>Mexico</a>
                <a className="dropdown-item" href="#" id="my" onClick={()=>adi('my')}>Malaysia</a>
                <a className="dropdown-item" href="#" id="ng" onClick={()=>adi('ng')}>Nigeria</a>
                <a className="dropdown-item" href="#" id="nl" onClick={()=>adi('nl')}>Netherlands</a>
                <a className="dropdown-item" href="#" id="no" onClick={()=>adi('no')}>Norway</a>
                <a className="dropdown-item" href="#" id="nz" onClick={()=>adi('nz')}>New Zealand</a>
                <a className="dropdown-item" href="#" id="ph" onClick={()=>adi('ph')}>Philippines</a>
                <a className="dropdown-item" href="#" id="pl" onClick={()=>adi('pl')}>Poland</a>
                <a className="dropdown-item" href="#" id="pt" onClick={()=>adi('pt')}>Portugal</a>
                <a className="dropdown-item" href="#" id="ro" onClick={()=>adi('ro')}>Romania</a>
                <a className="dropdown-item" href="#" id="rs" onClick={()=>adi('rs')}>Serbia</a>
                <a className="dropdown-item" href="#" id="ru" onClick={()=>adi('ru')}>Russia</a>
                <a className="dropdown-item" href="#" id="sa" onClick={()=>adi('sa')}>Saudi Arabia</a>
                <a className="dropdown-item" href="#" id="se" onClick={()=>adi('se')}>Sweden</a>
                <a className="dropdown-item" href="#" id="sg" onClick={()=>adi('sg')}>Singapore</a>
                <a className="dropdown-item" href="#" id="si" onClick={()=>adi('si')}>Slovenia</a>
                <a className="dropdown-item" href="#" id="sk" onClick={()=>adi('sk')}>Slovakia</a>
                <a className="dropdown-item" href="#" id="th" onClick={()=>adi('th')}>Thailand</a>
                <a className="dropdown-item" href="#" id="tr" onClick={()=>adi('tr')}>Turkey</a>
                <a className="dropdown-item" href="#" id="tw" onClick={()=>adi('tw')}>Taiwan</a>
                <a className="dropdown-item" href="#" id="ua" onClick={()=>adi('ua')}>Ukraine</a>
                <a className="dropdown-item" href="#" id="us" onClick={()=>adi('us')}>United States</a>
                <a className="dropdown-item" href="#" id="ve" onClick={()=>adi('ve')}>Venezuela</a>
                <a className="dropdown-item" href="#" id="za" onClick={()=>adi('za')}>South Africa</a>
            </div>
        </div>

        <div className={`form-check form-switch text-${props.mode=='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.write}</label>
</div>
      </div>
    </div>
  </nav>
  </div>
  
        </>
  )
}

