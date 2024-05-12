import { Avatar, Drawer, List, ListItemButton, ListItemIcon, Stack, Toolbar } from "@mui/material";
import sizeConfigs from "../../configs/sizeConfigs";
import assets from "../../assets";
import colorConfigs from "../../configs/colorConfigs";
import { deepOrange } from "@mui/material/colors";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";

const Sidebar = () => {
    return (
        <Drawer
            variant="persistent"
            open={true}
            sx={{
                width: sizeConfigs.sidebar.width,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: sizeConfigs.sidebar.width,
                    boxSizing: "border-box",
                    borderRight: "0px",
                    backgroundColor: colorConfigs.sidebar.bg,
                    color: colorConfigs.sidebar.color
                }
            }}
        >
            <List disablePadding>
                <Toolbar sx={{ marginBottom: "20px" }}>
                    <Stack
                        sx={{ width: "150%" }}
                        direction="row"
                        justifyContent="center"
                    >
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>JM</Avatar>
                    </Stack>
                </Toolbar>
                {appRoutes.map((route, index) => (
                    route.sidebarProps ? (
                        route.child ? (
                            <SidebarItemCollapse item={route} key={index} />
                        ) : (
                            <SidebarItem item={route} />
                        )
                    ) : null
                ))}
            </List>

        </Drawer>
    );
};

export default Sidebar;