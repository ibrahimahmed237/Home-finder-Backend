const router = require("express").Router();

const {
    createResidence,
    stepOneUpdate,
    stepTwoUpdate,
    stepThreeUpdate,
    stepFourUpdate,
    uploadResidenceImages,
    setLocation,
    updateResidence,

    deleteResidenceImage,
    getResidenceImages,
    getLocation,

    getOneResidence,
    getApproved,
    getPending,
    getSold,
    getAllApproved,
    getNearestResidences,

    deleteOneResidence,
    filtration,
    recommend,
    predictPrice,

    getSalePrice,
    updateSalePrice,

    acceptBooking,
    getPurchasedResidences,

    book,
    getBookedBy,
    cancelBooking,

    getNewResidences
} = require("../controllers/residence.controller.js");
const authMiddleware = require("../../authentication/middlewares/auth.middleware.js");
const { uploadMultiple } = require("../../../Utils/multer.js");

router.use(authMiddleware);

router.post("/create", createResidence);
router.post("/complete/1st/:residenceId", stepOneUpdate);
router.post("/complete/2nd/:residenceId", stepTwoUpdate);
router.post("/complete/3rd/:residenceId", stepThreeUpdate);
router.post("/complete/4th/:residenceId", stepFourUpdate);
router.post("/location/:residenceId", setLocation);
router.post("/upload/:residenceId", uploadMultiple, uploadResidenceImages);

router.get("/get/:residenceId", getOneResidence);
router.get("/new-residences", getNewResidences);
router.get("/pending?", getPending);
router.get("/approved?", getApproved);
router.get("/sold?", getSold);
router.get("/nearest?", getNearestResidences);
router.get("/all?", getAllApproved);
router.get("/images/:residenceId", getResidenceImages);
router.get("/location/:residenceId", getLocation);
router.get("/price/:residenceId", getSalePrice);
router.get("/all/purchase?", getPurchasedResidences);
router.get("/filter?", filtration);



router.patch("/update/:residenceId", updateResidence);
router.patch("/update/1st/:residenceId", stepOneUpdate);
router.patch("/update/2nd/:residenceId", stepTwoUpdate);
router.patch("/update/3rd/:residenceId", stepThreeUpdate);
router.patch("/update/4th/:residenceId", stepFourUpdate);
router.patch("/price/:residenceId", updateSalePrice);

router.delete("/delete/:residenceId", deleteOneResidence);
router.delete("/image/:imageId", deleteResidenceImage);

// Prediction and Recommendation
router.get('/predict/:residenceId', predictPrice);
router.get('/recommend/:residenceId', recommend);

router.get("/accept-book/:residenceId/:userId", acceptBooking);
router.get("/cancel-book/:residenceId/:userId", cancelBooking);
router.get("/make-book/:residenceId",  book);
router.get("/users-booked/:residenceId", getBookedBy);

module.exports = router;
