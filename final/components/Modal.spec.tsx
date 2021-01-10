import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Modal } from "./Modal";

describe("Modal", () => {
  let app: Element;

  beforeAll(() => {
    app = document.createElement('div');
    app.setAttribute('id', 'app');
    document.body.appendChild(app);
  })

  it("is accessible", async () => {
    const handleClose = jest.fn();

    const { unmount } = render(
      <Modal title="タイトル" onClose={handleClose}>
        こんにちは
      </Modal>
    );

    expect(screen.getByText('タイトル')).toHaveFocus();
    expect(screen.getByText('こんにちは')).toBeVisible();
    expect(app).toHaveAttribute('aria-hidden', 'true');

    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape' });
    expect(handleClose).toBeCalled();

    unmount();

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).toBeNull();
      expect(app).not.toHaveAttribute('aria-hidden', 'true');
    });
  });
});
