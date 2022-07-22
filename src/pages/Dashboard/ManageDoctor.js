import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";

const ManageDoctor = () => {
  const [deleteModal, setDeleteModal] = useState(null);
  const {isLoading,error,data: doctors, refetch} = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
      method: 'GET',
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('accessToken')
      }
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specificity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <div class="avatar">
                    <div class="w-16 rounded">
                      <img
                        src={doctor.photo}
                        alt="Tailwind-CSS-Avatar-component"
                      />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.specificity}</td>
                <td>
                  <label onClick={() => setDeleteModal(doctor)} for="delete-confirm-modal" class="btn btn-error text-white btn-xs">
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteModal && <DeleteConfirmModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} refetch={refetch}></DeleteConfirmModal>}
    </div>
  );
};

export default ManageDoctor;
