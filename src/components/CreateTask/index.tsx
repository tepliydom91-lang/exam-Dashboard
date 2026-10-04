import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form"
import { taskSheme } from "../../scheme/taskSheme";
import type { TaskForm, TaskPriority, TaskStatus } from "../../types";
import { TaskPriority as TaskPriorityValues } from "../../types";
import { TaskStatus as TaskStatusValues } from "../../types";

import { useUserStore } from "../../store/userStore";
import { Input } from "../Input";
import { Textarea } from "../Textarea";
import { CustomSelect } from "../Select";
import { useTasksStore } from "../../store/taskStore";
import {
    Form,
    Title,
    Subtitle,
    Fields,
    FullWidth,
    SubmitButton,
} from "./style"
import { useNavigate } from "react-router-dom";



export const CreateTask = () => {
    const { addTask } = useTasksStore(state=> state)
    const { user, users } = useUserStore((state) => state);
    const navigate = useNavigate()
    const formProps = useForm<TaskForm>({
        defaultValues: {
            title: '',
            description: '',
            assigneeName: '',
            priority: TaskPriorityValues.low,
            status: TaskStatusValues.todo,
            dueDate: '',
        },
        resolver: zodResolver(taskSheme)
    });
    const onSubmit: SubmitHandler<TaskForm> = async (data) => {
        console.log("SUBMIT:", data);
         const dto = {
             ...data,
             assigneeId: users.find(({ text }) => text === data.assigneeName)!.id,
             createdBy:user!.name
         }
             await addTask(dto)
             navigate("/");
             formProps.reset()
        };
    return (
        <FormProvider {...formProps}>
            <Form onSubmit={formProps.handleSubmit(onSubmit)}>
                <Title>
                    Create task
                </Title>

                <Subtitle>
                    Create a new task and assign it to a team member.
                </Subtitle>

                <Fields>
                    <FullWidth>
                        <Input
                            name="title"
                            label="Title"
                            type="text"
                            placeholder="Enter task title"
                        />
                    </FullWidth>

                    <FullWidth>
                        <Textarea
                            placeholder="Enter task description"
                            name="description"
                            label="Description"
                        />
                    </FullWidth>

                    <CustomSelect
                        name="assigneeName"
                        options={users}
                        label="Assignee"
                    />

                    <CustomSelect
                        name="priority"
                        options={[
                            {
                                id: "low",
                                text: "low",
                            },
                            {
                                id: "medium",
                                text: "medium",
                            },
                            {
                                id: "high",
                                text: "high",
                            },
                        ]}
                        label="Priority"
                    />

                    <CustomSelect
                        name="status"
                        options={[
                            {
                                id: "todo",
                                text: "todo",
                            },
                            {
                                id: "inProgress",
                                text: "inProgress",
                            },
                            {
                                id: "done",
                                text: "done",
                            },
                            {
                                id: "review",
                                text: "review",
                            },
                        ]}
                        label="Status"
                    />

                    <Input
                        name="dueDate"
                        label="Due date"
                        type="date"
                        placeholder=""
                    />
                </Fields>

                <SubmitButton type="submit" >
                    Create task
                </SubmitButton>


            </Form>
        </FormProvider>
    )
}
