export interface TopicDataType {
    id: number,
    content: string,
    created_at: string,
    updated_at: string | null,
    user_id: number,
    username: string,
    comment_count: number,
    reaction_count: number,
    liked_status: number,
}

export interface CommentDataType {
    id: number,
    user_id: number,
    username: string,
    sentence: string,
    created_at: string,
    updated_at: string | null,
}

export interface UserSessionType {
    id: number;
    username: string;
    token: string;
}