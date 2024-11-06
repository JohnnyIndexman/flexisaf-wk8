import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

function CardItems({ data, handleDelete }) {
  return (
    <Card sx={{
      height: 250, 
      display: "flex",
      flexDirection: "column"
    }}>
      <CardHeader titleTypographyProps={{ variant: "subtitle1"}} title={data.title}  action={
          <IconButton onClick={ () => handleDelete(data.id)} sx={{color: "secondary.main"}}>
            <DeleteOutline/>
          </IconButton>
        } />
      <CardContent>
        <Typography variant="bodyText2" color="textSecondary">{data.body}</Typography>
      </CardContent>
    </Card>
  );
}

export default CardItems;
