import { BrowserRouter, Route, Routes } from "react-router-dom";
// import GalleryPage from "./@Recoilpages/galleryPage";
// import DetailPage from "./@Recoilpages/detailPage";
// import Home from "./@Recoilpages/Home";
import GalleryPage from "./@ReactQuerypages/galleryPage";
import DetailPage from "./@ReactQuerypages/detailPage";
import Home from "./@ReactQuerypages/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/art" element={<GalleryPage />} />
        <Route path="/:detailId" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
