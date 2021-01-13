import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from "@testing-library/react";
import { ProfileButton } from "./ProfileButton";

describe('Modal', () => {
  it('is accessible', () => {
    render(<ProfileButton />);
    fireEvent.click(screen.getByRole('button', { name: 'スキルを表示する' }));

    expect(screen.getByRole('dialog', { name: '私のスキル' })).toBeVisible();
    expect(screen.getByText('私のスキル')).toHaveFocus();

    fireEvent.click(screen.getByRole('button', { name: '閉じる' }));
    
    expect(screen.queryByRole('dialog', { name: '私のスキル' })).toBeNull();
    expect(screen.getByRole('button', { name: 'スキルを表示する' })).toHaveFocus();
  });
});
