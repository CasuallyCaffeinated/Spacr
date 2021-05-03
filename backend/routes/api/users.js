const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

//? The necessary middleware for getting the auth started
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Photo } = require("../../db/models");

const router = express.Router();

////////////////////////////////* EXPRESS VALIDATIONS *///////////////////////

//TODO: Validation Error handling for Signup:
//? Validate Sign Up:
const validateSignup = [
    check('firstName')
    .notEmpty()
    .withMessage(`Please provide a first name`),
    check('lastName')
    .notEmpty()
    .withMessage(`Please provide a last name`),
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
  ];

  //TODO: VALIDATION ERRORS FOR CREATING A PHOTO
  //? Validate photo entry:

//* The description can be empty and the user Id is generated automatically. Therefore, they aren't added in the validator.
  const validatePhotoEntry = [
    check('title')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage(`Please provide a title for your photo`),
    check(`category`)
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage(`Please provide a category for your photo`),
    check(`photoUrl`)
    .exists({ checkFalsy: true })
    .notEmpty()
    .isURL()
    .withMessage(`Please provide a URL path for your photo`),
    check('authorCredited')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage(`Please provide a title for your photo`),
    handleValidationErrors,
  ];

  ////////////////////////////////////* API ENDPOINTS *//////////////////////////////

//TODO: User Sign up API Route
//TODO: POST /api/users

//? Sign up:
router.post(
    '',
    validateSignup,
    asyncHandler(async (req, res) => {
        //? Destructure the JSON content received from the request body.
        const { firstName, lastName, email, password, username } = req.body;

        const user = await User.signup (
                {
                firstName,
                lastName,
                email,
                username,
                password
            }
        )

        await setTokenCookie(res, user);

        return res.json({ user });
    })
)


//////////////////////////////////////////* PHOTOS /////////////////////////////////////////

//? Route to create a new photo that will belong to a user:
router.post (
  "/photo",
  validatePhotoEntry,
  requireAuth,
  asyncHandler(async(req, res) => {

    const { title, category, description, photoUrl, authorCredited, userId } = req.body;

    const newImg = await Photo.create ({
      title,
      category,
      description,
      photoUrl,
      authorCredited,
      userId
    })

    const photoData = await Photo.findByPk(newImg.id)
    return res.json(photoData);
  })
)

//? Route to render all photos that belong to a user:
router.get (
  '/photos/:userId',
  requireAuth,
  asyncHandler(async(req, res) => {
    const { userId } = req.params

    const photos = await Photo.findAll({
      where: {
        userId
      },
      order: [["createdAt", "ASC"]]
    })
      res.json(photos)
  })
)

//? Route to update a photo on a user's profile
router.put (
  "/photo/:photoId",
  requireAuth,
  asyncHandler(async (req, res) => {
     const { photoId } = req.params

      const { title, description } = req.body

     const photo = await Photo.findByPk(photoId)
     await photo.update ({
       title,
       description
     })

     res.json(photo)
  })
)

//? Route for deleting a photo from a user's profile
router.delete (
  "/photo/:photoId",
    asyncHandler(async (req, res) => {

      const { photoId } = req.params

      const image = await Photo.findByPk(photoId);

      if(!image) {
        return res.status(401).send({
            message: `The photo could not be found!`
        })
      } else {
        await image.destroy()
        res.json({ message: "Deletion successful", id: photoId });
      }


    })
)

module.exports = router;
