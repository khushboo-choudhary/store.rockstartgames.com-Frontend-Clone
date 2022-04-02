import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import {Link} from 'react-router-dom'

export default function MenuListComposition() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
                   <button
            className="flex items-center font-bold cursor-pointer"
            // onClick={() => onClickUserMenu()}
          ><img className='w-8 h-8 rounded-full' src='https://images.ctfassets.net/wn7ipiv9ue5v/4ajpWv2L0zlK6pObfLPOcL/d6d3875cb5a5bfc074c6a92cf6dce0c2/rockstar_logo.png?w=104&h=&fm=webp&q=' alt=''/>
            <p className="font-bold cursor-pointer text-white">{"Shodkk"}</p>
            <img
              className="ml-1 w-3 h-3"
              src="https://i.ibb.co/ZzXv85c/pngwing-com.png"
              alt="pngwing-com"
            />
          </button>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    className="bg-[#161616] text-white"
                  >
                    <MenuItem onClick={handleClose}><Link className=" w-full hover:bg-[#4F484B] p-1 rounded bg-[#161616]  text-white" to="/account">My account</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link className="w-full hover:bg-[#4F484B] p-1 rounded bg-[#161616] text-white" to="/offers">My Offers</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link className="w-full hover:bg-[#4F484B] p-1 rounded bg-[#161616] text-white" to="/member">Rockstar Social Club </Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link className="w-full hover:bg-[#4F484B] p-1 rounded bg-[#161616] text-white" to="/">Sign Out</Link></MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
