import { signIn } from "next-auth/react";
import { useState } from "react";

export const Auth = () => {
  const [myEmail, setMyEmail] = useState("");

  const inputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMyEmail(e.target.value);
  };

  // const is ExistEmail = (email: string) => {}

  const signInWithEmail = () => {
    // TODO データベースに登録されているか確認する
    // isExistEmail(myEmail)

    signIn("email", { email: myEmail });
  };

  return (
    <div>
      <h2>develop ENV</h2>
      <div className="container mx-auto mb-12">
        <button
          className="rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-800"
          onClick={() => signIn("github")}
        >
          GitHub Auth
        </button>
      </div>
      <div className="container mx-auto">
        <p>メールアドレスを入力</p>
        <div>
          <input
            type="text"
            className="mb-2 w-64 rounded border border-gray-400 px-3 py-2"
            onChange={inputEmail}
          />
        </div>
        <button
          className="rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-800"
          onClick={() => signIn("email", { email: myEmail })}
        >
          サインイン（未登録ならばサインアップ）
        </button>
        {/* <button
          className="rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-800"
          onClick={() => signIn("email", { email: myEmail })}
        >
          サインイン（未登録サインアップなし）
        </button> */}
      </div>
    </div>
  );
};
