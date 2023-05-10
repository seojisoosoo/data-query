import React from "react";
import { getGalleryInfo } from "../api/galleryInfo";
import Gallery from "./gallery";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useQuery } from "react-query";
import LoadingPage from "../@ReactQuerypages/LoadingPage";
import ErrorPage from "../@ReactQuerypages/ErrorPage";

export default function GalleryList() {
  //react-query
  const {
    data: gallerys,
    isLoading,
    isError,
    error,
  } = useQuery("gallerys", getGalleryInfo, {
    refetchOnWindowFocus: false,
    retry: 0,
    staleTime: 1000,
    cacheTime: 0,
    suspense: true,
    useErrorBoundary: true, //true로 추가!
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (e) => {
      console.log(e);
    },
  });

  console.log(gallerys);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    console.log(error);
    return <ErrorPage />;
  }

  const handleSelect = (e) => {
    // handleSelect 함수를 작성해주세요
    const categ = e.target.value;
    switch (categ) {
      case "이중섭":
        gallerys.filter((gallery) => gallery.author === categ);
        break;
      case "유채":
        gallerys.filter((gallery) => categ in gallery.material);
        break;
      default:
        break;
    }
  };

  return (
    <GalleryListWrapper>
      <BtnWrapper>
        <BtnSelect value="전체" onClick={handleSelect}>
          전체
        </BtnSelect>
        <BtnSelect value="이중섭" onClick={handleSelect}>
          이중섭 화가 작품
        </BtnSelect>
        <BtnSelect value="유채" onClick={handleSelect}>
          유화
        </BtnSelect>
      </BtnWrapper>
      <GalleryWrapper>
        {gallerys?.map(({ no, author, material, name, coverThumb }) => (
          <Gallery key={no} no={no} author={author} material={material} name={name} coverThumb={coverThumb} />
        ))}
      </GalleryWrapper>
    </GalleryListWrapper>
  );
}

export const GalleryListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #bf2420;
  width: 100%;

  padding-bottom: 2rem;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  gap: 2rem;
  margin-top: 2rem;
`;

const BtnSelect = styled.button`
  width: 10rem;
  height: 4rem;
  background-color: navy;
  color: white;

  font: inherit;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 7px;
  border: 1px solid #ffd700;
`;

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
