import { useState, useEffect } from "react";
import frame from "../assets/frame.svg";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { getGalleryInfo } from "../api/galleryInfo";
import { useQuery } from "react-query";

export default function GalleryDetail() {
  const { detailId } = useParams();
  // const [gallery, setGallery] = useState([]);

  const {
    isLoading,
    isError,
    data: gallery,
    error,
  } = useQuery("gallery", getGalleryInfo, {
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

  const { coverThumb, name, author, material } = gallery[detailId - 1];

  return (
    <GalleryWrapper>
      <ImgWrapper>
        <Frame src={frame} alt="프레임" />
        <Img src={coverThumb} alt={name} />
      </ImgWrapper>
      <InfoBox>
        <p>작품명 | {name}</p>
        <p>작가 | {author}</p>
        <p>재료 | {material}</p>
      </InfoBox>
    </GalleryWrapper>
  );
}

const Frame = styled.img`
  width: 30rem;
  height: 50rem;
`;

const Img = styled.img`
  position: absolute;
  width: 20rem;
  height: 24rem;
  margin: 13rem 0 0 -25rem;
`;

const GalleryWrapper = styled.article`
  width: 35rem;
  height: 45rem;
  justify-content: center;
  align-items: center;
`;

const ImgWrapper = styled.div`
  width: 30rem;
  height: 30rem;

  background-color: white;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 20rem;
  height: 10rem;
  background-color: whitesmoke;
  padding: 3rem;
  margin: 13rem 0 0 2rem;

  ${({ theme }) => theme.fonts.text}
`;
