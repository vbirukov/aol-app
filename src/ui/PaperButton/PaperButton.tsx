import React from 'react';
import Paper from '@material-ui/core/Paper';
import Icon from "@material-ui/core/Icon";
import './PaperButton.css';

interface IProps {
    caption: String;
    iconName: String;
}

export default function PaperButton(props: IProps) {
    return (
        <Paper
            className="PaperButton">
            <h3>{props.caption}</h3>
            <Icon>{props.iconName}</Icon>
        </Paper>
    );
}
