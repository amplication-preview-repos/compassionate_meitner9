import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="comment" source="comment" />
        <NumberInput step={1} label="orderId" source="orderId" />
        <NumberInput step={1} label="reportCount" source="reportCount" />
        <NumberInput step={1} label="user_id" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
