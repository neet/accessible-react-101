import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

// 1. aria
const Backdrop = ({ onClick }: { readonly onClick: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="absolute top-0 left-0 bg-black opacity-75 w-full h-full"
    />
  );
};

// 1. aria, roles
// 2. focus management
const Window = ({
  title,
  children,
}: PropsWithChildren<{ readonly title: string }>) => {
  return (
    <div className="absolute p-2 box-border inset-0 m-auto w-1/2 h-1/2 bg-white shadow-lg rounded-lg">
      <header>
        <h2 className="text-2xl font-bold">{title}</h2>
      </header>

      <p>{children}</p>
    </div>
  );
};

const Footer = ({ onClose }: { readonly onClose: () => void }) => {
  return (
    <footer>
      <button className="text-purple-500" onClick={onClose}>
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
    <div className="absolute w-full h-full top-0 left-0">
      <Backdrop onClick={onClose} />
      <Window title={title}>
        {children}
        <Footer onClose={onClose} />
      </Window>
    </div>,
    document.body
  );
};
