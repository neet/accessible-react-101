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
        <Modal title="私のプロフィール" onClose={() => void setOpen(false)}>
          プロフィールです
        </Modal>
      )}

      <div
        className="text-white bg-purple-700 py-0.5 px-2 shadow rounded text-bold box-border"
        onClick={() => void setOpen(true)}
      >
        <FontAwesomeIcon icon={faEllipsisH} />
      </div>
    </>
  );
};
