export interface Employer {
    id: number;
    item: string;
}

export interface EmployerTableProps {
    employers: Employer[];
}

export interface JobTitle {
    id: number;
    item: string;
}

export interface JobTitleTableProps {
    jobTitles: JobTitle[];
}