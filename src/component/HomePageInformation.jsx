import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Customization from "./Customization";
import { useDispatch } from "react-redux";
import { fetchApiData,fetchDropDownApiData } from "../api/GetApiAction";
import { Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { useDebounce } from "use-debounce";

const HomePageInformation = ({ searchTerm }) => {
  const[description, setDescription]=useState(
    []
  )
 const [selectedPageInformation, setSelectedPageInformation] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterSearchElement, setfilterSearchElement] = React.useState(null);
  const [filterPopularityElement, setfilterPopularityElement] = React.useState(null);
  const [filterTimeElement, setfilterTimeElement] = React.useState(null);
  const [selectedSearch, setSelectedSearch] = useState("story");
  const [selectedPopularity, setSelectedPopularity] = useState("Date");
  const [selectedTime, setSelectedTime] = useState("All time");

  const createTag = (search, popularity, time) => {
    return `${search}-${popularity}-${time}`;
  };

  const handleSearchClick = (event) => {
    setfilterSearchElement(event.currentTarget);
  };

  const handleCloseSearch = () => {
    setfilterSearchElement(null);
  };

  const handleSelectSearch = (option) => {
   
    setSelectedSearch(option);
    handleCloseSearch();
  };

  const handlePopularityClick = (event) => {
    setfilterPopularityElement(event.currentTarget);
  };

  const handleClosePopularity = () => {
    setfilterPopularityElement(null);
  };

  const handleSelectPopularity = (option) => {
    setSelectedPopularity(option);
    handleClosePopularity();
  };

  const handleTimeClick = (event) => {
    setfilterTimeElement(event.currentTarget);
  };

  const handleCloseTime = () => {
    setfilterTimeElement(null);
  };

  const handleSelectTime = (option) => {
    setSelectedTime(option);
    handleCloseTime();
  };
  const [value] = useDebounce(searchTerm, 200);

  const dispatch = useDispatch();
  const handlerApiData = async (currentPage) => {
    try {
      const tag = `${selectedSearch}${selectedPopularity ? `:${selectedPopularity}` : ''}${selectedTime ? `:${selectedTime}` : ''}`;
      const response = await dispatch(
        fetchApiData({
          Number: 5,
          page: currentPage,
          url: searchTerm,
         tag:selectedSearch
        })
      );
      const response1=await dispatch(fetchDropDownApiData({
        tag:selectedPopularity
      }))
      console.log("resp",response1)
      const getResponse = response.hits;
      const dropDownResponse=response.hits;

      setSelectedPageInformation(getResponse,dropDownResponse);
    } catch (err) {
      console.error("Error in HomePageApiData:", err);
    }
  };

  useEffect(() => {
    handlerApiData(currentPage);
  }, [currentPage, value, selectedSearch,selectedPopularity,selectedTime]);
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box sx={{ background: "#f6f6ef" }}>
      <Box>
        <Customization
          handleSearchClick={handleSearchClick}
          anchorElSearch={filterSearchElement}
          filterTimeElement={filterTimeElement}
          handleCloseSearch={handleCloseSearch}
          handlePopularityClick={handlePopularityClick}
          filterPopularityElement={filterPopularityElement}
          handleTimeClick={handleTimeClick}
          handleClosePopularity={handleClosePopularity}
          handleCloseTime={handleCloseTime}
          handleSelectSearch={handleSelectSearch}
          selectedSearch={selectedSearch}
          handleSelectPopularity={handleSelectPopularity}
          selectedPopularity={selectedPopularity}
          handleSelectTime={handleSelectTime}
          selectedTime={selectedTime}
        />
      </Box>
      <Box sx={{}}>
        <ul style={{ listStyleType: "none", padding: "30px" }}>
          <div>
            {selectedPageInformation?.map((item) => (
              <Box
                key={item.title}
                sx={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Typography
                  sx={{ textDecoration: "none", paddingBottom: "4px" }}
                >
                  {item.title}
                </Typography>
                {item?.url && item.url.length > 0 && (
                  <Typography
                    component="a"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      textDecoration: "none",
                      fontSize: "13px",
                      color: "#828282",
                    }}
                  >
                    ({item.url})
                  </Typography>
                )}
              </Box>
            ))}
          </div>
        </ul>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          count={5}
          page={currentPage}
          onChange={handlePageChange}
          shape="rounded"
        />
      </Box>
    </Box>
  );
};

export default HomePageInformation;
