import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { IconButton } from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({});

export default function DisplayLabel(){
    const classes = useStyles();
    const [st,incrementX] = useState({
        x:0,
        regNo:0,
        studentName:'',
        grade:'',
        section:''
    });

    useEffect(()=>{
        console.log('ran since the value changed');
    },[]);

    return(
        <>
        <h3>Ram is awesome{st.x}</h3>
        <h1>{st.x}</h1>
        <button onClick={()=>incrementX(st.x+1)}> CLICK ME </button>
        </>
    );

}
