import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="comment" source="comment" />
        <NumberInput step={1} label="orderId" source="orderId" />
        <NumberInput step={1} label="reportCount" source="reportCount" />
        <NumberInput step={1} label="user_id" source="userId" />
      </SimpleForm>
    </Create>
  );
};
