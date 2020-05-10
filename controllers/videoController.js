export const home = (req, res) => res.render("home", { title: "Home" });
export const search = (req, res) => res.render("search", { title: "Search" });
export const videoHome = (req, res) =>
  res.render("videos", { title: "Videos" });
export const upload = (req, res) => res.render("upload", { title: "Upload" });
export const videoDetail = (req, res) =>
  res.render("videoDetail", { title: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { title: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { title: "Delete Video" });
