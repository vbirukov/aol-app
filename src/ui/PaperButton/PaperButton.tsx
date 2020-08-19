import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Icon from "@material-ui/core/Icon";
import './PaperButton.css';

interface IProps {
    caption: String;
    iconName: String;
    clickHandler: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default function PaperButton(props: IProps) {
    return (
        <Paper
            onClick={props.clickHandler}
            className="PaperButton">
            <Typography variant="button" display="block" gutterBottom>
                {props.caption}
            </Typography>
            <Icon>{props.iconName}</Icon>
        </Paper>
    );
}
