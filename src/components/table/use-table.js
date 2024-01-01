import { getCoreRowModel, useReactTable } from "@tanstack/react-table";

export const useTable = ({
  columns,
  data,
  pageCount,
  onPaginationChange,
  pagination,
}) => {
  const table = useReactTable({
    data,
    columns,
    pageCount,
    state: {
      pagination,
    },
    onPaginationChange,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
  });

  return { table };
};
