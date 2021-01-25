import { useState } from "react";
import Post from "./Post";
import styles from "./Board.module.css";
import { useScrollToBottom, useFetchData } from "../../hooks/index.js";
import { dcardEndPoint } from "../../config.js";
export default function Board() {
  //fetch Data through custom hook useFetch, the hook would execute when argument changed
  const [fetchUrl, setFetchUrl] = useState(`${dcardEndPoint}/posts`);

  let [data, isLoading] = useFetchData(fetchUrl);

  //Use custom hook to handle scroll event, the argument would be executed as callback
  useScrollToBottom(() => {
    const lastId = data[data.length - 1].id;
    const fetchUrl = `${dcardEndPoint}/posts?before=${lastId}`;
    setFetchUrl(fetchUrl);
  });

  function renderPosts(posts) {
    const postList = posts.map((post) => (
      <Post
        key={post.id}
        id={post.id}
        title={post.title}
        excerpt={post.excerpt}
      />
    ));
    return postList;
  }
  const postList = renderPosts(data);
  return (
    <div className={styles.board}>
      {postList}
      {isLoading || <div>Loading Data........</div>}
    </div>
  );
}
