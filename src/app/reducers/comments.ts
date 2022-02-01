import { createAction, createReducer, on, props } from "@ngrx/store";
import { icomment } from "../interfaces/icomment";


export const allComments = createAction('[USER] comments get', props<{comments: icomment[]}>())


export interface commentsInterface {
    comments: icomment[],
}


export const initStateOfcomments: commentsInterface = {
    comments: []
}


export const commentsReducer = createReducer(
    initStateOfcomments,
    on(allComments, (state, {comments}) => {
        return {    
            ...state,
            comments: comments
        }
    })
)