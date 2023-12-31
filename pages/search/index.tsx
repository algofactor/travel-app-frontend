// @flow strict

import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import GeneralLayout from "../../src/components/layouts/_general";
import SearchPage from "../../src/components/page-components/search";
import { getServerSideProps } from "../../src/rest-api/search.ssr";
import { NextPageWithLayout } from "../../src/types/page-props";
import { tourFilterData } from "../../src/utils/data/homepage-data";
export { getServerSideProps };

const Search: NextPageWithLayout<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  { toursData, destinationData }
) => {
  const tours = toursData?.data;
  const meta = toursData?.meta;
  const destinations = destinationData?.data;
  const [typeItems, setTypeItems] = useState(tourFilterData.en);
  const router = useRouter()
  const { pathname, query, locale } = router;


  const handlePageChange = (event: React.SyntheticEvent, value: number) => {
    query['page'] = value.toString();

    router.push({
      pathname,
      query,
    });
  }


  const handleSearch = (searchText: string) => {
    if (searchText) {
      query['search'] = searchText;
    } else {
      delete query['search'];
    }
    query['page'] = '1';

    router.push({
      pathname,
      query,
    });
  }

  useEffect(() => {
    if (locale && locale === 'ru') {
      setTypeItems(tourFilterData.ru);
    } else if (locale && locale === 'hy') {
      setTypeItems(tourFilterData.hy);
    } else {
      setTypeItems(tourFilterData.en);
    }
  }, [locale])

  return (
    <div>
      <SearchPage
        tours={tours}
        handlePageChange={handlePageChange}
        handleSearch={handleSearch}
        meta={meta}
        destinations={destinations}
        typeItems={typeItems}
      />
    </div>
  );
};

Search.getLayout = function getLayout(page) {
  return <GeneralLayout>{page}</GeneralLayout>;
};

export default Search;