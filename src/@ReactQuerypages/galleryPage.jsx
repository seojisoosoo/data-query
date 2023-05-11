import React, { Suspense, useEffect, useState } from "react";
import MainHeader from "../@ReactQuerycomponents/mainHeader";
import GalleryList from "../@ReactQuerycomponents/galleryList";
import LoadingPage from "./LoadingPage";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./ErrorPage";

//환경변수 추가
export default function galleryPage() {
  return (
    <>
      <ErrorBoundary fallback={<ErrorPage />}>
        <Suspense fallback={<LoadingPage />}>
          <MainHeader />
          <GalleryList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
