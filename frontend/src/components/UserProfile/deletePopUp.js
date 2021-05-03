import "./photo.css";

import { useDispatch } from "react-redux";

import { deleteUserPhoto } from "../../store/photos";


function DeletePopUp({props}) {

    const { setDeleteModal, id } = props;

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const removedImg = { id };

        dispatch(deleteUserPhoto(removedImg))
        setDeleteModal(false);
    }

    return (
        <form id="delete-modal" onSubmit={handleSubmit}>
                <div id="modal-body">
                            <label>
                                Are you sure you want to delete this photo?
                                <div id="delete-btns">
                                <button id="delete-btn">Confirm Delete</button>
                                <button onClick={() => setDeleteModal(false)}>I've changed my mind</button>
                                </div>
                            </label>
                </div>
        </form>
    )
}

export default DeletePopUp;
