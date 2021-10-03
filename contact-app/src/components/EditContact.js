import React from 'react'
import { Link } from 'react-router-dom';

const EditContact = () => {
    return (
        <div className='container'>
            <div className='row'>
                <h1 className='display-3 text-center my-5'>
                    Edit Contact
                </h1>

                <div className="col-md-6 shadow mx-auto p-5">
                    <form>
                        <div className="form-group py-2">
                            <input type="text" placeholder='Name' className='form-control' />
                        </div>
                        <div className="form-group py-2">
                            <input type="email" placeholder='Email' className='form-control' />
                        </div>
                        <div className="form-group py-2">
                            <input type="number" placeholder='Phone Number' className='form-control' />
                        </div>
                        <div className="form-group py-2">
                            <input type="submit" value='Update Contact' className='btn btn-dark' />
                            <Link to='/' className='btn btn-danger m-3'>
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>  
        </div>
    )
}

export default EditContact
