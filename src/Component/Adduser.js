import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate}from 'react-router-dom';


function Adduser() {

    const navigate=useNavigate();
    const[formvalue,setformvalue]=useState({username:'',email:'',status:''});
    const [message,setMessage]=useState('');
    const handleInput=(e)=>{
        setformvalue({...formvalue,[e.target.name]:e.target.value});
    }
    const handleSubmit =async(e)=>{
        e.preventDefault();
        //console.log(formvalue);
        const formData={username:formvalue.username,email:formvalue.email,status:formvalue.status};
        const res=await axios.post("http://localhost/crudapp01/api/user.php",formData);
        if(res.data.success)
        {
            setMessage(res.data.success);
            setTimeout(()=>{
                navigate('/userlist');
            }, 2000);
            
        }
    }
  return (
    <div><h5>Adduser</h5>
    <p className="text-success">{message}</p>
    <form onSubmit={handleSubmit}>
    <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label">Username</label>
    <div className="col-sm-10">
      <input type="text" name="username" value={formvalue.username} className="form-control"onChange={handleInput}/>
    </div>
  </div>
    <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="text" name="email" value={formvalue.email} className="form-control" onChange={handleInput}  />
    </div>
  </div>
  <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword"/>
    </div>
    </div>

    <div className="mb-3 row">
    <label  className="col-sm-2 ">status</label>
    <div className="col-sm-10">
      <select name="status" value={formvalue.status} className="form-control"onChange={handleInput} >
        <option value="">--Select Staus--</option>
        <option value="1">Active</option>
        <option value="0">Inactive</option>

      </select>
  </div>
  </div>
  <div className="mb-2 row">
    <div className="col-sm-5">
      <button name="submit" className="btn btn-success">Submit</button>
    </div>
    </div>
  </form>
</div>
  );
}
export default Adduser;
