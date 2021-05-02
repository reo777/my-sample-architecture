import { axiosInstance } from '../../utils/axios';

interface RequestBody {
  fromId: number;
  articleId: number;
}

export const deleteLike = async (requestBody: RequestBody) => {
  try {
    const response = await axiosInstance().delete(
      'http://localhost:8000/like',
      {
        data: requestBody,
      },
    );

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
