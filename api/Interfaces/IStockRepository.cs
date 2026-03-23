using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using api.Controllers;
using api.Repository;
using api.Dtos.Stock;
using api.Helpers;

namespace api.Interfaces
{
    public interface IStockRepository
    {
        Task<List<Stock>> GetAllAsync(QueryObject query);
		Task<Stock?> GetByIdAsync(Guid id);
		Task<Stock?> CreateAsync(Stock stockModel);
		Task<Stock?> UpdateAsync(Guid id , UpdateStockRequestDto stockDto);
		Task<Stock?> Delete(Guid id);
		Task<Stock?> GetBySymbolAsync(string Symbol);
		Task<bool> StockExists(Guid id);

	}
}