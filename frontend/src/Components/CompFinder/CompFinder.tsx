import React, { useEffect, useState } from "react";
import CompFinderItem from "./CompFinderItem/CompFinderItem";
import { CompanyCompData } from "../../company";
import { getCompData } from "../../api";
import Spinner from "../Spinners/Spinner";
type Props = {
  ticker: string;
};

const CompFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = useState<string[]>([]);
  useEffect(() => {
    const getComps = async () => {
	const value = await getCompData(ticker);
	if (value?.data) {
		setCompanyData(value.data);
	}
	};
    getComps();
}, [ticker]);

	return (
		<div className="inline-flex rounded-md shadow-sm m-4" role="group">
		{companyData.length > 0 ? (
		companyData.map((ticker) => {
			return <CompFinderItem key={ticker} ticker={ticker} />;
		})
		) : (
		<p className="text-sm text-slate-400 m-4">No peers found</p>
		)}
		</div>
	);
};

export default CompFinder;
