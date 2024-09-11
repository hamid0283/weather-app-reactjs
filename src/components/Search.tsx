import searchIcon from "../assets/icons/search.png";

const Search = () => {
  return (
    <div className="input-box">
      <input type="text" placeholder="Search" />
      <button>
        <img src={searchIcon} alt="" />
      </button>
    </div>
  );
};

export default Search;
