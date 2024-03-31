import React, { useState } from "react";
import Header from "../../Header/Header";
import { useSelector } from "react-redux";
import "./ListUser.css";

export default function ListUser() {
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const employees = useSelector((state) => state.user.employees);

  const sortedEmployees = [...employees].sort((a, b) => {
    if (sortField) {
      const keys = sortField.split(".");
      const aField = keys.length > 1 ? a[keys[0]][keys[1]] : a[sortField];
      const bField = keys.length > 1 ? b[keys[0]][keys[1]] : b[sortField];

      if (aField < bField) {
        return sortDirection === "asc" ? -1 : 1;
      }
      if (aField > bField) {
        return sortDirection === "asc" ? 1 : -1;
      }
    }
    return 0;
  });

  const handleSort = (field) => {
    setSortField(field);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const [search, setSearch] = useState(""); // Ajoutez ceci si vous ne l'avez pas déjà fait

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredEmployees = sortedEmployees.filter((employee) =>
    Object.values(employee).some(
      (val) =>
        typeof val === "string" &&
        val.toLowerCase().includes(search.toLowerCase()),
    ),
  );

  const [displayCount, setDisplayCount] = useState(10);

  const handleDisplayCountChange = (event) => {
    setDisplayCount(parseInt(event.target.value));
  };

  const [currentPage, setCurrentPage] = useState(1); // Nouvel état pour la page actuelle

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredEmployees.length / displayCount)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const displayedEmployees = filteredEmployees.slice(
    (currentPage - 1) * displayCount,
    currentPage * displayCount,
  );

  return (
    <div className="container">
      <Header />
      <h1 className="h1Employe">Current Employees</h1>
      <div className="filterEntries">
        <div className="EntrieSelect">
          Show
          <select value={displayCount} onChange={handleDisplayCountChange}>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>{" "}
          entries
        </div>
        <div className="SearchBar">
          Search:
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search..."
          />
        </div>
      </div>
      <table className="display">
        <thead>
          <tr>
            <th onClick={() => handleSort("firstName")}>
              First Name{" "}
              {sortField === "firstName"
                ? sortDirection === "asc"
                  ? "↓"
                  : "↑"
                : ""}
            </th>
            <th onClick={() => handleSort("lastName")}>
              Last Name{" "}
              {sortField === "lastName"
                ? sortDirection === "asc"
                  ? "↓"
                  : "↑"
                : ""}
            </th>
            <th onClick={() => handleSort("startDate")}>
              Start Date{" "}
              {sortField === "startDate"
                ? sortDirection === "asc"
                  ? "↓"
                  : "↑"
                : ""}
            </th>
            <th onClick={() => handleSort("department")}>
              Department{" "}
              {sortField === "department"
                ? sortDirection === "asc"
                  ? "↓"
                  : "↑"
                : ""}
            </th>
            <th onClick={() => handleSort("dateOfBirth")}>
              Date of Birth{" "}
              {sortField === "dateOfBirth"
                ? sortDirection === "asc"
                  ? "↓"
                  : "↑"
                : ""}
            </th>
            <th onClick={() => handleSort("address.street")}>
              Street{" "}
              {sortField === "address.street"
                ? sortDirection === "asc"
                  ? "↓"
                  : "↑"
                : ""}
            </th>
            <th onClick={() => handleSort("address.city")}>
              City{" "}
              {sortField === "address.city"
                ? sortDirection === "asc"
                  ? "↓"
                  : "↑"
                : ""}
            </th>
            <th onClick={() => handleSort("address.state")}>
              State{" "}
              {sortField === "address.state"
                ? sortDirection === "asc"
                  ? "↓"
                  : "↑"
                : ""}
            </th>
            <th onClick={() => handleSort("address.zipCode")}>
              Zip Code{" "}
              {sortField === "address.zipCode"
                ? sortDirection === "asc"
                  ? "↓"
                  : "↑"
                : ""}
            </th>
          </tr>
        </thead>
        <tbody>
          {displayedEmployees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.startDate}</td>
              <td>{employee.department}</td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.address.street}</td>
              <td>{employee.address.city}</td>
              <td>{employee.address.state}</td>
              <td>{employee.address.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="BtnPageNbrEntrie">
        <div className="TxtEntries">
          Showing {(currentPage - 1) * displayCount + 1} to{" "}
          {Math.min(currentPage * displayCount, filteredEmployees.length)} of{" "}
          {filteredEmployees.length} entries
        </div>

        <div className="BtnNextPrevious">
          <span className="btnPage" onClick={handlePreviousPage}>
            Previous
          </span>
          <button>{currentPage}</button>
          <span className="btnPage" onClick={handleNextPage}>
            Next
          </span>
        </div>
      </div>
    </div>
  );
}
