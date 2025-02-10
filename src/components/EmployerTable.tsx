import React, { useState } from 'react';
import '../styles/TableStyles.css';
import { EmployerTableProps } from '../interfaces/types';


const EmployerTable: React.FC<EmployerTableProps> = ({ employers }) => {
    const [currentPage, setCurrentPage] = useState(1); //setting state of current page number to page 1
    const [itemsPerPage] = useState(10); //setting state for items to view per page to 10

    const totalPages = Math.ceil(employers.length / itemsPerPage);
    const indexOfLastEmployer = currentPage * itemsPerPage; //Index of first and last employer on the current page
    const indexOfFirstEmployer = indexOfLastEmployer - itemsPerPage;

    // Getting employers to display on current page by slicing original employers array
    const currentEmployers = employers.slice(indexOfFirstEmployer, indexOfLastEmployer);

    const handleNextPage = () => { //Handling next page without exceeding total pages
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => { //Handling previous page without passing page 1
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageClick = (page: number) => { //Handling clicking on a specific page
        setCurrentPage(page);
    };

    const pageButtons = () => {
        const maxVisiblePages = 5;
        const pageNumbers = [];
        let startPage = Math.max(1, currentPage - 2); //Getting start and end pages for the visible pages
        let endPage = Math.min(totalPages, currentPage + 2);

        if (endPage - startPage < maxVisiblePages) { // Checking that maximum visible pages is 5
            if (startPage === 1) {
                endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
            } else {
                startPage = Math.max(1, endPage - maxVisiblePages + 1);
            }
        }

        for (let i = startPage; i <= endPage; i++) { //pushing visible page numbers to array
            pageNumbers.push(i);
        }

        return pageNumbers;
    };
    //Render table with retrieved data and pagination
    return (
        <div className="PosTable">
            <h3>Employers</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Employer</th>
                    </tr>
                </thead>
                <tbody>
                    {currentEmployers.map((employer) => (
                        <tr key={employer.id}>
                            <td>{employer.id}</td>
                            <td>{employer.item}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                {pageButtons().map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageClick(page)}
                        className={currentPage === page ? 'active' : ''}
                    >
                        {page}
                    </button>
                ))}
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default EmployerTable;