import React, { Component } from 'react';
import Like from './like';
import TableReuse from './tableReuse';

class MovieTable extends Component {

    columns = [
      { path: "title", label: "Title" },
      { path: "genre.name", label: "Genre" },
      { path: "numberInStock", label: "Stock" },
      { path: "dailyRentalRate", label: "Rate" },
      {
        key: "like",
        content: (movie) => (
          <Like liked={movie.liked} onClick={() => this.props.onLiked(movie)} />
        ),
      },
      {
        key: "delete",
        content: (movie) => (
          <button
            onClick={() => this.props.onDelete(movie)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        ),
      },
    ];
    
  render() {
    const { movies ,onSort, sortColumn } = this.props;
    return (
          <TableReuse columns={this.columns} data={movies} onSort={onSort} sortColumn={sortColumn}/>
        );
      }
};
 
export default MovieTable;