import React from 'react';
import Swal from 'sweetalert2'

const AddCoffe = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const allDetails = { name, chef, supplier, taste, category, details, photo };
        console.log(allDetails);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className='w-2/3 m-auto '>
            <h2 className='text-3xl mb-4'>Update Existing Coffee Details</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus velit, similique accusantium temporibus nemo culpa expedita praesentium ea aut. Optio voluptatum maxime, quo autem animi sunt eos recusandae laborum quidem. </p>

            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-4'>
                    <div className="form-control w-full max-w-xl gap-4">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Americano Coffee" className="input input-bordered w-full max-w-xl" />
                    </div>
                    <div className="form-control w-full max-w-xl gap-4">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <input type="text" name='chef' placeholder="Mr. Matin Paul" className="input input-bordered w-full max-w-xl" />
                    </div>
                    <div className="form-control w-full max-w-xl gap-4">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" name='supplier' placeholder="Cappu Authorizer" className="input input-bordered w-full max-w-xl" />
                    </div>
                    <div className="form-control w-full max-w-xl gap-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" name='taste' placeholder="Sweet and hot" className="input input-bordered w-full max-w-xl" />
                    </div>
                    <div className="form-control w-full max-w-xl gap-4">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name='category' placeholder="Americano" className="input input-bordered w-full max-w-xl" />
                    </div>
                    <div className="form-control w-full max-w-xl gap-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name='details' placeholder="Espresso with hot water" className="input input-bordered w-full max-w-xl" />
                    </div>
                </div>
                <div className="form-control w-full  gap-4">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" name='photo' placeholder="https://i.ibb.co/PGqMPr9/11.png" className="input input-bordered w-full" />
                </div>
                <input className="btn btn-wide w-full mt-4" type="submit" value="Update coffee details" />
            </form>
        </div>
    );
};

export default AddCoffe;