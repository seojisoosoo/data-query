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

export const atomSelector = selector({
  key: "atomSelector",
  get: ({ get }) => {
    try {
      const allGallery = get(galleryAllSelector(get(galleryState)));
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
// export const gallerySelector = selectorFamily({
//   key: "gallerySelector",
//   get:
//     (param) =>
//     ({ get }) => {
//       get(galleryState).filter((item) => item.no === parseInt(param));
//     },
// });

export const galleryHalfSelector = selector({
  key: "galleryHalfSelector",
  get: async () => {
    const gallery = await useGallery();
    return gallery.filter((item) => item.no % 2 === 0);
  },
});

export const JungSeobSelector = selectorFamily({
  key: "JungSeobSelector",
  get: (param) => async () => {
    const gallery = await useGallery();

    return gallery.filter((item) => item.author === param);
    //   get(galleryAtom).filter((masterpiece) => masterpiece.author.includes(`${param}`));
  },
});
// export const JungSeobSelector = selectorFamily({
//   key: "JungSeobSelector",
//   get:
//     (param) =>
//     ({ get }) => {
//       const gallerys = get(galleryState);
//       console.log(gallerys);
//       return gallerys.filter((item) => item.author === param);
//     },
//   // get(galleryState).filter((item) => item.author === param),
//   //   get(galleryAtom).filter((masterpiece) => masterpiece.author.includes(`${param}`));
// });
export const oilPaintingSelector = selectorFamily({
  key: "oilPaintingSelector",
  get: (param) => async () => {
    const gallery = await useGallery();

    return gallery.filter((item) => item.material.includes(param));
    //   get(galleryAtom).filter((masterpiece) => masterpiece.author.includes(`${param}`));
  },
});
