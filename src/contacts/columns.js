import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();
export const columns = [
  columnHelper.accessor("fullName", {
    header: "نام و نام خانوادگی",
    cell: ({ row }) => (
      <div className="flex items-center space-x-3 truncate">
        <div className="avatar mx-4">
          <div className="w-16 rounded-md">
            <img src={row.original.avatar} />
          </div>
        </div>
        <div>
          <div className="font-bold">{row.original.fullName}</div>
        </div>
      </div>
    ),
  }),

  columnHelper.accessor("phone", {
    header: "تلفن",
  }),
  columnHelper.accessor("address", {
    header: "آدرس",
  }),
];
