import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

// 1. aria, roles
// 2. focus management
const Window = ({
  title,
  children,
}: PropsWithChildren<{ readonly title: string }>) => {
  return (
    <div className="flex flex-col absolute p-2 box-border inset-0 m-auto w-1/2 h-1/2 bg-white shadow-lg rounded-lg">
      <header aria-label="ウィンドウのタイトル">
        <h2 className="text-2xl font-bold">{title}</h2>
      </header>

      <div className="flex flex-col flex-grow">{children}</div>
    </div>
  );
};

const Footer = ({ onClose }: { readonly onClose: () => void }) => {
  return (
    <footer aria-label="ウィンドウのツールバー">
      <button className="bg-purple-700 text-white px-2 py-1 rounded shadow" onClick={onClose}>
        閉じる
      </button>
    </footer>
  );
};

interface ModalProps {
  readonly title: string;
  readonly onClose: () => void;
}

// 1. aria-hidden
// 2. keydown events
export const Modal = ({
  children,
  title,
  onClose,
}: PropsWithChildren<ModalProps>) => {
  return createPortal(
    <div
      onClick={onClose}
      className="absolute top-0 left-0 bg-opacity-75 bg-black w-full h-full"
    >
      <Window title={title}>
        <div className="flex-grow">{children}</div>
        <Footer onClose={onClose} />
      </Window>
    </div>,
    document.body
  );
};
