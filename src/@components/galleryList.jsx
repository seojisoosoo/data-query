import React from "react";
import { getGalleryInfo } from "../api/galleryInfo";
import Gallery from "./gallery";
import { useState, useEffect } from "react";
import { styled } from "styled-components";

export default function GalleryList() {
  const [gallerys, setGallerys] = useState([]);

  async function fetchGalleryInfo() {
    const response = await getGalleryInfo();
    setGallerys(response);
  }

  useEffect(() => {
    fetchGalleryInfo();
  }, []);

  return (
    <GalleryListWrapper>
      {gallerys.map(({ no, author, material, name, coverThumb }) => (
        <Gallery no={no} author={author} material={material} name={name} coverThumb={coverThumb}></Gallery>
      ))}
    </GalleryListWrapper>
  );
}

const GalleryListWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 150rem;
`;
