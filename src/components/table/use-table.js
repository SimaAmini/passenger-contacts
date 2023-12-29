import { getCoreRowModel, useReactTable } from "@tanstack/react-table";

export const useTable = ({ columns, data }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return { table };
};
