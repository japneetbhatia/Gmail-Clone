import React from "react";
import "./Mail.css";
import { useHistory } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

function Mail() {
    const history = useHistory();

    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                <IconButton onClick={() => history.push("/")}>             
                    <ArrowBackIcon />                
                </IconButton>
                <IconButton>
                    <MoveToInboxIcon />
                </IconButton>
                <IconButton>
                    <ErrorIcon />
                </IconButton>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
                <IconButton>
                    <EmailIcon />
                </IconButton>
                <IconButton>
                    <WatchLaterIcon />
                </IconButton>
                <IconButton>
                    <CheckCircleIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
                </div>

                <div className="mail__toolsRight">
                    <IconButton>
                        <UnfoldMoreIcon />
                    </IconButton>
                    <IconButton>
                        
                    </IconButton>
                    <IconButton>
                        
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Mail;