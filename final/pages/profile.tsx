import { NextPage } from "next";
import { useRef, useState } from "react";
import { Layout } from "../components/layout";
import { Modal } from "../components/modal";

const Profile: NextPage = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<HTMLButtonElement | null>(null);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
    ref.current?.focus();
  }

  return (
    <Layout title="プロフィール" description="プロフィール画面です">
      <h1 className="text-3xl leading-relaxed font-semibold">プロフィール</h1>
      <p>私のプロフィール</p>

      <button className="text-blue-500" onClick={handleOpen} ref={ref}>
        モーダルを開く
      </button>

      {isOpen && <Modal title="挨拶" onClose={handleClose}>こんにちは</Modal>}
    </Layout>
  )
}

export default Profile;
