import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateCoffee = () => {
    const coffee=useLoaderData()
    console.log(coffee)
    const {_id,name,quantity,supplier,taste,category,details,photoUrl}=coffee;

    const handleUpdateCoffee=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const quantity=form.quantity.value;
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const details=form.details.value;
        const photoUrl=form.photoUrl.value;
        const updatedCoffee={name,quantity,supplier,taste,details,photoUrl};
        console.log(updatedCoffee)

        //send data
        fetch(`https://coffe-store-server-two-zeta.vercel.app/coffee/${_id}`,{
          method:'PUT',
          headers:{
            'content-type':'application/json',
          },
          body:JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.modifiedCount>0){
            Swal.fire({
              title: 'Success',
              text: 'User Updated Successfully',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
          }
        })

    }
   
    

    
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h3 className="text-3xl font-extrabold text-center">Update Coffee:{name}</h3>
            <form onSubmit={handleUpdateCoffee} action="">
                {/**form row-1 */}
        <div className='flex gap-8 mb-5'>
        <div className="md:w-1/2">
          <p>Coffee Name</p>
          <input className="input input-bordered w-full" type="text" placeholder="Coffee Name" defaultValue={name} name="name"/>
        </div>
        <div className="md:w-1/2">
          <p>Available Quantity</p>
          <input className="input input-bordered  w-full" placeholder="Available Quantity" defaultValue={quantity} type="text" name="quantity"/>
        </div>
        </div>
                {/**form row-2 */}
        <div className='flex gap-8 mb-5'>
        <div className="md:w-1/2">
          <p>Supplier</p>
          <input className="input input-bordered w-full" type="text" placeholder="Supplier" defaultValue={supplier} name="supplier"/>
        </div>
        <div className="md:w-1/2">
            <p>Taste</p>
          <input className="input input-bordered  w-full" placeholder="Taste" defaultValue={taste} type="text" name="taste"/>
        </div>
        </div>
                {/**form row-3 */}
        <div className='flex gap-8 mb-5'>
        <div className="md:w-1/2">
          <p>Category</p>
          <input className="input input-bordered w-full" type="text" placeholder="Category" defaultValue={category} name="category"/>
        </div>
        <div className="md:w-1/2">
          <p>Details</p>
          <input className="input input-bordered  w-full" placeholder="Details" defaultValue={details} type="text" name="details"/>
        </div>
        </div>
        {/**form row-4 */}
        <div className='mb-5'>
        <div className="w-full">
          <p>Photo Url</p>
          <input className="input input-bordered w-full" type="text" placeholder="Photo Url" defaultValue={photoUrl} name="photoUrl"/>
        </div>
        </div>
        <input type="submit" value="Update Coffee" className="btn btn-block" />
      </form>
            
        </div>
    );
};

export default UpdateCoffee;