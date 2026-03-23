import React, { useEffect, useState } from "react";
import { CompanyProfile } from "../../company";
import { Link, useParams } from "react-router-dom";
import { getCompanyProfile } from "../../api";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard";
import Tile from "../../Components/Tile/Tile";
import Spinner from "../../Components/Spinners/Spinner";
import CompFinder from "../../Components/CompFinder/CompFinder";

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();

  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data);
    };
    getProfileInit();
  }, []);

  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />
          <CompanyDashboard ticker={ticker!}>
            <Tile title="Company Name" subTitle={company.name} />
			<Tile title="Market Cap" subTitle={"$" + company.marketCapitalization.toString()} />
			<Tile title="Industry" subTitle={company.finnhubIndustry} />
			<Tile title="Exchange" subTitle={company.exchange} />
			<Tile title="IPO Date" subTitle={company.ipo} />
			<Tile title="Website" subTitle={company.weburl} />
			<CompFinder ticker={company.ticker} />
            <p className="bg-white shadow rounded text-medium font-medium text-gray-900 p-3 mt-1 m-4">
			{company.name} — {company.finnhubIndustry} | {company.exchange}
			</p>
          </CompanyDashboard>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CompanyPage;
