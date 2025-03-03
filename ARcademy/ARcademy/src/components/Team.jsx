import React from "react";

export const Team = (props) => {
  // Function to group data into rows with a given number of items per row
  const groupIntoRows = (data, itemsPerRow) => {
    let rows = [];
    for (let i = 0; i < data.length; i += itemsPerRow) {
      rows.push(data.slice(i, i + itemsPerRow));
    }
    return rows;
  };

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            Enthusiasm fuels the drive to create groundbreaking and
            engaging learning experiences through playARground.
          </p>
        </div>
        {props.data ? (
          groupIntoRows(props.data, 2).map((row, rowIndex) => (
            <div className="row" key={`row-${rowIndex}`}>
              {row.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-6 col-sm-6 team">
                  <div className="thumbnail">
                    <img src={d.img} alt={d.name} className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
