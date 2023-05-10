import axios from "axios";

export const useGallery = async () => {
  try {
    const response = await axios.get(`https://16b9534b-1b6f-4e0a-bd63-b966d5d571f7.mock.pstmn.io/list`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
