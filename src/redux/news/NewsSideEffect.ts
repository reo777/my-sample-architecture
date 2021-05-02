import { getNewsItems } from '../../api/news/getNewsItems';

export const getNewsItemsSideEffect = async () => {
  try {
    const newsItems = await getNewsItems();

    return newsItems;
  } catch (error) {
    throw new Error('Newsの取得に失敗しました');
  }
};
