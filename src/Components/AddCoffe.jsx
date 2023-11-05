import React from 'react';

const AddCoffe = () => {
    return (
        <div className='w-2/3 m-auto '>
            <h2 className='text-3xl mb-4'>Update Existing Coffee Details</h2>
            <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <div className='grid grid-cols-2 gap-4'>
                <div className="form-control w-full max-w-xl gap-4">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Americano Coffee" className="input input-bordered w-full max-w-xl" />
                </div>
                <div className="form-control w-full max-w-xl gap-4">
                    <label className="label">
                        <span className="label-text">Chef</span>
                    </label>
                    <input type="text" placeholder="Mr. Matin Paul" className="input input-bordered w-full max-w-xl" />
                </div>
                <div className="form-control w-full max-w-xl gap-4">
                    <label className="label">
                        <span className="label-text">Supplier</span>
                    </label>
                    <input type="text" placeholder="Cappu Authorizer" className="input input-bordered w-full max-w-xl" />
                </div>
                <div className="form-control w-full max-w-xl gap-4">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <input type="text" placeholder="Sweet and hot" className="input input-bordered w-full max-w-xl" />
                </div>
            </div>

        </div>
    );
};

export default AddCoffe;