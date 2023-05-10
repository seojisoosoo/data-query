import { selectorFamily, selector } from "recoil";
import { useGallery } from "./useGallery";
import { galleryState } from "./atoms";

export const galleryAllSelector = selector({
  key: "galleryAllSelector",
  get: async () => {
    try {
      const allGallery = await useGallery();
      console.log(allGallery);
      return allGallery;
    } catch (e) {
      console.error(e);
    }
  },
});

// export const galleryAllSelector = selector({
//   key: "galleryAllSelector",
//   get: ({ get }) => {
//     const gallery = get(galleryState);
//     return gallery;
//   },
//   set: ({ set }, newValue) => {
//     set(galleryState, newValue);
//   },
// });

// export const galleryAllSelector = selector({
//   key: "galleryAllSelector",
//   get: ({ get }) => {
//     const gallery = get(galleryState);
//     return getAllGalleryItems(gallery);
//   },
// });

export const gallerySelector = selectorFamily({
  key: "gallerySelector",
  get:
    (param) =>
    async ({ get }) => {
      try {
        const gallery = await useGallery();
        const newArt = gallery.filter((item) => item.no === parseInt(param));
        console.log("newArt" + JSON.stringify(newArt));
        return newArt.length > 0 ? newArt[0] : null;
      } catch (e) {
        console.error(e);
      }
    },
});

export const galleryHalfSelector = selector({
  key: "galleryHalfSelector",
  get: async () => {
    const gallery = await useGallery();
    return gallery.filter((item) => item.no % 2 === 0);
  },
});

// export const JungSeobSelector = selectorFamily({
//   key: "JungSeobSelector",
//   get: (param) => async () => {
//     const gallery = await useGallery();

//     return gallery.filter((item) => item.author === param);
//     //   get(galleryAtom).filter((masterpiece) => masterpiece.author.includes(`${param}`));
//   },
// });

export const galleryParamSelector = selectorFamily({
  key: "galleryParamSelector",
  get: (param) => async () => {
    const gallery = await useGallery();

    switch (param) {
      case "전체":
        return gallery;
      case "이중섭":
        return gallery.filter((item) => item.author === param);

      case "유채":
        return gallery.filter((item) => item.material.includes(param));

      default:
        return gallery;
    }
  },
});
