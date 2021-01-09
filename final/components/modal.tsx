import { PropsWithChildren, useEffect, useRef } from "react";
import { createPortal } from 'react-dom';

const Backdrop = ({ onClick }: { readonly onClick: () => void }) => {
  return <div onClick={onClick} className="absolute top-0 left-0 bg-black opacity-75 w-full h-full" />;
};

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
      className="absolute inset-0 m-auto w-1/2 h-1/2 bg-white shadow-lg rounded"
    >
      <h2 id="modal-title" className="text-2xl font-bold">
        <a href="#modal-title" ref={ref} className="focus:underline">
          {title}
        </a>
      </h2>

      <p id="modal-body">{children}</p>
    </div>
  );
};

const Close = ({ onClick }: { readonly onClick: () => void }) => {
  return (
    <button className="text-blue-500" onClick={onClick}>閉じる</button>
  )
}

interface ModalProps {
  readonly title: string ;
  readonly onClose: () => void;
}

export const Modal = ({
  children,
  title,
  onClose,
}: PropsWithChildren<ModalProps>) => {

  useEffect(() => {
    const app = document.getElementById('app');
    if (app == null) return;

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      };
    };

    app.setAttribute('aria-hidden', 'true');
    document.addEventListener('keydown', handleKeydown);

    return () => {
      app.removeAttribute('aria-hidden');
      document.removeEventListener('keydown', handleKeydown);
    };
  });

  return createPortal(
    <div className="absolute w-full h-full top-0 left-0">
      <Backdrop onClick={onClose} />
      <Window title={title}>
        {children}
        <Close onClick={onClose} />
      </Window>
    </div>,
    document.body,
  );
};
