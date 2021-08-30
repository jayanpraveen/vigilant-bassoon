import React, { useRef } from "react";
import { DeleteTwoTone } from "@ant-design/icons";
import { Card, Form, Input, List } from "antd";
import { cardBody, cardHead, cardStyle } from "../../Styles/ComponentStyle";
import AddButton from "./AddButton";
import FormHeaderField from "./FormHeaderField";

const deleteIconStyle = {
  marginTop: "20px",
  fontSize: "20px",
};

export default function FormField() {
  const inputRef = useRef(null);
  return (
    <>
      <Form.List name="questions">
        {(fields, { add, remove }) => (
          <div>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <div
                key={key}
                onKeyDown={(e) => {
                  if (e.key === "j" && e.metaKey) {
                    e.preventDefault();
                    add();
                  }
                  if (e.key === "k" && e.metaKey) {
                    e.preventDefault();
                    remove(name);
                  }
                }}
              >
                <List.Item style={{ padding: "0px", margin: "10px" }}>
                  <Card
                    headStyle={cardHead}
                    bodyStyle={cardBody}
                    style={cardStyle}
                    size="small"
                    title={
                      <FormHeaderField
                        ref={inputRef}
                        restField={restField}
                        name={name}
                        fieldKey={fieldKey}
                      />
                    }
                  >
                    <Input
                      bordered={false}
                      placeholder="response goes here"
                      disabled
                    />
                    <span
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <DeleteTwoTone
                        style={deleteIconStyle}
                        twoToneColor="crimson"
                        onClick={() => remove(name)}
                      />
                    </span>
                  </Card>
                </List.Item>
              </div>
            ))}
            <Form.Item>
              <AddButton add={add} />
            </Form.Item>
          </div>
        )}
      </Form.List>
    </>
  );
}
