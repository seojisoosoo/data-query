import { BrowserRouter, Route, Routes } from "react-router-dom";
import GalleryPage from "./@pages/galleryPage";
import DetailPage from "./@pages/detailPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GalleryPage />}>
          <Route path=":detailId" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
