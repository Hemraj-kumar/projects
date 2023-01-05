import React,{forwardRef} from 'react';
import {CardContent, Typography,Card} from "@mui/material";
import './Message.css';
const Message = forwardRef(({userName,m},ref) => {
    const isUser = userName === m.userName;
    return (
        <div ref={ref} className={`m ${isUser && `m__user`}`}>
            <Card className={isUser? "m__userCard" : "m__guestCard"}>
                <CardContent>
                    <Typography
                    color="white"
                    variant="h5"
                    component="h2">
                        {!isUser && `${m.userName || "Unknown User : "} :`}  {m.m}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
});

export default Message;