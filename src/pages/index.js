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
        "https://v16-web-newkey.tiktokcdn.com/19121f05fbed4c4e63a61c79aab3fcea/5f6cf21d/video/tos/alisg/tos-alisg-pve-0037c001/e6da6a1fbf1f4d798e3498ea13aca32b/?a=1988&br=2314&bt=1157&cr=0&cs=0&dr=0&ds=3&er=&l=2020092413230501018907422533020866&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2Zpdjx1andydzMzOzczM0ApZ2dkaTwzNWQ3NzhmaTw1N2dkaGVhY2k0XmlfLS0zMTRzcy0xYGJfNDBfYzVfYy5eMzA6Yw%3D%3D&vl=&vr=",
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
      videoUrl:
        "https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c004/e496f63f715e408aa11eb91298365924/?a=1988&br=1786&bt=893&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1622163413&l=2021052718555401019020921634255AEF&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=amo4dnd1eHFqNDMzODczM0ApaDY3NGk6OWQ2Nzg6OTtnOmdhc2dfNi1tMWJgLS0zMTZzczVjM2M2NDFeYGMzLS8wLTE6Yw%3D%3D&signature=e697fe386766a85186d84c13518c70c5&tk=tt_webid_v2&vl=&vr=",
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
