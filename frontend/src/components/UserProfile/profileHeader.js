import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";

import { useParams } from "react-router-dom";

import { addUserPhoto } from "../../store/photos";



//TODO: GLOBAL CATEGORIES ARRAY:
const CATEGORIES = [
    "Stars",
    "White Dwarfs",
    "Nursery",
    "The Sun",
    "Galaxies",
    "The Milky Way",
    "Local Groups",
    "Nebulae",
    "Quasar",
    "Dark Matter",
    "Black Holes",
    "Other"
]

function ProfileHeader() {
    const user = useSelector(state => state.session.user)
    // const photo = useSelector(state => state.photo)
    // const dispatch = useDispatch();

    // useEffect(() => {
        //     console.log(photo);
        // }, [])

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    }


    return (
        <div>
            <div className="ph-container">
                <div className="ph-welcome-msg">
                <h1>Welcome to your profile {user.firstName}!</h1>
                </div>
                <div className="add-pic-div">
                    <ul>
                        <li className="add-pic-modal-text">Add a photo</li>
                        <li>
                            <button
                            className="show-add-modal"
                            onClick={handleClick}
                            ><i class="fas fa-plus-square"></i></button>
                            {open && <AddImgModal props={handleClick}/>}
                        </li>
                    </ul>
                </div>
            </div>
                <div className="border-div">
                    <hr />
                </div>
        </div>
    )
}

function AddImgModal({props}) {

    const handleClick = props;

    const dispatch = useDispatch();

    const { id } = useParams();

    // const [addImgModal, setAddImgModal] = useState(false);

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [photoUrl, setPhotoUrl] = useState('')
    const [authorCredited, setAuthorCredited] = useState('')
    const [errors, setErrors] = useState([]);


    // const handleClick = () => {
    //         setOpen(false)
    //     };

    //? Handle submit custom event handler:
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setErrors([]);
    //     return dispatch(sessionActionCreators.login({ credential, password }))
    //             .catch(async res => {
    //                 const data = await res.json();
    //                 if (data && data.errors) setErrors(data.errors)
    //             })
    //         }

    const handleSubmit = (e) => {
        e.preventDefault();


        const formData = {
            title,
            category,
            description,
            photoUrl,
            authorCredited,
            userId: id
        }

        setErrors([]);
        return dispatch(addUserPhoto(formData))
                .catch(async res => {
                        const data = await res.json();
                                if (data && data.errors) setErrors(data.errors)
                })

    }

    return (
        <div>
            <div className="add-img-modal">
            {
                    errors.length > 0 ?
                        <div className="add-img-error-div">
                        <ul>
                            {errors.map((error, index) => {
                                return<li key={index}>— {error}</li>
                            })}
                        </ul>
                     </div>

                     :

                     null
                }
                <form id="add-img-form" onSubmit={handleSubmit}>
                        <div className="main-add-img-modal-body">
                            <label className="add-img-modal-labels aim-l-or-btn">
                                Title*
                                <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                />
                            </label>
                            <label className="add-img-modal-labels select-label">
                                Category*
                                <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                >
                                {CATEGORIES.map(category => (
                                    <option
                                    key={category}
                                    value={category}
                                    >
                                        {category}
                                    </option>
                                ))}
                                </select>
                            </label>
                            <label className="add-img-modal-labels">
                                    Description
                                    <textarea
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                     />
                            </label>
                            <label className="add-img-modal-labels">
                                Image URL*
                                <input
                                type="text"
                                value={photoUrl}
                                onChange={(e) => setPhotoUrl(e.target.value)}
                                />
                            </label>
                            <label className="add-img-modal-labels">
                                Creator(s) Credited*
                                <input
                                type="text"
                                value={authorCredited}
                                onChange={(e) => setAuthorCredited(e.target.value)}
                                />
                            </label>
                        </div>
                        <button className="aim-l-or-btn">Save Photograph</button>
                        <button className="aim-l-or-btn" onClick={handleClick}>Cancel</button>
                </form>
            </div>
        </div>
    )
}


export default ProfileHeader;
