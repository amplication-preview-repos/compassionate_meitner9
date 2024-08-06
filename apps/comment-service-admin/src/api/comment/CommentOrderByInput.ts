import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  reportCount?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
