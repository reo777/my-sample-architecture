// import Heart from '../../../assets/svg/heart.svg';

interface Props {
  isLiked: boolean;
}

export const LikeButton: React.VFC<Props> = props => {
  const { isLiked } = props;
  console.log(isLiked);

  return <div>{/* <Heart /> */}</div>;
};
