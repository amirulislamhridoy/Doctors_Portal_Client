import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";

const ManageDoctor = () => {
  const [deleteModal, setDeleteModal] = useState(null);
  const {isLoading,error,data: doctors, refetch} = useQuery("doctors", () =>
    fetch("https://doctors-portal-server-2nd-time.herokuapp.com/doctor", {
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
      <div className="overflow-x-auto">
        <table className="table w-full">
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
                  <div className="avatar">
                    <div className="w-16 rounded">
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
                  <label onClick={() => setDeleteModal(doctor)} htmlFor="delete-confirm-modal" className="btn btn-error text-white btn-xs">
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
