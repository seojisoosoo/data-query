import React from "react";
import { getGalleryInfo } from "../api/galleryInfo";
import Gallery from "./gallery";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useQuery } from "react-query";

export default function GalleryList() {
  //const [gallerys, setGallerys] = useState([]);

  const {
    isLoading,
    isError,
    data: gallerys,
    error,
  } = useQuery("gallerys", getGalleryInfo, {
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (e) => {
      console.log(e.message);
    },
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <GalleryListWrapper>
      {gallerys?.map(({ no, author, material, name, coverThumb }) => (
        <Gallery key={no} no={no} author={author} material={material} name={name} coverThumb={coverThumb} />
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
