import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useRef, useState } from "react";
import { Modal } from "./Modal";

// 1. label
// 2. taking the focus back to this on close
export const ProfileButton = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLButtonElement | null>(null);

  const handleClose = useCallback((): void => {
    setOpen(false);
    ref.current?.focus();
  }, [])

  return (
    <>
      {open && (
        <Modal title="私のプロフィール" onClose={handleClose}>
          プロフィールです
        </Modal>
      )}

      <button
        ref={ref}
        aria-labelledby="show-profile"
        className="text-white bg-purple-700 py-0.5 px-2 shadow rounded text-bold box-border focus:outline-none focus:ring-2 focus:ring-purple-300"
        onClick={() => void setOpen(true)}
      >
        <span id="show-profile" className="sr-only">
          プロフィールを開く
        </span>

        <FontAwesomeIcon icon={faEllipsisH} />
      </button>
    </>
  );
};
