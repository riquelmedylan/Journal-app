import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { activeNote, startDeleating } from "../../actions/notes";
import { useForm } from "../../hooks/useForm";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
    const dispatch = useDispatch();

    const { active: note } = useSelector((state) => state.notes);

    const [values, handleInputChange, reset] = useForm(note);

    const activeId = useRef(note.id);

    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }
    }, [note, reset]);

    useEffect(() => {
        dispatch(activeNote(values.id, { ...values }));
    }, [values, dispatch]);

    const handleDelete = () => {
        dispatch(startDeleating(values.id));
    };

    const { body, title } = values;

    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    onChange={handleInputChange}
                    name="title"
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    value={body}
                    onChange={handleInputChange}
                    name="body"
                ></textarea>

                {note.url && (
                    <div className="notes__image">
                        <img src={note.url} alt="imagen" />
                    </div>
                )}
            </div>
            <button onClick={handleDelete} className="btn btn-danger">
                Delete
            </button>
        </div>
    );
};
