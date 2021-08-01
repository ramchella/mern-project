import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { borderRadius, display } from "@material-ui/system";

export default makeStyles(()=>({
    appBar :{
        borderRadius:15,
        margin:'30px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
    }
}));
