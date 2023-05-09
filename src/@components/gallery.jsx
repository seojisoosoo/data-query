import React from "react";
import { getGalleryInfo } from "../api/galleryInfo";

export default function gallery(props) {
  const { no, author, material, name, coverThumb } = props;

  return (
    <>
      <img src={coverThumb} alt={name} />
      <strong>작품명 | </strong>
      {name}

      <strong>작가 | </strong>
      {author}

      <strong>재료 | </strong>
      {material}
    </>
  );
}
