import React from "react";
import { getGalleryInfo } from "../api/galleryInfo";

export default function GalleryList() {
  const [gallerys, setGallerys] = useState([]);

  async function fetchGalleryInfo() {
    const response = await getGalleryInfo();
    setGallerys(response);
  }

  useEffect(() => {
    fetchGalleryInfo();
  }, []);
  console.log(gallerys);

  return <div>gallerys</div>;
}
