import { useEffect, useState, useRef } from "react";
import { useScroll } from "../../hooks/index.js";
import styles from "./Board.module.css";
export default function Board() {
  const [posts, setPosts] = useState([]);
  const [furtherFetch, setFurtherFetch] = useState(0);
  const handleScroll = useScroll(() => {
    setFurtherFetch(furtherFetch + 1);
  });
  let lastPostId = useRef(null);
  const environment = process.env.NODE_ENV;
  const corsAPI =
    environment === "development"
      ? "http://localhost:4000/v1/cors"
      : "/v1/cors";

  //handle Scroll

  //fetch Data
  async function fetchData(src) {
    const response = await fetch(corsAPI + src);
    const data = response.json();
    return data;
  }
  useEffect(() => {
    async function getPost(lastPostId) {
      const src = lastPostId
        ? `https://www.dcard.tw/v2/posts?before=${lastPostId}`
        : `https://www.dcard.tw/v2/posts`;
      const posts = await fetchData(src);
      return posts;
    }

    getPost(lastPostId.current).then((newPosts) => {
      const lastIndex = newPosts.length - 1;
      lastPostId.current = newPosts[lastIndex].id;
      setPosts([...posts, ...newPosts]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [furtherFetch]);

  function renderPosts(posts) {
    const postList = posts.map((post) => (
      <div className={styles.postWrapper} key={post.id}>
        <div className={styles.postTitle}>{post.title}</div>
        <div className={styles.postExcerpt}>{post.excerpt}</div>
      </div>
    ));
    return postList;
  }
  const postList = renderPosts(posts);
  return <div className={styles.board}>{postList}</div>;
}
