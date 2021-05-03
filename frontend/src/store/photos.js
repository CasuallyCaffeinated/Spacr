import { csrfFetch } from "./csrf";

//* CREATE
const ADD_USER_PHOTO = "photos/addUserPhoto";
//* READ:
const GET_USER_PHOTOS = "photos/getUserPhotos"
//* UPDATE:
const UPDATE_USER_PHOTO = "photos/updateUserPhoto"
//* DELETE:
const DELETE_USER_PHOTO = "photos/deleteUserPhoto"

////////////* ACTION CREATORS */////////////////

const addPhoto = (photo) => ({
    type: ADD_USER_PHOTO,
    photoEntry: photo
})

const setUserPhotos = (photos) => ({
    type: GET_USER_PHOTOS,
    photosPayload: photos
})

const updateImg = photo => ({
    type: UPDATE_USER_PHOTO,
    photoPayload: photo
})

const removeImg = photoId => ({
    type: DELETE_USER_PHOTO,
    photoErased: photoId
})


////////////* THUNK ACTION CREATOR *////////////////////
//! ASK ABOUT THIS:
// body: JSON.stringify({
//     title,
//     category,
//     description,
//     photoUrl,
//     authorCredited,
//     userId
// }),

//? CREATE
export const addUserPhoto = (photoEntry) => async dispatch => {
        const res = await csrfFetch(`/api/users/photo/`, {
            method: "POST",
            body: JSON.stringify(photoEntry),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (res.ok) {
            const photoEntry = await res.json()
            dispatch(addPhoto(photoEntry))
        }
}

//? READ
export const getUserPhotos = (id) => async dispatch => {
        const res = await csrfFetch(`/api/users/photos/${id}`)
        if (res.ok) {
            const photos = await res.json()
            dispatch(setUserPhotos(photos))
        }
}

//? UPDATE
export const updateUserPhoto = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/users/photo/${payload.id}`, {
        method: `PUT`,
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if(response.ok) {
        const updatedPhoto = await response.json();
        dispatch(updateImg(updatedPhoto))
    }
}

//? DELETE
export const deleteUserPhoto = (photo) => async dispatch => {
    const response = await csrfFetch(`/api/users/photo/${photo.id}`, {
        method: "DELETE"
    })
    if(response.ok) {
        dispatch(removeImg(photo.id))
    }
}

////////////////////////////* REDUCER *///////////////////////////
const photoReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_USER_PHOTOS: {
            const newState = {}
            action.photosPayload.forEach(photo => {
                newState[photo.id] = photo
            })
            return newState
        }
            case UPDATE_USER_PHOTO: {
                const newState = {
                    ...state,
                    [action.photoPayload.id]: action.photoPayload
                }
                // console.log(newState);
                return newState;
            }
            case DELETE_USER_PHOTO: {
                const newState = { ...state };
                delete newState[action.photoErased]
                return newState;
            }
            case ADD_USER_PHOTO: {
                const newState = { ...state };
                newState[action.photoEntry.id] = action.photoEntry
                return newState;
            }
        default:
            return state
    }
}

export default photoReducer;
