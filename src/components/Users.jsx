import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUsers=useLoaderData();
    const [users,setUsers]=useState(loadedUsers);

    const handleDelete=id=>{
        fetch(`https://coffe-store-server-two-zeta.vercel.app/user/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                console.log('deleted successfully');
                //remove the user from ui
                const remainingUSers=users.filter(user=>user._id!==id);
                setUsers(remainingUSers)
            }
        })

    }
    return (
        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Created At</th>
        <th>Last LoggedIn</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        users.map(user=> <tr key={user._id}>
            <th>1</th>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td>{user.lastLoggedAt}</td>
            <td><button onClick={()=>handleDelete(user._id)} className="btn">X</button></td>
          </tr>)
     }
      
      
    </tbody>
  </table>
</div>
    );
};

export default Users;