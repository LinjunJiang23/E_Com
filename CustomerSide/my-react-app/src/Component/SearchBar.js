import * as React from 'react';

class SearchBar extends React.Component 
{
	render() {
		return (
		  <form>
		    <>
	          <input
	            type="text"
	            placeholder="Search..."
	          />
	          <button type="submit">Search</button>
		    </>
          </form>
        );
    }
}
export default SearchBar;