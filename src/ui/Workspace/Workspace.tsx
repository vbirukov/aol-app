import React from 'react';
import './Workspace.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import PaperButton from "../PaperButton/PaperButton";
import Container from "@material-ui/core/Container";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { AmplifySignOut } from '@aws-amplify/ui-react'

type ButtonMeta = {
    caption: String;
    iconName: String;
}

interface IProps {
    items: ButtonMeta[]
}

export default function SimpleContainer(props: IProps) {

    const [VideoOpen, setOpen] = React.useState(false);

    const handleClickOpen = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setOpen(true);
    };

    const handleClose = (value:boolean) => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Container maxWidth="sm">
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
                                    clickHandler={handleClickOpen}
                                    caption={item.caption}
                                    iconName={item.iconName} /> </Grid>
                    })}
                </Grid>

                <Dialog aria-labelledby="simple-dialog-title" open={VideoOpen}  onClose={handleClose}>
                    <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/IbT9D1UWoik" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </Dialog>

                <AmplifySignOut />

            </Container>
        </React.Fragment>
    );
}
