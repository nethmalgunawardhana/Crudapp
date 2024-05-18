
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";


function Userlist()
{ 
    const [userData, setUserData]= useState([]);

   
    useEffect( ()=>{   
    getUserData();
    },[]);

    const getUserData= async()=>{
    const reqData= await fetch("http://localhost/crudapp01/api/user.php");
    const resData= await reqData.json();           
    setUserData(resData);
     }

     getUserData();


       return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 mt-4">
                        <h5 className="mb-10">User List</h5>
                                <table className="table table-bordered">
                                <thead>
                                <tr>
                                <th scope="col">Sr.No</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                 userData.map((uData, index)=>(
                                  <tr key={index}>
                                <td>{index+1 }</td>
                                <td>{uData.username}</td>
                                <td>{uData.email}</td>
                              
                                <td>{ uData.status == 1 ? "Active":"Inactive"} </td>
                                <td>
                                 <Link to={"/edituser/"+uData} className="btn btn-success mx-2">Edit</Link>
                                 <Link to="/edituser" className="btn btn-danger">Delete</Link>
                                </td>
                                </tr>
                                ))
                                }                                
                                </tbody>
                                </table>  
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Userlist;