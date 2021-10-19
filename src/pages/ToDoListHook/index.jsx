import React, { useState, useMemo } from "react";
import { Button, Input, Card } from "antd";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import TaskItem from "./TaskItem";

const schema = yup.object({
  title: yup
    .string()
    .required("Bạn chưa nhập tiêu đề!")
    .min(6, "Tiêu đề phải nằm trong khoảng 6-32 kí tự")
    .max(32, "Tiêu đề phải nằm trong khoảng 6-32 kí tự"),
  description: yup.string().required("Bạn chưa nhập nội dung!"),
});

const ToDoListPage = () => {
  const [taskList, setTaskList] = useState([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleAddTask = (values) => {
    setTaskList([values, ...taskList]);
  };

  const handleEditTask = (index, values) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1, values);
    setTaskList(newTaskList);
  };

  const handleDeleteTask = (index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };

  const renderTaskItem = useMemo(() => {
    return taskList.map((taskItem, taskIndex) => {
      return (
        <TaskItem
          key={taskIndex}
          data={taskItem}
          index={taskIndex}
          handleEditTask={handleEditTask}
          handleDeleteTask={handleDeleteTask}
        />
      );
    });
  }, [taskList]);

  return (
    <div>
      <Card title="To Do List">
        <form onSubmit={handleSubmit(handleAddTask)}>
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
          <Button type="primary" htmlType="submit" block>
            Thêm Task
          </Button>
        </form>
      </Card>
      {renderTaskItem}
    </div>
  );
};

export default ToDoListPage;
