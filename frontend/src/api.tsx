import axios from "axios";
import {
  CompanyBalanceSheet,
  CompanyCashFlow,
  CompanyCompData,
  CompanyIncomeStatement,
  CompanyKeyMetrics,
  CompanyProfile,
  CompanySearch,
  CompanyTenK,
  CompanyHistoricalDividend,
  Dividend,
} from "./company";

export interface SearchResponse {
  data: CompanySearch[];
}

interface FinnhubSearchResponse {
  count: number;
  result: CompanySearch[];
}

const api = process.env.REACT_APP_API_URL;

export const searchCompanies = async (query: string) => {
  try {
    const data = await axios.get<FinnhubSearchResponse>(
      `${process.env.REACT_APP_API_URL}/api/fmp/search?query=${query}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An expected error has occured.";
    }
  }
}

export const getCompanyProfile = async (query: string) => {
  try {
    const data = await axios.get<CompanyProfile>(
      `${api}/api/fmp/profile/${query}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getKeyMetrics = async (query: string) => {
  try {
    const data = await axios.get<CompanyKeyMetrics[]>(
      `${api}/api/fmp/key-metrics/${query}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getIncomeStatement = async (query: string) => {
  try {
    const data = await axios.get<CompanyIncomeStatement[]>(
      `${api}/api/fmp/income-statement/${query}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getBalanceSheet = async (query: string) => {
  try {
    const data = await axios.get<CompanyBalanceSheet[]>(
      `${api}/api/fmp/balance-sheet/${query}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getCashFlow = async (query: string) => {
  try {
    const data = await axios.get<CompanyCashFlow[]>(
      `${api}/api/fmp/cash-flow/${query}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getCompData = async (query: string) => {
  try {
    const data = await axios.get<string[]>(
      `${api}/api/fmp/peers/${query}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getTenK = async (query: string) => {
  try {
    const data = await axios.get<CompanyTenK[]>(
      `${api}/api/fmp/ten-k/${query}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getHistoricalDividend = async (query: string) => {
  try {
    const data = await axios.get<CompanyHistoricalDividend>(
      `${api}/api/fmp/dividends/${query}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};