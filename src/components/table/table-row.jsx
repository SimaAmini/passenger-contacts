import { flexRender } from "@tanstack/react-table";

export const TableRow = ({ row, onRowClick }) => {
  return (
    <tr key={row.id} onClick={() => onRowClick(row.original)}>
      {row.getVisibleCells().map((cell) => (
        <td key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
      ))}
    </tr>
  );
};
