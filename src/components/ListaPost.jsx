import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { busca } from "../Api/api";
const ListaPost = ({ url }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    busca(url, setPosts);
    // eslint-disable-next-line 
  }, [url]);

  return (
    <section className="posts container">
      {posts.map((post) => (
        <Link
          to={`/post/${post.id}`}
          key={post.id}
          className={`cartao-post cartao-post--${post.categoria}`}
        >
          <article>
            <h3 className="cartao-post__titulo">{post.title}</h3>
            <p className="cartao-post__meta">{post.metadescription}</p>
          </article>
        </Link>
      ))}
    </section>
  );
};

export default ListaPost;
