import Link from "next/link"

import React, { useContext, useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
import PersonIcon from "@material-ui/icons/Person"
import AssignmentIcon from "@material-ui/icons/Assignment"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
// import AdminMenu from "./Menu"

import { loadUser } from "../redux/userActions"
import { signOut } from "next-auth/client"
import {
  AppBar,
  Toolbar,
  IconButton,
  div,
  Typography,
  Button,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Alert } from "@material-ui/lab"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Header = () => {
  //   const dispatch = useDispatch()
  const classes = useStyles()

  //   const { user, loading } = useSelector((state) => state.loadUser)

  //   useEffect(() => {
  //     if (!user) {
  //       dispatch(loadUser())
  //     }
  //   }, [dispatch, user])

  return (
    <div>
      <div component="nav">
        <AppBar position="static" style={{ color: "primary" }}>
          <Toolbar>
            <IconButton aria-label="menu">
              <Link href="/">
                {<img src="/v3.png" height="40px" alt="logo" />}
              </Link>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              OpenFreeUni
            </Typography>

            <>
              {/* {userInfo ? ( */}
              <>
                {/* <div style={{ marginTop: "0.25rem" }}>
                  <Button color="inherit" style={{ marginRight: "0.5rem" }}>
                    <Link style={{ color: "white" }} href="/courses">
                      Resources
                    </Link>
                  </Button>
                </div> */}

                <div
                  style={{
                    marginRight: "0.25rem",
                    marginLeft: "0.75rem",
                    marginTop: "0.75",
                  }}
                >
                  <Typography style={{ marginTop: "0.25rem" }}>
                    {" "}
                    {/* Hello {userInfo.firstName} {userInfo.lastName} */}
                  </Typography>
                </div>
                {/* {userInfo?.isAdmin && <AdminMenu />} */}
                <div style={{ marginTop: "0.25rem" }}>
                  <Button color="inherit" style={{ marginRight: "0.5rem" }}>
                    <ExitToAppIcon style={{ marginRight: "0.25rem" }} />
                    LogOut
                  </Button>
                </div>
              </>
              {/* ) : ( */}
              <>
                {" "}
                {/* <Button color="inherit">
                  <Link style={{ color: "white" }} href="/register">
                    <AssignmentIcon style={{ marginRight: "0.25rem" }} />
                    Register
                  </Link>
                </Button> */}
                {/* <Button color="inherit">
                  <Link style={{ color: "white" }} href="/login">
                    <PersonIcon style={{ marginRight: "0.25rem" }} />
                    Login
                  </Link>
                </Button> */}
              </>
              {/* )} */}
            </>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  )
}

export default Header
