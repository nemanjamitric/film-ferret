import { useQuery } from '@tanstack/react-query';
import React, {useCallback, useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getRandomMovies, searchMovie } from '../functions/data/apiFunctions';
import DataHandlingContainer from '../components/DataHandlingContainer';
import RandomMoviesList from '../components/lists/RandomMoviesList';
import Screen from '../components/Screen';
import SearchBar from '../components/SearchBar';
import SearchResultList from '../components/lists/SearchResultList';

export interface SearchFormProps {
  search: string;
}

const handleMovieSearch = async (searchString: string) => {
  if (!searchString.length) {
    return [];
  }
  const result = await searchMovie(searchString);
  return result;
}

const HomeScreen = () => {
  const formikProps = useFormik<SearchFormProps>({
    initialValues: {
      search: '',
    },
    onSubmit: () => {
      fetchSearchData();
    },
    validationSchema: Yup.object({
      search: Yup.string().required('Required'),
    })
  })
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const {data: randomData, isLoading: isRadnomDataLoading, error: randomDataError, refetch: refetchRandomMovies} = useQuery({ queryKey: ['randomMovies'], queryFn: getRandomMovies });
  const {data: searchData, isLoading: isSearchDataLoading, error: searchDataError, refetch: fetchSearchData} = useQuery({ queryKey: ['searchData'], queryFn: () => handleMovieSearch(formikProps.values.search.trim()) });
    
  return (
    <Screen withoutScrollView>
          {
            isExpanded ? 
            <DataHandlingContainer loading={isSearchDataLoading} error={!!searchDataError} data={searchData}>
              <SearchResultList data={searchData.description} />
              <SearchBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} formikProps={formikProps} />
            </DataHandlingContainer>
            :
            <DataHandlingContainer loading={isRadnomDataLoading} error={!!randomDataError} data={randomData}>
              <RandomMoviesList data={randomData || []} onRefresh={refetchRandomMovies} />
              <SearchBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} formikProps={formikProps} />
            </DataHandlingContainer>
          }
    </Screen>
  );
  }

  export default HomeScreen