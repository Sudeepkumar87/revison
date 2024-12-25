import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";

const Customization = ({
  handleSearchClick,
  anchorElSearch,
  anchorElTime,
  handleCloseSearch,
  handlePopularityClick,
  anchorElPopularity,
  handleTimeClick,
  handleClosePopularity,
  handleCloseTime,
  handleSelectSearch,
  selectedSearch,
  handleSelectPopularity,
  selectedPopularity,
  handleSelectTime,
  selectedTime
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        paddingBottom: "2rem",
      }}
    >
      <Typography sx={{ fontSize: "12px", color: "#000" }}>Search:</Typography>
      <div>
        <Button
          id="search-button"
          variant="outlined"
          disableElevation
          onClick={handleSearchClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
           {selectedSearch} 
        </Button>
        <Menu
          id="search-menu"
          MenuListProps={{ "aria-labelledby": "search-button" }}
          anchorEl={anchorElSearch}
          open={Boolean(anchorElSearch)}
          onClose={handleCloseSearch}
        >
         <MenuItem
              onClick={() => handleSelectSearch("story")}
              disableRipple
            >
              Stories
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem
              onClick={() => handleSelectSearch("comment")}
              disableRipple
            >
              Comments
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem
              onClick={() => handleSelectSearch("ask_hn")}
              disableRipple
            >
              Ask HN
            </MenuItem>
            <MenuItem
              onClick={() => handleSelectSearch("show_hn")}
              disableRipple
            >
              Show HN
            </MenuItem>
            <MenuItem
              onClick={() => handleSelectSearch("Launch HN")}
              disableRipple
            >
              Launch HN
            </MenuItem>
            <MenuItem onClick={() => handleSelectSearch("Jos")} disableRipple>
              Jos
            </MenuItem>
            <MenuItem onClick={() => handleSelectSearch("poll")} disableRipple>
              Polls
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
        
        </Menu>
      </div>

      <Typography sx={{ fontSize: "12px", color: "#000" }}>by</Typography>
      <div>
        <Button
          id="popularity-button"
          variant="outlined"
          disableElevation
          onClick={handlePopularityClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
           {selectedPopularity} 
        </Button>
        <Menu
          id="popularity-menu"
          MenuListProps={{ "aria-labelledby": "popularity-button" }}
          anchorEl={anchorElPopularity}
          open={Boolean(anchorElPopularity)}
          onClose={handleClosePopularity}
        >
            <MenuItem
              onClick={() => handleSelectPopularity("Popularity")}
              disableRipple
            >
              Popularity
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
          <MenuItem
              onClick={() => handleSelectPopularity("Date")}
              disableRipple
            >
              Date
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
          
         
    
        </Menu>
      </div>

      <Typography sx={{ fontSize: "12px", color: "#000" }}>for</Typography>
      <div>
        <Button
          id="time-button"
          variant="outlined"
          disableElevation
          onClick={handleTimeClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
           {selectedTime} 
        </Button>
        <Menu
          id="time-menu"
          MenuListProps={{ "aria-labelledby": "time-button" }}
          anchorEl={anchorElTime}
          open={Boolean(anchorElTime)}
          onClose={handleCloseTime}
        >
          <MenuItem
              onClick={() => handleSelectTime("Last 24h")}
              disableRipple
            >
              Last 24h
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem
              onClick={() => handleSelectTime("Past Week")}
              disableRipple
            >
              Past Week
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem
              onClick={() => handleSelectTime("Past Month")}
              disableRipple
            >
              Past Month
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem
              onClick={() => handleSelectTime("Past Year")}
              disableRipple
            >
              Past Year
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem
              onClick={() => handleSelectTime("Custom range")}
              disableRipple
            >
              Custom range
            </MenuItem>
        </Menu>
      </div>
    </Box>
  );
};

export default Customization;
