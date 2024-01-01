export const TablePagination = ({ table }) => {
  return (
    <div className="justify-center space-x-5 w-full flex items-center">
      <div className="join">
        <button
          className="join-item btn"
          disabled={!table.getCanPreviousPage()}
          onClick={table.previousPage}
        >
          «
        </button>
        <button className="join-item btn">
          {table.getState().pagination.pageIndex + 1}
        </button>
        <button
          className="join-item btn"
          disabled={!table.getCanNextPage()}
          onClick={table.nextPage}
        >
          »
        </button>
      </div>
      <span>{`total: ${table.getPageCount()}`}</span>
    </div>
  );
};
