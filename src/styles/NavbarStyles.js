import { alpha } from "@mui/material/styles";

const styles = theme => ({
    root: {
        width: "100%",
        marginBottom: 0,
        "& .MuiInputBase-root": {
            color: "inherit",
            width: "100%"
        },
        "& .MuiInputBase-input": {
            padding: theme.spacing(1, 1, 1, 10),
            transition: theme.transitions.create("width"),
            width: "100%",
            [theme.breakpoints.up("sm")]: {
                width: 120,
                "&:focus": {
                    width: 200
                }
            }
        },
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto"
        }
    },
    searchIcon: {
        width: theme.spacing(9),
        height: "100%",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default styles;