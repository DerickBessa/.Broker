import React, { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({
  id,
  searchResult,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center justify-between w-full p-6 bg-white border border-slate-200 rounded-xl shadow-sm md:flex-row hover:shadow-md transition-shadow"
      key={id}
      id={id}
    >
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
        <Link
          to={`/company/${searchResult.symbol}/company-profile`}
          className="font-bold text-lg text-blue-700 hover:underline"
        >
          {searchResult.description}
        </Link>
        <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">
          {searchResult.symbol}
        </span>
        <span className="text-sm text-slate-400">
          {searchResult.type}
        </span>
      </div>
      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={searchResult.symbol}
      />
    </div>
  );
};
export default Card;