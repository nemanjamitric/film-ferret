import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { PADDING } from "../constants/designConstants";
import { COLORS } from "../constants/colors";
import { Text } from "react-native-paper";
import SkeletonImage from "./SkeletonImage";

type HeroMovieProps = {
    data: any,
}

const HeroMovie: React.FC<HeroMovieProps> = ({ data }) => {
    
    return(
        <View style={styles.cardContainer}>
            <View style={styles.card}>
                <SkeletonImage imageUrl={data?.short?.image} variant='large' />
                <Text style={styles.titleText} variant="titleLarge">{data?.short?.name}</Text>
            </View>
        </View>
    )
  };

  const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 66,
        width: '100%',
        overflow: 'hidden',
        justifyContent: "center",
        paddingVertical: PADDING,
    },
    card: { 
        width: '100%',
        alignItems:  'center',
      borderRadius: 12,
      borderWidth: 1,
      borderColor: COLORS.accent,
      elevation: 5,
      backgroundColor: COLORS.backgroundDim,
      overflow: 'hidden',
    },
    titleText: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 10
    }
  })

  export default HeroMovie;