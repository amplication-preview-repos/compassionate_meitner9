import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CommentWhereInput = {
  comment?: StringNullableFilter;
  id?: StringFilter;
  orderId?: IntNullableFilter;
  reportCount?: IntNullableFilter;
  userId?: IntNullableFilter;
};
