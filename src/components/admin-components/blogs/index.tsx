// @flow strict

import { Button, Container, FormControl, InputAdornment, InputLabel, OutlinedInput, Pagination, PaginationItem } from "@mui/material";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { BlogType } from "../../../types/armenia";
import BlogAdminCard from "../../admin-cards/blog-admin-card";
import SectionTitle from "../../common/section-title";

interface PropsType {
  blogs: BlogType[];
  handlePageChange: any;
  handleSerachHotels: (name: string) => void;
  metadata: {
    totalPages: number;
  };

}

function AdminBlogs({
  blogs,
  handleSerachHotels,
  metadata,
  handlePageChange,
}: PropsType) {

  return (
    <Container className='flex flex-col items-center hotels-page'>
      <div className='my-4 w-full md:my-8'>
        <div className="flex justify-end">
          <Link href='/admin/blogs/create'>
            <Button color="secondary" variant="contained">
              Create New Blog
            </Button>
          </Link>
        </div>
        <div className="flex w-full items-center justify-between">
          <SectionTitle title='All Blog Post' />
          <FormControl size="small" className="shadow-sm" variant="outlined">
            <InputLabel>Search your  Need</InputLabel>
            <OutlinedInput
              endAdornment={
                <InputAdornment position="end">
                  <BiSearch className="text-[#EDA592]" />
                </InputAdornment>
              }
              label="Search your Tours"
              onChange={(e) => handleSerachHotels(e.target.value)}
            />
          </FormControl>
        </div>
        <>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
            {blogs.map((blog: BlogType, i) => (
              <BlogAdminCard blog={blog} key={i} />
            ))}
          </div>
          <div className='flex justify-center my-3 md:my-6'>
            {blogs.length > 0 && (
              <Pagination
                size='large'
                onChange={handlePageChange}
                count={metadata.totalPages}
                shape='rounded'
                renderItem={(item) => (
                  <PaginationItem
                    sx={{ color: "#EDA592", bgcolor: "#ffffff" }}
                    className='pagination'
                    components={{
                      next: (props) => (
                        <span className='border-0 p-0 bg-transparent text-[#EDA592]'>
                          Next
                        </span>
                      ),
                      previous: (props) => (
                        <span className='border-0 p-0 bg-transparent text-[#EDA592]'>
                          Prev
                        </span>
                      ),
                    }}
                    {...item}
                  />
                )}
                variant='outlined'
              />
            )}
          </div>
        </>
      </div>
    </Container>
  );
};

export default AdminBlogs;