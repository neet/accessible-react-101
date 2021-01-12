import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Modal } from "./Modal";

// 1. label
// 2. taking the focus back to this on close
export const ProfileButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <Modal title="私のスキル" onClose={() => void setOpen(false)}>
          <ul className="list-disc list-inside">
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </Modal>
      )}

      <div
        className="text-white bg-purple-700 py-0.5 px-2 shadow rounded text-bold box-border w-min"
        onClick={() => void setOpen(true)}
      >
        <FontAwesomeIcon icon={faEllipsisH} />
      </div>
    </>
  );
};
