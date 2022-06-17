import { createAction, createSlice, current } from "@reduxjs/toolkit"

const MAX_TEAM_MEMBERS = 6

//array of pokedex ids
const initialState = {
    ids: []
}

export const add = createAction('team/add')
export const remove = createAction('team/remove')

export const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(add, (state, action) => {
                // haven't reached max && isn't already in team
                if(state.ids.length < MAX_TEAM_MEMBERS && !state.ids.includes(action.payload)) {
                    state.ids.push(action.payload)
                }
            })
            .addCase(remove, (state, action) => {
                // only take action if pokemon id is in state
                if(state.ids.includes(action.payload)) {
                    const index = state.ids.indexOf(action.payload)
                    state.ids.splice(index, 1)
                }
            })
    }
})