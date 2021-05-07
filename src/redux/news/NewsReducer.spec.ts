import { updatedLikeItems, deletedLikeItems } from './NewsReducer';
describe('NewsReducer', () => {
  const draftUpdateLike = [
    {
      id: 0,
      title: 'test news item',
      photoUrls: [''],
      publishedAt: '2021年5月8日',
      isNew: true,
      isLiked: false,
    },
  ];
  const draftDeleteLike = [
    {
      id: 0,
      title: 'test news item',
      photoUrls: [''],
      publishedAt: '2021年5月8日',
      isNew: true,
      isLiked: false,
    },
  ];

  it('updatedLikeItems', () => {
    const action = { payload: { id: 0 } };

    const result = updatedLikeItems(draftUpdateLike, action);

    expect(result).toMatchSnapshot();
  });

  it('deletedLikeItems', () => {
    const action = { payload: { id: 0 } };

    const result = deletedLikeItems(draftDeleteLike, action);

    expect(result).toMatchSnapshot();
  });
});
