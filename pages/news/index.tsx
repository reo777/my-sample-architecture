import { useNewsSelector } from '../../redux/pages/news/newsReducer';

const News = () => {
  const state = useNewsSelector(state => state.newsItems);
  console.log(state);

  return <h1>This iws News Page</h1>;
};

export default News;
