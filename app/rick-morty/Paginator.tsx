import { Pagination, Stack } from "@mui/material";
import { useMediaQuery } from "usehooks-ts";

interface Info {
  pages: number;
}

interface PaginatorProps {
  info: Info;
  page: number;
  handlePaginationChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const Paginator = ({ info, page, handlePaginationChange }: PaginatorProps) => {
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <div className="backdrop-blur bg-black/50 p-4 w-full sticky top-0 z-50 flex justify-center">
      <div className="mx-auto items-center">
        <Stack spacing={2}>
          <Pagination
            count={info.pages}
            className="pagination bg-white rounded-full mt-2 hover:bg-zinc-200"
            page={page}
            color="primary"
            onChange={handlePaginationChange}
            siblingCount={matches ? 0 : 1}
          />
        </Stack>
      </div>
    </div>
  );
};
