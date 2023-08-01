import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface message {
    message: string;
    sender: string;
}

const initialState = {
    messages: <message[]>[]
}

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<message>) => {
            state.messages = [...state.messages, action.payload]
        }
    }
})

export const { addMessage } = messageSlice.actions

export default messageSlice.reducer

