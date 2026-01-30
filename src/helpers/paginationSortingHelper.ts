import { Prisma } from "../../generated/prisma/client";

type IOptions = {
  page?: number | string;
  limit?: number | string;
  //   sortOrder?: string;
  sortOrder?: "asc" | "desc";
  // sortBy?: string;
  sortBy?: "createdAt" | "updatedAt" | "title" | "views";
};

type IOptionsResult = {
  page: number;
  limit: number;
  skip: number;
  //   sortBy: string;
  //   sortOrder: string;
  sortBy: keyof Prisma.PostOrderByWithRelationInput;
  sortOrder: Prisma.SortOrder;
};

// const paginationSortingHelper = (options: IOptions): IOptionsResult => {
//   const page: number = Number(options.page) || 1;
//   const limit: number = Number(options.limit) || 10;
//   const skip = (page - 1) * limit;

//   const sortBy: string = options.sortBy || "createdAt";
//   const sortOrder: string = options.sortOrder || "desc";

const paginationSortingHelper = (options: IOptions): IOptionsResult => {
  const page = Number(options.page) > 0 ? Number(options.page) : 1;
  const limit = Number(options.limit) > 0 ? Number(options.limit) : 10;
  const skip = (page - 1) * limit;

  const allowedSortBy: (keyof Prisma.PostOrderByWithRelationInput)[] = [
    "createdAt",
    "updatedAt",
    "title",
    "views",
  ];

  const sortBy = allowedSortBy.includes(
    options.sortBy as keyof Prisma.PostOrderByWithRelationInput,
  )
    ? (options.sortBy as keyof Prisma.PostOrderByWithRelationInput)
    : "createdAt";

  const sortOrder: Prisma.SortOrder =
    options.sortOrder === "asc" ? "asc" : "desc";

  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder,
  };
};

export default paginationSortingHelper;
