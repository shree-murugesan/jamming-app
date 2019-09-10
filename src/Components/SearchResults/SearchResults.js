import React from 'react';
import './SearchResults.css';

import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component {

    renderAction() {
        console.log(this.props.noResults);
        if (this.props.noResults) {
            return <p>No results found</p>
        }
    }

    render() {
        return(
            <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks={this.props.searchResults}
                        onAdd={this.props.onAdd}
                        isRemoval={false}/>
            {this.renderAction()}
            </div>
        )
    }
}

export default SearchResults;
