import React, { Suspense, useEffect, useState } from "react";
import MainHeader from "../@components/mainHeader";
import GalleryDetail from "../@components/galleryDetail";
import { ErrorBoundary } from "react-error-boundary";
import { RecoilRoot } from "recoil";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";
export default function detailPage() {
  return (
    <>
      {/* <MainHeader /> */}
      <ErrorBoundary fallback={<ErrorPage />}>
        <Suspense fallback={<LoadingPage />}>
          <GalleryDetail />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
