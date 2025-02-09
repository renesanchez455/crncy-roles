import { Container, Typography, Paper, Box } from "@mui/material";
import EmployerTable from "./Employer-Table";
import JobTitlesTable from "./Job-Titles-Table";

export default function GroupedTables() { //The tables are grouped in this page to avoid clutter in App.tsx
    return (
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
            <Container maxWidth="md">
                <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Employers
                    </Typography>
                    <EmployerTable />
                </Paper>
            </Container>
            <Container maxWidth="md">
                <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Job Titles
                    </Typography>
                    <JobTitlesTable />
                </Paper>
            </Container >
        </Box>
    );
};