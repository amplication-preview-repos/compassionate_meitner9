import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "comment";

export const CommentTitle = (record: TComment): string => {
  return record.comment?.toString() || String(record.id);
};
