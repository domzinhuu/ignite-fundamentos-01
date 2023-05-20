import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDelete: (content: string) => void;
}

export function Comment({ content, onDelete }: CommentProps) {
  const [applauseCounter, setApplauseCounter] = useState(0);

  function handleDeleteComment() {
    onDelete(content);
  }

  function handleApplauseChange() {
    setApplauseCounter((state) => state + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        className={styles.avatarCustom}
        src="https://github.com/domzinhuu.png"
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Maique Rosa</strong>
              <time title="18 de maio as 20:06" dateTime="2023-05-18 20:06">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleApplauseChange}>
            <ThumbsUp size={20} />
            Aplaudir <span>{applauseCounter}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
