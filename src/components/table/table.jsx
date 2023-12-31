import { flexRender } from "@tanstack/react-table";
import { useTable } from "./use-table";
import { TableRow } from "./table-row";

export const Table = ({ columns = [], data = [], onRowClick, isLoading }) => {
  const { table } = useTable({
    columns,
    data,
  });

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
    </div>
  );
};
