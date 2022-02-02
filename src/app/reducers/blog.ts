import { createAction, createReducer, on, props } from "@ngrx/store";
import { iblog } from "../interfaces/iblog";


export const allBlogs = createAction('[USER] blogs get', props<{blogs: iblog[]}>())


export interface blogsInterface {
    blogs: iblog[],
}


export const initStateOfblogs: blogsInterface = {
    blogs: []
}


export const blogsReducer = createReducer(
    initStateOfblogs,
    on(allBlogs, (state, {blogs}) => {
        return {    
            ...state,
            blogs: blogs
        }
    })
)