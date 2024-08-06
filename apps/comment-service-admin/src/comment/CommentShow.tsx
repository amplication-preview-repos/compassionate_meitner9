import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CommentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="orderId" source="orderId" />
        <TextField label="reportCount" source="reportCount" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user_id" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
