import { AGE_PERIOD_END, AGE_PERIOD_START, YEAR_START } from '../constants';
import { InputValues, YearlyProjection } from '../types';

export function calculateAnnualProjections(
    input: InputValues
): YearlyProjection[] {
    const year_start = YEAR_START;
    const age_start = AGE_PERIOD_START;
    const age_end = AGE_PERIOD_END;

    let projections = [];
    let prevRef:YearlyProjection = null;
    for(let i = age_start; i <= age_end ; i++){
        const year = (prevRef?.year || year_start -1) +1;
        const age =  (prevRef?.age || age_start -1) +1;
        const start_balance = (prevRef?.end_balance || input.salary);
        const contributions = input.salary * input.contribution_rate / 100;
        const earnings = (start_balance + contributions) * input.earnings / 100;
        const fees = (start_balance + contributions + earnings) * input.fees / 100;
        const tax = (contributions + earnings) * input.tax / 100;
        const withdrawal = (i >= input.withdrawal_age_start) ? start_balance * input.withdrawal_rate / 100 : 0;
        const end_balance = start_balance + contributions + earnings - fees - tax - withdrawal;
        prevRef = {year, age, start_balance, contributions, earnings, fees, tax, withdrawal, end_balance};
        projections.push(prevRef);
    }
    return projections;
}
