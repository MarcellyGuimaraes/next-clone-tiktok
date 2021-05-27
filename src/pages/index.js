import Layout from "../components/Layout";
import Feed from "../components/Feed";
import Suggestions from "../components/Suggestions";
// import { openDB } from "../lib/openDB";

function Index({ posts }) {
  return (
    <Layout>
      <Feed posts={posts}></Feed>
      <Suggestions></Suggestions>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // // implementar a busca dos dados no mongodb
  // const db = await openDB();
  // const data = await db.collection("feed").find().toArray();

  const data = [
    {
      id: 1,
      author: {
        id: 1,
        avatar:
          "https://64.media.tumblr.com/aff77a5654714c116ad0c49614627f36/bfcd8ae368925e4c-74/s500x750/b3907c665e803208a13075d5ee3197bdc70e46cd.jpg",
        name: "Marcelly Guimarães",
        username: "cellyguimaraes",
      },
      description: "",
      tags: [{ title: "#youtube" }, { title: "//#endregionclone" }],
      songName: "WAP (feat. Megan Thee Stallion) - Cardi B",
      videoUrl:
        "https://www.tiktok.com/@poppy/video/6958526321890741510?lang=pt-BR&is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=6966668047986066949",
      likes: 650,
      comments: 10,
      replies: 50,
    },
    {
      id: 2,
      author: {
        id: 1,
        avatar:
          "https://64.media.tumblr.com/aff77a5654714c116ad0c49614627f36/bfcd8ae368925e4c-74/s500x750/b3907c665e803208a13075d5ee3197bdc70e46cd.jpg",
        name: "Marcelly Guimarães",
        username: "cellyguimaraes",
      },
      description: "Vídeo teste para clone de interface",
      tags: [{ title: "#youtube" }, { title: "#clone" }],
      songName: "Tampa Curhat Beat - TampaCurhat",
      videoUrl: "../../public/teste.jpeg",
      likes: 650,
      comments: 10,
      replies: 50,
    },
  ];

  return {
    props: {
      // posts: JSON.parse(JSON.stringify(data)),
      posts: data,
    }, // will be passed to the page component as props
  };
}

export default Index;
