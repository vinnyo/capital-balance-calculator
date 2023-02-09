export interface InputValues{
    salary: number;
    contribution_rate: number;
    inflation_rate: number;
    earnings: number;
    fees: number;
    tax: number;
    withdrawal_rate: number;
    withdrawal_age_start: number;
    contribution_age_stop: number;
}

export interface YearlyProjection{
    year: number;
    age: number;
    start_balance: number;
    contributions: number;
    earnings: number;
    fees: number;
    tax: number;
    withdrawal: number;
    end_balance: number;
}

