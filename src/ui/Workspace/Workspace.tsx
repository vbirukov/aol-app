import React from 'react';
import './Workspace.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import PaperButton from "../PaperButton/PaperButton";

type ButtonMeta = {
    caption: String;
    iconName: String;
}

interface IProps {
    items: ButtonMeta[]
}

export default function SimpleContainer(props: IProps) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
            >
                { props.items.map((item, index) => {
                    return <Grid item xs={4}>
                            <PaperButton
                                key={index}
                                caption={item.caption}
                                iconName={item.iconName} /> </Grid>
                })}
            </Grid>
        </React.Fragment>
    );
}
