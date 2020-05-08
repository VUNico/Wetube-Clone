import express from "express";
import routes from "../routes";
import {
  deleteVideo,
  editVideo,
  videoDetail,
  upload,
  videoHome,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/", videoHome);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.delete, deleteVideo);

export default videoRouter;
