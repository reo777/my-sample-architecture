import Image from 'next/image';

interface Props {
  src: string;
}

export const NewsImage: React.VFC<Props> = props => {
  const { src } = props;
  return <Image src={src} width={319} height={128} />;
};
