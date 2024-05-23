import { FlashList } from "@shopify/flash-list";
import React from "react";
import { Dimensions } from "react-native";
import MovieCardSmall from "../MovieCardSmall";
import { PADDING } from "../../constants/designConstants";
import HeroMovie from "../HeroMovie";
import { IMDbIdSearchResult } from "../../interfaces/responseInterfaces";

type RandomMoviesListProps = {
    data: IMDbIdSearchResult[],
    onRefresh?: () => void
}

const RandomMoviesList: React.FC<RandomMoviesListProps> = ({ data, onRefresh = () => {} }) => {
    return(
        <FlashList 
            data={data.slice(1)}
            ListHeaderComponent={<HeroMovie data={data[0]} />}
            estimatedItemSize={Dimensions.get('window').width / 2 * 1.4 + 60 + 2 * PADDING}
            refreshing={false}
            onRefresh={onRefresh}
            numColumns={3}
            renderItem={({ item, index }) => (
                <MovieCardSmall title={item.short.name} image={item.short.image} index={index} />
            )}
        />
    )
  };

  export default RandomMoviesList;