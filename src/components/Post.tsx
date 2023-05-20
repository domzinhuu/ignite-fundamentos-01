import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { getPulishedDateFormatted } from "../functions/time.functions";
import React, { FormEvent, useState } from "react";
import { PostModel } from "../models/posts.model";

interface PostProps {
  post: PostModel;
}

export function Post(props: PostProps) {
  const [comments, setComments] = useState(["Post muito bacana heim?!"]);
  const [newComment, setNewComment] = useState("");

  function handleCreateComment(el: FormEvent) {
    el.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  }

  function handleNewCommentChanges(el: React.ChangeEvent<HTMLTextAreaElement>) {
    el.target.setCustomValidity("");
    setNewComment(el.target.value);
  }

  function deleteComment(comment: string) {
    const commentsWithoutDeletedOne = comments.filter((c) => c !== comment);

    setComments(commentsWithoutDeletedOne);
  }

  function handleInvalidComment(
    event: React.InvalidEvent<HTMLTextAreaElement>
  ) {
    event.target.setCustomValidity("Campo é necessario para salvar!");
  }

  const isNewCommentEmpty = newComment.length === 0;
  const { author, content, publishedAt } = props.post;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={getPulishedDateFormatted(publishedAt, "title")}
          dateTime={getPulishedDateFormatted(publishedAt)}
        >
          {getPulishedDateFormatted(publishedAt, "diff")}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((cnt) => {
          if (cnt.type === "paragraph") {
            return <p key={cnt.content}>{cnt.content}</p>;
          }
          if (cnt.type === "link") {
            return (
              <p key={cnt.content}>
                <a href="">{cnt.content}</a>
              </p>
            );
          }

          return cnt.content;
        })}
      </div>

      <form onSubmit={handleCreateComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          id="commentArea"
          value={newComment}
          onChange={handleNewCommentChanges}
          name="comment"
          required
          onInvalid={handleInvalidComment}
          placeholder="deixe um comentário"
        />

        <footer>
          <button
            disabled={isNewCommentEmpty}
            className={styles.formButton}
            type="submit"
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment key={comment} content={comment} onDelete={deleteComment} />
        ))}
      </div>
    </article>
  );
}
