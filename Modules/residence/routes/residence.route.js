const router = require("express").Router();
const {
    createResidence,
    completeResidence,
    stepTwoComplete,
    stepThreeComplete,
    stepFourComplete,
    
    setLocation,
    residenceImages,
    
    getOneResidence,
    getAllResidences,
    getNearestResidences,
    
    updateResidence,
    deleteOneResidence,
    filtration,
} = require("../controllers/residence.controller.js");
const authMiddleware = require("../../authentication/middlewares/auth.middleware.js");
const {uploadMultiple} = require("../../../Utils/multer.js");

router.use(authMiddleware);

router.post("/create", createResidence);
router.post("/complete/1st/:residenceId" , completeResidence);
router.post("/complete/2nd/:residenceId" , stepTwoComplete);
router.post("/complete/3rd/:residenceId" , stepThreeComplete);
router.post("/complete/4th/:residenceId" , stepFourComplete);

router.post("/location/:residenceId" , setLocation);
router.post("/upload/:residenceId", uploadMultiple , residenceImages);

router.get("/get/:residenceId", getOneResidence);
router.get("/nearest",          getNearestResidences);
router.get("/all?",             getAllResidences);

router.patch("/update/:residenceId", updateResidence);
router.delete("/delete/:residenceId", deleteOneResidence);

router.get("/filter", filtration);

module.exports = router;