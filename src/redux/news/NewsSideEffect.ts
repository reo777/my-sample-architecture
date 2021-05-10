import { deleteLike } from '../../api/like/deleteLike';
import { updateLike } from '../../api/like/updateLike';
import { getNewsItems } from '../../api/news/getNewsItems';

export const getNewsItemsSideEffect = async () => {
  try {
    const newsItems = await getNewsItems();

    return newsItems;
  } catch (error) {
    throw new Error('Newsの取得に失敗しました');
  }
};

export const deleteLikeSideEffect = async (id: number) => {
  try {
    // こちら側でfromIdを指定して良いとのことなので値を固定
    await deleteLike({ fromId: 555, articleId: id });
  } catch (error) {
    throw new Error('Likeの削除に失敗しました');
  }
};

export const updateLikeSideEffect = async (id: number) => {
  try {
    // こちら側でfromIdを指定して良いとのことなので値を固定
    await updateLike({ fromId: 555, articleId: id });
  } catch (error) {
    throw new Error('Likeの更新に失敗しました');
  }
};
