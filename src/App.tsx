import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import { PostModel } from "./models/posts.model";

const post: PostModel[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/domzinhuu.png",
      name: "Maique Rosa",
      role: "Frontend Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content: ` Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀`,
      },
      { type: "link", content: "msrsoftware.com.br/profile" },
    ],
    publishedAt: new Date("2023/04/18 18:35:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map((p: PostModel) => (
            <Post key={p.id} post={p} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
