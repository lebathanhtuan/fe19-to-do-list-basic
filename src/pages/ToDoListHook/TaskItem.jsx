import React, { useState, useMemo } from "react";
import { Card, Button, Row, Input } from "antd";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  title: yup
    .string()
    .required("Bạn chưa nhập tiêu đề!")
    .min(6, "Tiêu đề phải nằm trong khoảng 6-32 kí tự")
    .max(32, "Tiêu đề phải nằm trong khoảng 6-32 kí tự"),
  description: yup.string().required("Bạn chưa nhập nội dung!"),
});

const TaskItem = ({ data, index, handleEditTask, handleDeleteTask }) => {
  const [isEdit, setIsEdit] = useState(false);

  const {
    control,
    trigger,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: data,
  });

  const renderItemView = useMemo(() => {
    return (
      <>
        <div>Tiêu đề: {data.title}</div>
        <div>Nội dung: {data.description}</div>
      </>
    );
  }, [data]);

  const renderItemEdit = useMemo(() => {
    return (
      <form>
        <Controller
          control={control}
          name="title"
          render={({ field }) => (
            <Input
              onChange={(e) => field.onChange(e.target.value)}
              value={field.value}
              placeholder="Tiêu đề"
            />
          )}
        />
        <span className="text-danger">{errors.title?.message}</span>
        <div style={{ margin: "16px 0" }}>
          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <Input
                onChange={(e) => field.onChange(e.target.value)}
                value={field.value}
                placeholder="Nội dung"
              />
            )}
          />
          <span className="text-danger">{errors.description?.message}</span>
        </div>
      </form>
    );
  }, [control, errors]);

  return (
    <Card
      title={
        <Row justify="end">
          {isEdit ? (
            <>
              <Button
                type="primary"
                style={{ marginRight: 8 }}
                onClick={() => {
                  const isValid = trigger()
                  if (isValid) {
                    const values = getValues()
                    setIsEdit(false);
                    handleEditTask(index, values)
                  }
                }}
              >
                Xác nhận
              </Button>
              <Button
                type="primary"
                ghost
                style={{ marginRight: 8 }}
                onClick={() => setIsEdit(false)}
              >
                Hủy
              </Button>
            </>
          ) : (
            <Button
              type="primary"
              ghost
              style={{ marginRight: 8 }}
              onClick={() => setIsEdit(true)}
            >
              Sửa
            </Button>
          )}
          <Button danger onClick={() => handleDeleteTask(index)}>
            Xóa
          </Button>
        </Row>
      }
      style={{ marginTop: 16 }}
    >
      {isEdit ? renderItemEdit : renderItemView}
    </Card>
  );
};

export default TaskItem;
