import Swal from 'sweetalert2';


const AddCoffee = () => {
    const handleAddCoffee=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const quantity=form.quantity.value;
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const details=form.details.value;
        const photoUrl=form.photoUrl.value;
        const newCoffee={name,quantity,supplier,taste,details,photoUrl};
        console.log(newCoffee)

        //send data
        fetch('https://coffe-store-server-two-zeta.vercel.app/coffee',{
          method:'POST',
          headers:{
            'content-type':'application/json',
          },
          body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.insertedId){
            Swal.fire({
              title: 'Success',
              text: 'User Added Successfully',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
            form.reset()
          }
        })

    }
    return (
        <div className="bg-[#F4F3F0] mx-auto p-3 md:p-24">
            <h3 className="text-3xl font-extrabold text-center">Add Coffee</h3>
            <form onSubmit={handleAddCoffee} action="">
                {/**form row-1 */}
        <div className='flex gap-8 mb-5'>
        <div className="md:w-1/2">
          <p>Coffee Name</p>
          <input className="input input-bordered w-full" type="text" placeholder="Coffee Name" name="name"/>
        </div>
        <div className="md:w-1/2">
          <p>Available Quantity</p>
          <input className="input input-bordered  w-full" placeholder="Available Quantity" type="text" name="quantity"/>
        </div>
        </div>
                {/**form row-2 */}
        <div className='flex gap-8 mb-5'>
        <div className="md:w-1/2">
          <p>Supplier</p>
          <input className="input input-bordered w-full" type="text" placeholder="Supplier" name="supplier"/>
        </div>
        <div className="md:w-1/2">
            <p>Taste</p>
          <input className="input input-bordered  w-full" placeholder="Taste" type="text" name="taste"/>
        </div>
        </div>
                {/**form row-3 */}
        <div className='flex gap-8 mb-5'>
        <div className="md:w-1/2">
          <p>Category</p>
          <input className="input input-bordered w-full" type="text" placeholder="Category" name="category"/>
        </div>
        <div className="md:w-1/2">
          <p>Details</p>
          <input className="input input-bordered  w-full" placeholder="Details" type="text" name="details"/>
        </div>
        </div>
        {/**form row-4 */}
        <div className='mb-5'>
        <div className="w-full">
          <p>Photo Url</p>
          <input className="input input-bordered w-full" type="text" placeholder="Photo Url" name="photoUrl"/>
        </div>
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-block" />
      </form>
            
        </div>
    );
};

export default AddCoffee;