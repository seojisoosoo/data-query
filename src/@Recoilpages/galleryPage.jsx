import React, { useEffect, useState } from "react";
import MainHeader from "../@Recoilcomponents/mainHeader";
import GalleryList from "../@Recoilcomponents/galleryList";

//환경변수 추가
export default function galleryPage() {
  return (
    <>
      <MainHeader />
      {/* 에러바운더리와 suspense를 적용해주세요 */}
      <GalleryList />
    </>
  );
}
