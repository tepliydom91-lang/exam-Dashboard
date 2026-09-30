import type { Task } from "../../types"
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

interface TaskCardProps {
    task: Task
}

export const TaskCard = ({ task }: TaskCardProps) => {
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
            </Comments>
        </StyledCard>
    )
}