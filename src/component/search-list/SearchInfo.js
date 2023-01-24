import React from "react";
import {Modal} from "@mui/material";
import {Search} from "@mui/icons-material";

const SearchInfo = (props) => {
    return(
        <Modal open={props.open} onClose={props.handleClose} aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description">
            <div className="h-96 w-96 bg-white absolute top-1/2 left-1/2 rounded-lg drop-shadow-md overflow-y-scroll" style={{transform:'translate(-50%, -50%)'}}>
                <div className="my-1 mx-2 border-b py-2">
                    <Search/>
                    <input/>
                </div>
            </div>
        </Modal>
    )
}

export default SearchInfo;