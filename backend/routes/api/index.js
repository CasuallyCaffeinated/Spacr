const router = require('express').Router();
const sessionRouter = require('./session.js')
const userRouter = require("./users.js")

router.use("/session", sessionRouter);

router.use('/users', userRouter);

router.post('/test', (req, res) => {
    res.json({requestBody: req.body})
})

module.exports = router;

































//* THIS WAS FOR TESTING PURPOSES, NO LONGER BEING USED.*//
// //TODO: Test User Auth Middleware:
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require("../../utils/auth.js")
// const { restoreUser } = require('../../utils/auth.js');
// const { User } = require('../../db/models');

// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: `Demo-lition`
//         },
//     })
//     setTokenCookie(res, user);
//     return res.json({ user });
// }))

// router.get(
//     '/restore-user',
//     restoreUser,
//     (req, res) => {
//       return res.json(req.user);
//     }
//   );
