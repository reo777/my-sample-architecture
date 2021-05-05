import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { LikeButtonIcon } from './LikeButton';

describe('LikeButtonIconをクリック', () => {
  it('onclick', () => {
    const mockOnClick = jest.fn();
    render(<LikeButtonIcon onClick={mockOnClick} isLiked={false} />);

    const likeButtonIcon = screen.getByTestId('like-button-icon');
    fireEvent.click(likeButtonIcon);
  });
});
