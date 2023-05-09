import React, { Suspense, useEffect, useState } from "react";
import MainHeader from "../@components/mainHeader";
import GalleryList from "../@components/galleryList";
import Loading from "../@components/loading";
import Error from "../@components/error";
import { ErrorBoundary } from "react-error-boundary";

export default function galleryPage() {
  return (
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<Loading />}>
        <MainHeader />
        <GalleryList />
      </Suspense>
    </ErrorBoundary>
  );
}
