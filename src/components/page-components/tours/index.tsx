// @flow strict

import {
  Card,
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Pagination,
  PaginationItem,
  Tab,
  Tabs,
} from "@mui/material";
import { useRouter } from "next/router";
import { BiSearch } from "react-icons/bi";
import { ToursPageProps } from "../../../types/page-props";
import { localizationData } from "../../../utils/locales";
import TourCard from "../../cards/tour-card";
import SectionTitle from "../../common/section-title";

function ToursPage({
  handleTabChange,
  tabIndex,
  tabs,
  title,
  tours: toursData,
  handlePageChange,
  meta,
  handleSearch,
}: ToursPageProps) {
  const { locale } = useRouter();
  const localData =
    locale === "ru"
      ? localizationData.ru
      : locale === "hy"
        ? localizationData.hy
        : localizationData.en;
  return (
    <Container className="my-8 flex flex-col items-center">
      <div className="w-full  text-center py-3 px-6 regular-shadow rounded-lg">
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          className="pages-tabs"
          TabIndicatorProps={{
            style: { display: "none" },
          }}
        >
          {tabs.map((tab: any) => (
            <Tab key={tab.id} value={tab.value} className="" label={tab.name} />
          ))}
        </Tabs>
      </div>
      <div className="w-full my-4 md:my-8">
        <div className="w-full flex items-center justify-between">
          <SectionTitle title={title} />
          <FormControl size="small" className="shadow-sm" variant="outlined">
            <InputLabel>
              {localData.search_your_need}
            </InputLabel>
            <OutlinedInput
              endAdornment={
                <InputAdornment position="end">
                  <BiSearch className="text-[#EDA592]" />
                </InputAdornment>
              }
              label={localData.search_your_need}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </FormControl>
        </div>
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {toursData?.map((item: any, i: number) => (
              <Card key={i} className="regular-shadow rounded-lg">
                <TourCard tour={item} />
              </Card>
            ))}
          </div>
          <div className="flex justify-center my-3 md:my-6">
            {toursData?.length > 0 && (
              <Pagination
                size="large"
                onChange={handlePageChange}
                count={meta?.totalPages}
                shape="rounded"
                renderItem={(item) => (
                  <PaginationItem
                    sx={{ color: "#EDA592", bgcolor: "#ffffff" }}
                    className="pagination"
                    components={{
                      next: (props) => (
                        <span className="border-0 p-0 bg-transparent text-[#EDA592]">
                          {localData.next_text}
                        </span>
                      ),
                      previous: (props) => (
                        <span className="border-0 p-0 bg-transparent text-[#EDA592]">
                          {localData.prev_text}
                        </span>
                      ),
                    }}
                    {...item}
                  />
                )}
                variant="outlined"
              />
            )}
          </div>
        </>
      </div>
    </Container>
  );
}

export default ToursPage;
