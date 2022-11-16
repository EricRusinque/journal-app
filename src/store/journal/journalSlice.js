import { createSlice } from "@reduxjs/toolkit";

  
export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'ACB1234',
        //     title: '',
        //     body: '',
        //     date: 123467,
        //     imageUrls: [], //https://foto.jpg etc...
        // }
    },
    reducers: {
        savingNewNote: ( state ) => {
            state.isSaving = true;
        },
        addNewEmptyNote: ( state, action ) => {
            state.notes.push( action.payload );
            state.isSaving = false
        },
        setActiveNote: ( state, action ) => {
            state.active = action.payload
        },
        setNotes: ( state, action ) => {
            state.notes = action.payload
        },
        setSaving: ( state ) => {
            state.isSaving = true;
            //TODO: menasaj error
        },
        updateNote: ( state, action ) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => {

                if( note.id === action.payload.id ) {
                    return action.payload;
                }
                return note;
            });

            //Todo: mostrar mensaje de actualizacion
        },
        deleteNoteById: ( state, action ) => {

        },
    }

});

export const { 
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById
} = journalSlice.actions