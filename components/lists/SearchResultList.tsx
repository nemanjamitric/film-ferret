import { FlashList } from "@shopify/flash-list";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MovieCardSmall from "../MovieCardSmall";
import { PADDING } from "../../constants/designConstants";
import { SearchResultDescription } from "../../interfaces/responseInterfaces";

type SearchResultListProps = {
    data: SearchResultDescription[],
    onRefresh?: () => void
}

const SearchResultList: React.FC<SearchResultListProps> = ({ data, onRefresh = () => {} }) => {
    return(
        <View style={styles.container}>
        <FlashList 
            data={data}
            keyExtractor={(item) => item['#IMDB_ID']}
            estimatedItemSize={Dimensions.get('window').width / 2 * 1.4 + 60 + 2 * PADDING}
            refreshing={false}
            onRefresh={onRefresh}
            numColumns={3}
            renderItem={({ item, index }) => (
                <MovieCardSmall title={item['#TITLE']} image={item['#IMG_POSTER']} index={index} />
            )}
        />
        </View>
    )
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 66
    },
  });


  export default SearchResultList;