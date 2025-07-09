import { calculateInvestmentResults, formatter } from "../util/investment"

export default function ResultTable({ input }) {
    const resultData = calculateInvestmentResults(input)
    console.log(resultData)
    return (

        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>

                {resultData.map(yearData => {
                    const totalIntrest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year
                    const totalAmountInvested = yearData.valueEndOfYear - totalIntrest;
                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalIntrest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>


                    </tr>
                })}


            </tbody>
        </table>



    )
}