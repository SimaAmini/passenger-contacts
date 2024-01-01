import { flexRender } from "@tanstack/react-table";

import { useTable } from "./use-table";
import { TableRow } from "./table-row";
import { TableEmptyState } from "./table-empty-state";
import { TablePagination } from "./table-pagination";

export const Table = ({
  columns = [],
  data = [],
  onRowClick,
  isLoading,
  pageCount,
  onPaginationChange,
  pagination,
}) => {
  const { table } = useTable({
    columns,
    data,
    pageCount,
    onPaginationChange,
    pagination,
  });

  if (!data || !data.length) return <TableEmptyState />;

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <TableRow row={row} onRowClick={onRowClick} />
          ))}
        </tbody>
      </table>
      <TablePagination table={table} />
    </div>
  );
};
