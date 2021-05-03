import "./photo.css"

import { useDispatch } from "react-redux"
import { useState } from "react"

import { updateUserPhoto } from "../../store/photos";

function ModalForm({props}) {

    const { setModal, id } = props;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    // const [fadeInDown2, setFadeInDown] = useState(true);


    const dispatch = useDispatch()


    const handleSubmit = (e) => {
            e.preventDefault()

        const data = { id };

        if(description) data.description = description;

        if(title) data.title = title;

        dispatch(updateUserPhoto(data));
        setModal(false);
    }

    return (
            <form id="modal-form" onSubmit={handleSubmit}>
            <div className="main-form-body">
            <div className="label"></div>
            <label>
                Title
                <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <label>
                Description
                <textarea
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
            </label>
            </div>
            <div className="modal-form-btns">
            <button>Save Changes</button>
            <button onClick={() => setModal(false)}>Cancel</button>
            </div>
        </form>


    )
}

export default ModalForm;
