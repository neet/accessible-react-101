import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from "@testing-library/react";
import { Modal } from "./Modal";

describe('Modal', () => {
  test('is accessible', () => {
    const handleClose = jest.fn();
    render(<Modal title="タイトル" onClose={handleClose}>本文</Modal>);

    expect(screen.getByText('タイトル')).toHaveFocus();
    expect(screen.getByText('本文')).toBeVisible();

    fireEvent.click(screen.getByText('閉じる'));
    expect(handleClose).toBeCalled();
  });
});
