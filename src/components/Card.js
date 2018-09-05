import React from 'react';
import { Card, CardMedia, CardContent, Typography, withStyles, ButtonBase } from '@material-ui/core';
import image from '../image.png';

const styles = theme => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%' // 16:9
    },
    cardContent: {
        flexGrow: 1
    },
    button: {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
});

const ADCard = ({ classes, title }) => {
    return (
        <Card className={classes.card}>
            <ButtonBase className={classes.button}>
                <CardMedia className={classes.cardMedia} title="Image title" image={image} />
            </ButtonBase>
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="headline" component="h2">
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default withStyles(styles)(ADCard);
