import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./NavBar.module.css";

export default function NavBar(props) {   
   return (
      <div className={style.container}>
        <SearchBar onSearch={props.onSearch}/>
      </div>
   );
}
