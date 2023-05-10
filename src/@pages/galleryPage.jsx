import React, { Suspense, useEffect, useState } from "react";
import MainHeader from "../@components/mainHeader";
import GalleryList from "../@components/galleryList";
import { ErrorBoundary } from "react-error-boundary";
import { RecoilRoot } from "recoil";
import "./../config/recoil";

import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";
export default function galleryPage() {
  return (
    <>
      <MainHeader></MainHeader>
      <ErrorBoundary fallback={<ErrorPage></ErrorPage>}>
        <Suspense fallback={<LoadingPage></LoadingPage>}>
          <GalleryList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
