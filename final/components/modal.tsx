import { PropsWithChildren, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// 1. aria
const Backdrop = ({ onClick }: { readonly onClick: () => void }) => {
  return (
    <div
      aria-hidden
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
  const ref = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div
      role="dialog"
      aria-modal
      aria-labelledby="modal-title"
      aria-describedby="modal-body"
      className="absolute p-2 box-border inset-0 m-auto w-1/2 h-1/2 bg-white shadow-lg rounded-lg"
    >
      <header aria-labelledby="modal-title">
        <h2 id="modal-title" className="text-2xl font-bold">
          <a href="#modal-title" ref={ref}>{title}</a>
        </h2>
      </header>

      <div id="modal-body">{children}</div>
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

// 1. Add aria-hidden to app
// 2. keydown events
export const Modal = ({
  children,
  title,
  onClose,
}: PropsWithChildren<ModalProps>) => {
  const handleKeydown = useCallback((e: KeyboardEvent): void => {
    if (e.key === "Escape") onClose();
  }, []);

  useEffect(() => {
    const app = document.getElementById("app");
    if (app == null) throw new Error("App not found");

    app.style.setProperty("overflow", "hidden");
    app.setAttribute("aria-hidden", "true");
    document.addEventListener("keydown", handleKeydown);

    return (): void => {
      app.style.removeProperty("overflow");
      app.removeAttribute("aria-hidden");
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

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
