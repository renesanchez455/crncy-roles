import React, { useState } from 'react';
import '../styles/TableStyles.css';
import { JobTitleTableProps } from '../interfaces/types';


const JobTitlesTable: React.FC<JobTitleTableProps> = ({ jobTitles }) => {
    const [currentPage, setCurrentPage] = useState(1); //setting state of current page number to page 1
    const [itemsPerPage] = useState(10); //setting state for items to view per page to 10

    const totalPages = Math.ceil(jobTitles.length / itemsPerPage); 
    const indexOfLastJobTitle = currentPage * itemsPerPage; //Index of first and last job title on the current page
    const indexOfFirstJobTitle = indexOfLastJobTitle - itemsPerPage;

    // Getting job titles to display on current page by slicing original job titles array
    const currentJobTitles = jobTitles.slice(indexOfFirstJobTitle, indexOfLastJobTitle);

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
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, currentPage + 2);
        // Checking that maximum visible pages is 5
        if (endPage - startPage < maxVisiblePages) {
            if (startPage === 1) {
                endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
            } else {
                startPage = Math.max(1, endPage - maxVisiblePages + 1);
            }
        }
        //pushing visible page numbers to array
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };
    //Render table with retrieved data and pagination
    return (
        <div className="PosTable">
            <h3>Job Titles</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Job Title</th>
                    </tr>
                </thead>
                <tbody>
                    {currentJobTitles.map((jobTitle) => (
                        <tr key={jobTitle.id}>
                            <td>{jobTitle.id}</td>
                            <td>{jobTitle.item}</td>
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

export default JobTitlesTable;