import axios from "axios"
import { CompanySearch } from "./company";

interface SearchResponse {
    data: CompanySearch[];
}

// Call into the FinancialModelingPrep.com api to get some stocks information.
export const searchCompanies = async (query: string) => {
    try {
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
        );

        return data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("Error message: ", error.message);
            return error.message;
        }
        else {
            console.log("Unexpected error: ", error);
            return "An unexpected error has occurred.";
        }
    }
}