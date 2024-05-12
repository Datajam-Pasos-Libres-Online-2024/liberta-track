import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

type Props = {
    open: boolean;
    handleDrawerOpen: () => void;
}

const Topbar = ({ open, handleDrawerOpen }: Props) => {
    return (
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
                Persistent drawer
            </Typography>
        </Toolbar>
    )
}

export default Topbar;