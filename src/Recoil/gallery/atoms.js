import axios from "axios";
import { useGallery } from "./useGallery";
import { atom, selector } from "recoil";

export const galleryState = atom({
  key: "galleryState",
  default: selector({
    key: "userAtom/default",
    get: async () => {
      const gallery = await useGallery();
      console.log(gallery);
      return gallery;
    },
  }),
  // default: [
  // {
  //   no: "",
  //   author: "default",
  //   material: "",
  //   name: "",
  //   coverThumb: "",
  // },
  // ],
});
