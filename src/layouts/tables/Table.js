// Table.js

import React from "react";

function Table({ data }) {
  if (data.length === 0) return null;

  // Assuming data[0] contains headers
  const headers = Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map((header, index) => (
              <td key={index}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
