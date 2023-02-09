import { InputValues } from "./types";

export const YEAR_START: number = 2010;
export const AGE_PERIOD_START: number = 25;
export const AGE_PERIOD_END: number = 95;

export const DEFAULT_INPUT: InputValues = {
    salary: 100000,
    contribution_rate: 9.5,
    inflation_rate: 3,
    earnings: 7.5,
    fees: 2,
    tax: 15,
    withdrawal_rate: 5,
    withdrawal_age_start: 66,
    contribution_age_stop: 66
}