import { useEffect, useState } from 'react';
import EmployerTable from '../components/EmployerTable';
import JobTitlesTable from '../components/JobTitlesTable';
import axios from 'axios';
import { CircularProgress, Alert } from '@mui/material';
import '../styles/ProgressStyles.css'
import { Employer, JobTitle } from '../interfaces/types';

export default function CrncyApiCall() {
    //These store the employer and job title data retrieved from the API
    const [employers, setEmployers] = useState<Employer[]>([]);
    const [jobTitles, setJobTitles] = useState<JobTitle[]>([]); 

    const [loading, setLoading] = useState<boolean>(true); //Holds data loading state, intially set to true
    const [error, setError] = useState<string | null>(null); //Holds error messages
    //Fetching API data and updating state variables
    useEffect(() => {
        axios.get('https://auto-pay-api-sgiognjnfa-uc.a.run.app/auto-pay/get-ui-params')
            .then(response => {
                setEmployers(response.data.employers);
                setJobTitles(response.data.jobTitles);
            })
            .catch(error => {
                setError('Failed to load data. Please try again later.');
            })
            .finally(() => {
                setLoading(false); //update loading state to false
            });
    }, []);
    //Display loading status while retrieving data
    if (loading) {
        return (
            <div className="circular-progress-style">
                <CircularProgress />
            </div>
        );
    }
    //Display error alert if an error is returned during data retrieval
    if (error) {
        return (
            <Alert severity="error" style={{ marginBottom: '20px' }}>
                {error}
            </Alert>
        );
    }
    //Display tables if data retrieval was successful
    return (
        <div>
            <EmployerTable employers={employers} />
            <JobTitlesTable jobTitles={jobTitles} />
        </div>
    );

}
