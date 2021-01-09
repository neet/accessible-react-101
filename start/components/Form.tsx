import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useState } from "react";

const className =
  "block text-sm bg-white border border-gray-300 mb-2 rounded-sm";

export const Form = () => {
  const [title, setTitle] = useState("");
  const [warning, setWarning] = useState<null | string>(null);

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);

    if (e.target.value.length <= 3) {
      setWarning('件名は4文字以上にしてください');
    } else {
      setWarning(null);
    }
  }

  return (
    <form className="p-4 rounded-md shadow-lg bg-gray-100">
      {warning != null && (
        <div className="bg-yellow-100 text-yellow-600 border border-yellow-500 text-sm p-2 rounded">
          <p>{warning}</p>
        </div>
      )}

      <h2 className="font-semibold text-lg">ご連絡</h2>
      <h3 className="font-semibold text-sm">個人情報</h3>

      <input
        type="text"
        name="full-name"
        placeholder="お名前"
        className={className}
      />

      <input
        type="email"
        name="email"
        placeholder="メールアドレス"
        className={className}
      />

      <h3 className="font-semibold text-sm">連絡事項</h3>

      <input
        type="text"
        name="title"
        placeholder="件名"
        className={className}
        value={title}
        onChange={handleChangeTitle}
      />

      <textarea name="content" placeholder="本文" className={className} />

      <button className="text-white bg-purple-700 px-4 py-1 rounded-full">
        <FontAwesomeIcon fixedWidth icon={faPaperPlane} />
      </button>
    </form>
  );
};
