import { MdSearch } from "react-icons/md";

const Search = ({handleSearch }) => {
    return (
        <div className="search">
            <MdSearch className="search-icons" size="1.3rem" />
            <input type="text" placeholder="search here..." onChange={(e)=> handleSearch(e.target.value)} />
        </div>
    )
}
export default Search;