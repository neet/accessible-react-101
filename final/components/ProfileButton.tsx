import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { Modal } from "./Modal";

// 1. label
// 2. taking the focus back to this on close
export const ProfileButton = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLButtonElement | null>(null);

  const handleClose = () => {
    setOpen(false);
    ref.current?.focus();
  }

  return (
    <>
      {open && (
        <Modal title="私のスキル" onClose={handleClose}>
          <ul className="list-disc list-inside">
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </Modal>
      )}

      <button
        className="text-white bg-purple-700 py-0.5 px-2 shadow rounded text-bold box-border w-min"
        aria-label="スキルを表示する"
        ref={ref}
        onClick={() => void setOpen(true)}
      >
        <FontAwesomeIcon icon={faEllipsisH} />
      </button>
    </>
  );
};
