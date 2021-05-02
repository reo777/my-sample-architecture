import { axiosInstance } from '../../utils/axios';

export const getNewsItems = async () => {
  try {
    const response = await axiosInstance().get(
      'http://localhost:8000/articles',
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
