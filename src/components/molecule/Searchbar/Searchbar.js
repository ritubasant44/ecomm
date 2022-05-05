import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from '@material-ui/icons/Close';
import "./Searchbar.css";

function Searchbar() {
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchShow, setSearchShow] = useState(false); 

  useEffect(() => {
    const loadPosts = async () => {
      const response = await axios.get("http://localhost:9090/getproduct");
      setPosts(response.data);
      console.log(response);
    }
    loadPosts();
  }, []);

  const handleFilter= (event) => {
    if(event.target.value===""){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
    setSearchTitle(event.target.value)
}

  const clearInput = () => {
    setSearchTitle("");
    setSearchShow(false);

}
  return (
    <div>
    <div className="input-group">
      <input 
       className="form-control search-bar plp-no__results"
      type="text" 
      placeholder="Search" 
      onChange={handleFilter} 
      value={searchTitle}
      />
       <div className="input-group-append searchicon">
            {posts.length === 0 ? 
            (<SearchIcon />) 
            : 
            (<CloseIcon id="clearbtn" onClick={clearInput} />)}        
        </div>
        </div>
      {
        searchShow ? (
          posts.filter((value) => 
          {
            if(searchTitle === "") {
              return value;
            } else 
            if(value.Appliances.toLowerCase().includes(searchTitle.toLowerCase())) {
              return value;
            }
          }
          )
          .map((post, key) =>  
          <div className="dataresult">
            <a href={post.acUrl}>
             <li className="dataitem" key={post.Product}>{post.Appliances} </li>
             </a>
          </div>
          
          )
        ) : (
          
          null
        
          )}
          </div>
  );
}
export default Searchbar;