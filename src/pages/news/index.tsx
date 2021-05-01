import { NewLabel } from '../../components/atom/NewLabel/NewLabel';
import { useNewsSelector } from '../../redux/pages/news/NewsReducer';
import { LikeButton } from '../../components/atom/LikeButton/LikeButton';

const News = () => {
  const state = useNewsSelector(state => state.newsItems);
  console.log(state);

  return (
    <div>
      <NewLabel />
      <LikeButton isLiked={true} />
      <h1>This iws News Page</h1>
    </div>
  );
};

export default News;
