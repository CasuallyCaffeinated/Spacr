import "./photo.css"

import EditBtn from "./EditBtn";

function Photo({image}) {
// console.log(image);
    return (
        <>
                <div className="image-container">
                        <div className="heading-container">
                            <h3 className="heading title">{image.title}</h3>
                            <EditBtn props={image.id} />
                        </div>
                            <img
                            className="images-space"
                            src={image.photoUrl}
                            alt="Spaaaaaaaace"
                            />
                            <h3 className="heading author">{image.authorCredited}</h3>
                            {image.description.length === 0 ?
                            <div id="img-desc">
                            Edit this photograph to add a description.
                            <p>{image.description}</p>
                            </div>
                            :
                            <div id="img-desc">
                            Description:
                            <p>{image.description}</p>
                        </div>}
                </div>
        </>
    )
}
export default Photo;
