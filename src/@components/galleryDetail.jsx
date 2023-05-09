import { useState, useEffect } from "react";
import frame from "../assets/frame.svg";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { getGalleryInfo } from "../api/galleryInfo";

export default function GalleryDetail() {
  const { detailId } = useParams();
  const [gallery, setGallery] = useState([]);

  async function fetchGalleryInfo() {
    const response = await getGalleryInfo();
    setGallery(response[detailId - 1]);
  }

  useEffect(() => {
    fetchGalleryInfo();
  }, []);

  return (
    <GalleryWrapper>
      <ImgWrapper>
        <Frame src={frame} alt="프레임" />
        <Img src={gallery.coverThumb} alt={gallery.name} />
      </ImgWrapper>
      <InfoBox>
        <p>작품명 | {gallery.name}</p>
        <p>작가 | {gallery.author}</p>
        <p>재료 | {gallery.material}</p>
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
