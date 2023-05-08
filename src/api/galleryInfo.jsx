import axios from "axios";

export async function getGalleryInfo() {
  try {
    const data = await axios.get(`${process.env.REACT_APP_BASE_URL}/jslee/gallery/goods.htm?format=json`);
    console.log(data);
    console.log(data.collecntions);
    return data;
  } catch (e) {
    console.log(e);
  }
}
