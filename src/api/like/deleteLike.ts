import { axiosInstance } from '../../utils/axios';

interface RequestBody {
  fromId: number;
  articleId: number;
}

export const deleteLike = async (requestBody: RequestBody) => {
  try {
    await axiosInstance().delete('http://localhost:8000/like', {
      data: requestBody,
    });
  } catch (error) {
    throw new Error(error);
  }
};
