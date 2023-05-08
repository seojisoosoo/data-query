import React, { useEffect, useState } from "react";
import MainHeader from "../@components/mainHeader";
import { getGalleryInfo } from "../api/galleryInfo";
import axios from "axios";

export default function galleryPage() {
  const [gallerys, setGallerys] = useState([]);

  async function fetchGalleryInfo() {
    const response = await getGalleryInfo();
    setGallerys(response);
  }

  useEffect(() => {
    fetchGalleryInfo();
  }, []);

  return <MainHeader />;
}
