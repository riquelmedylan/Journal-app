import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from "../../actions/notes";

export const NotesAppBar = () => {
    const { active } = useSelector((state) => state.notes);

    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(startSaveNote(active));
    };

    const handlePictureClick = () => {
        document.querySelector("#fileSelector").click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            dispatch(startUploading(file));
        }
    };

    const noteDate = moment();

    return (
        <div className="notes__appbar">
            <span>{noteDate.format("LL")}</span>

            <input
                id="fileSelector"
                type="file"
                name="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
            />

            <div>
                <button onClick={handlePictureClick} className="btn">
                    Picture
                </button>

                <button onClick={handleSave} className="btn">
                    Save
                </button>
            </div>
        </div>
    );
};
