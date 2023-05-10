import React from "react";
import { getGalleryInfo } from "../api/galleryInfo";
import Gallery from "./gallery";
import { useState, useEffect } from "react";
import { styled } from "styled-components";

import { useRecoilValue, useRecoilState } from "recoil";
import { galleryState } from "../Recoil/gallery/atoms";
import { galleryAllSelector } from "../Recoil/gallery/selector";
import {
  galleryHalfSelector,
  JungSeobSelector,
  oilPaintingSelector,
  gallerySelector,
  atomSelector,
} from "../Recoil/gallery/selector";

export default function GalleryList() {
  // const [gallerys, setGallerys] = useState([]);

  // async function fetchGalleryInfo() {
  //   const response = await getGalleryInfo();
  //   setGallerys(response);
  // }

  // const gallerys = useRecoilValue(galleryAtom);
  const [gallerys, setGallerys] = useRecoilState(galleryState);
  console.log(galleryState);
  // const a = useRecoilValue(atomSelector);
  // const gallerys = useRecoilValue(oilPaintingSelector("유채"));

  // const gallerys = useRecoilValue(galleryAllSelector);
  //  const [gallerys, setGallerys] = useRecoilState(oilPaintingSelector("유채"));

  const handleSelect = (e) => {
    e.preventDefault;
    console.log(e.target.value);

    switch (e.target.value) {
      case "all":
        setGallerys(galleryState);
        break;
      case "JungSeob":
        setGallerys(JungSeobSelector("이중섭"));
        break;
      case "oilPainting":
        setGallerys(oilPaintingSelector("유채"));

        break;
    }
  };

  useEffect(() => {
    console.log(gallerys);
  }, [gallerys]);

  return (
    <GalleryListWrapper>
      <BtnWrapper>
        <BtnSelect value="all" onClick={handleSelect}>
          전체
        </BtnSelect>
        <BtnSelect value="JungSeob" onClick={handleSelect}>
          이중섭 화가 작품
        </BtnSelect>
        <BtnSelect value="oilPainting" onClick={handleSelect}>
          유화
        </BtnSelect>
      </BtnWrapper>
      <GalleryWrapper>
        {gallerys.map(({ no, author, material, name, coverThumb }) => (
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
