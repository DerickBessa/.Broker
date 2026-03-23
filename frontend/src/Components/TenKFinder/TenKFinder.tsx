import React, { useEffect, useState } from "react";
import { CompanyTenK } from "../../company";
import { getTenK } from "../../api";
import TenKFinderItem from "./TenKFinderItem/TenKFinderItem";
import Spinner from "../Spinners/Spinner";

type Props = {
  ticker: string;
};

const TenKFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = useState<CompanyTenK[]>([]);
  
  useEffect(() => {
    const getTenKData = async () => {
      const value = await getTenK(ticker);
      if (value?.data) {
        setCompanyData(value.data);
      }
    };
    getTenKData();
  }, [ticker]);

  return (
    <div className="inline-flex rounded-md shadow-sm m-4" role="group">
      {companyData.length > 0 ? (
        companyData.slice(0, 5).map((tenK) => {
          return <TenKFinderItem key={tenK.fillingDate} tenK={tenK} />;
        })
      ) : (
        <p className="text-sm text-slate-400">No 10-K filings available</p>
      )}
    </div>
  );
};

export default TenKFinder;
