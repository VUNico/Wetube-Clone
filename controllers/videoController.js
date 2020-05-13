import { videos } from "../db";
import routes from "../routes";

export const home = (req, res) => res.render("home", { title: "Home", videos });

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { title: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { title: "Upload" });
export const postUpload = (req, res) => res.redirect(routes.home);

export const videoDetail = (req, res) =>
  res.render("videoDetail", { title: "Video Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { title: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { title: "Delete Video" });
