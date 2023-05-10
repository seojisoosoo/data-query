import React from "react";
import MainHeader from "../@ReactQuerycomponents/mainHeader";
import GalleryDetail from "../@ReactQuerycomponents/galleryDetail";

export default function detailPage() {
  return (
    <>
      <MainHeader />
      {/* 에러바운더리와 suspense를 적용해주세요 */}
      <GalleryDetail />
    </>
  );
}
