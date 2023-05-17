import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "645b7b0845337391f9f26e08",
      user: "645b7a6245337391f9f26dff",
      title: "New Note updated",
      description: "Please access notes okay",
      tag: "General",
      date: "2023-05-10T11:07:52.739Z",
      __v: 0,
    },
    {
      _id: "646473075c254b3e5dfbacc6",
      user: "645b7a6245337391f9f26dff",
      title: "New Note2",
      description: "Please access notes2",
      tag: "General",
      date: "2023-05-17T06:24:07.852Z",
      __v: 0,
    },
    {
      _id: "6464730e5c254b3e5dfbacc8",
      user: "645b7a6245337391f9f26dff",
      title: "New Note22",
      description: "Please access notes22",
      tag: "General",
      date: "2023-05-17T06:24:14.307Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  // Add a Note
  const addNote = (title, description, tag) => {
    //TODO
    console.log("Adding a new Note");
    const note = {
      _id: "6464730e5c254b3e5dfbacc8",
      user: "645b7a6245337391f9f26dff",
      title: title,
      description: description,
      tag: tag,
      date: "2023-05-17T06:24:14.307Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // Delete a Note
  const deleteNote = (id) => {
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes)
  };
  // Edit a Note
  const editNote = (id, title, description, tag) => {};
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
