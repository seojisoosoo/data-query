import React from "react";
import { getGalleryInfo } from "../api/galleryInfo";
import Gallery from "./gallery";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useQuery } from "react-query";
import Loading from "./loading";
import Error from "./error";

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
    suspense: true,
    useErrorBoundary: true,
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (e) => {
      console.log(e.message);
    },
  });

  // if (isLoading) {
  //   return <Loading />;
  // }

  // if (isError) {
  //   return (
  //     <>
  //       <p>message={error.message}</p>
  //       <Error />
  //     </>
  //   );
  // }

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
