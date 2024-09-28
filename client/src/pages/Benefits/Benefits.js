import React from 'react'
import "./Benefits.css"
import benefitsData from './BenefitsData'
import Footer from '../../components/Footer/Footer'

const Benefits = () => {

    const getModalId = (index) => {
        return `exampleModal-${index}`;
    }
    return (
            <div className='benefits'>
                <div className="benefits-container">
                    <div className="row row-cols-3 my-2 mx-2">
                        {benefitsData.map((element, index) => {
                            const modalId = getModalId(index)
                            return (
                                <div className="col" key={index} >
                                    {/* Associate the unique modal ID with the button */}
                                    <div className="benefitsCard card text-white mb-5 rounded" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>
                                        <div className="card-body mainCard" >
                                            <h3 className="card-title text-dark links align-middle" style={{ textAlign: 'center' }} >{element.title}</h3>
                                            {/* ---------------------------------------------------------------- */}
                                            {/* Use the unique modal ID for each modal */}
                                            <div className="modal fade " id={modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                    <div className="modal-content bg-dark">
                                                        <div className="modal-header">
                                                            <h3 className="modal-title" id="exampleModalLabel">{element.title}</h3>
                                                            {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ backgroundColor: "wheat" }}></button> */}
                                                        </div>
                                                        <div className="modal-body" dangerouslySetInnerHTML={{ __html: element.links }} />
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* ----------------------------------------------------------------------- */}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <Footer />
            </div>
    )
}

export default Benefits