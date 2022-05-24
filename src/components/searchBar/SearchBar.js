import "./SearchBar.scss";
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = () => (
  <div className="bar-container">
    <input
      type="text"
      placeholder="Search colleages or hashtags..."
      className="bar__input"
    />
    <div className="bar__search">
        <SearchIcon style={{ color: "gray" }} fontSize="small"/>
        
    </div>
   
  </div>
);

export default SearchBar;
