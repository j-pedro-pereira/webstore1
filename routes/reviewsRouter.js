const reviewsRouter = require("../controllers/reviewsController");

const router = require("express").Router();

router.post("/addReviews", reviewsRouter.addNewReview);

router.get("/allReviews", reviewsRouter.getAllReviews);

router.get("/:id", reviewsRouter.getSingleReview);

router.put("/:id", reviewsRouter.updateReview);

router.delete("/:id", reviewsRouter.removeReview);

module.exports = router;
