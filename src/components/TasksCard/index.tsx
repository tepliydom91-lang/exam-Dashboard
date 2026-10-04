import { useState } from "react"
import { Button } from "../Button"
import {
    StyledCard,
    Header,
    Title,
    Description,
    Info,
    InfoItem,
    Label,
    Value,
    Priority,
    Status,
    Comments,
    Comment,
    CommentText,
    CommentAuthor,
} from "./style"
import { useTasksStore } from "../../store/taskStore"
import { Textarea } from "../Textarea"
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import type { CommentDTO } from "../../types"
import { commentSheme } from "../../scheme/commentScheme"

import { useUserStore } from "../../store/userStore"




interface TaskCardProps {
    id: string
}


export const TaskCard = ({ id }: TaskCardProps) => {
    const {addComment} = useTasksStore((state)=> state)
    const [isCommentsOpen, setCommentsOpen] = useState(false)
    const [newComment, setNewComment] = useState(false)
    const task = useTasksStore((state) => state.tasks[id])
    const user = useUserStore((state) => state.user);

    const formProps = useForm<CommentDTO>({
        defaultValues: {
            text: '',
            authorName:user ? user.name : ''
        },
        resolver: zodResolver(commentSheme)
    });
    const onSubmit: SubmitHandler<CommentDTO> = async (data) => {
        console.log(data,)
        addComment(id, data)
        
        formProps.reset()
        setNewComment(false)
    };

    return (
        <StyledCard>
            <Header>
                <Title>{task.title}</Title>

                <Priority $priority={task.priority}>
                    {task.priority}
                </Priority>
            </Header>

            <Description>
                {task.description}
            </Description>

            <Info>
                <InfoItem>
                    <Label>Assignee</Label>
                    <Value>{task.assigneeName}</Value>
                </InfoItem>

                <InfoItem>
                    <Label>Status</Label>
                    <Status $status={task.status}>
                        {task.status}
                    </Status>
                </InfoItem>

                <InfoItem>
                    <Label>Due date</Label>
                    <Value>{task.dueDate}</Value>
                </InfoItem>

                <InfoItem>
                    <Label>Created</Label>
                    <Value>{task.createdAt}</Value>
                </InfoItem>

                <InfoItem>
                    <Label>Created by</Label>
                    <Value>{task.createdBy}</Value>
                </InfoItem>
            </Info>
            <Button
                label={isCommentsOpen ? 'Hide comments' : "Show comments"}
                type="button"
                onClick={() => setCommentsOpen(prev => !prev)}
            />

            {isCommentsOpen && (
                <Comments>
                    <Label>Comments ({task.comments.length})</Label>

                    {task.comments.map((comment) => (
                        <Comment key={comment.id}>
                            <CommentText>
                                {comment.text}
                            </CommentText>

                            <CommentAuthor>
                                {comment.authorName} · {comment.createdAt}
                            </CommentAuthor>
                        </Comment>
                    ))}
                    <Button
                        type='button'
                        label="add comment"
                        onClick={() => setNewComment(prev => !prev)}
                    />

                    {
                        newComment && (
                            <FormProvider {...formProps}>
                                <form onSubmit={formProps.handleSubmit(onSubmit)}>

                                    <Textarea
                                        name='text'
                                        placeholder="placeholder"
                                        label="description"
                                    />

                                    <Button
                                        type='submit'
                                        label="Submit"
                                    />
                                </form>
                            </FormProvider>

                        )
                    }
                </Comments>
            )}


        </StyledCard>
    )
}