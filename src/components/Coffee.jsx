import { IoEyeOutline } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Coffee = ({coffee,coffees,setCoffees}) => {
    const {_id,name,quantity,supplier,taste,photoUrl}=coffee;
    const handleDelete=_id=>{
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://coffe-store-server-two-zeta.vercel.app/${_id}`,{
                method:'DELETE'
              })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    if(data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          const remaining=coffees.filter(coff=>coff._id!==_id)
                          setCoffees(remaining)
                    }
                })
            }
          });

    }
    return (
      <div className="card card-side bg-base-100 shadow-xl">
      <figure><img src={photoUrl} alt="Movie"/></figure>
      <div className="flex justify-between w-full items-center">
        <div className="card-body">
        <h2 className="card-title">Name:{name}</h2>
        <p>Quantity:{quantity}</p>
        <p>Taste:{taste}</p>
        <p>Supplier:{supplier}</p>
        </div>
        <div className="flex flex-col gap-4">
          <button className="text-xl flex justify-center items-center text-white bg-[#D2B48C] border rounded-lg h-10 w-10"><IoEyeOutline /></button>
          <Link to={`updateCoffee/${_id}`}>
          <button className="text-xl flex justify-center items-center text-white bg-black border rounded-lg h-10 w-10"><FaPen /></button> 
          </Link>
          <button onClick={()=>handleDelete(_id)} className="text-xl flex justify-center items-center text-white bg-[#EA4744] border rounded-lg h-10 w-10"><MdDelete /></button>
        </div>
      </div>
    </div>    );
};

export default Coffee;