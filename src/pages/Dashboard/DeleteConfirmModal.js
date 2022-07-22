import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({deleteModal, setDeleteModal, refetch}) => {

    const deleteModalFun = () => {
        fetch(`http://localhost:5000/doctor/${deleteModal._id}`, {
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
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-red-500 text-lg">
            Are you sure to delete {deleteModal.name} Doctor? 
          </h3>
          <div class="modal-action">
            <label for="delete-confirm-modal" class="btn">
              Cancel
            </label>
            <label onClick={deleteModalFun} for="delete-confirm-modal" class="btn">
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
