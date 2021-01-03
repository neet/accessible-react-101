import { NextPage } from "next";
import { Layout } from "../components/layout";

const Profile: NextPage = () => {
  return (
    <Layout title="プロフィール" description="プロフィール画面です">
      <h1>プロフィール</h1>
      私のプロフィール
    </Layout>
  )
}

export default Profile;
