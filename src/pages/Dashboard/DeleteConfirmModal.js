import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({deleteModal, setDeleteModal, refetch}) => {

    const deleteModalFun = () => {
        fetch(`https://doctors-portal-server-2nd-time.herokuapp.com/doctor/${deleteModal._id}`, {
            method: 'DELETE',
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            toast('Delete is successful.')
            refetch()
            // setDeleteModal(null)
        })
    }
  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-red-500 text-lg">
            Are you sure to delete {deleteModal.name} Doctor? 
          </h3>
          <div className="modal-action">
            <label for="delete-confirm-modal" className="btn">
              Cancel
            </label>
            <label onClick={deleteModalFun} for="delete-confirm-modal" className="btn">
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
