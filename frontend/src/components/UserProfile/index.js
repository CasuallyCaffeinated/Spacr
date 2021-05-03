import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import { getUserPhotos } from "../../store/photos"

import Photo from "./Photo";
import "./photo.css"

import ProfileHeader from "./profileHeader";

import Footer from "../Footer";

function UserProfile() {
    const dispatch = useDispatch()
    const photos = useSelector(state => state.photo)


    // console.log("THIS IS THE USER:", user);
    const { id } = useParams()

    useEffect(() => {

        dispatch(getUserPhotos(id))

    },[dispatch, id])

    return (
        <>
        <ProfileHeader />
        <div id="master-div">
                        {
                        Object.values(photos).map(image => <Photo key={image.id} image={image} />)
                    }
        </div>
        <Footer />
        </>
    )
}

export default UserProfile;
