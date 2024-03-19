import { Button } from "react-bootstrap"
import { FaPen, FaTrash } from "react-icons/fa"
import { NavLink } from "react-router-dom"

import Swal from 'sweetalert2'
import "sweetalert2/dist/sweetalert2.min.css"

const TableActionButtons = ({ contentId, deleteAction, editurl }) => {
  const deleteItem = () => {
    //delete API
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        deleteAction(contentId);
      }
    })
  }
  return (
    <>
      <NavLink to={editurl} variant="info" style={{ borderRadius: "50%" }} className="me-2 btn btn-sm btn-info"><FaPen /></NavLink>
      <Button onClick={deleteItem} variant="danger" style={{ borderRadius: "50%" }}><FaTrash /></Button>
    </>
  )
}
export default TableActionButtons;