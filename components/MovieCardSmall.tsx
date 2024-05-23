import React, { useState } from "react";
import { View, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import { PADDING } from "../constants/designConstants";
import { COLORS } from "../constants/colors";
import { Text } from "react-native-paper";
import SkeletonPlaceholder from "@james-kirawan/expo-skeleton-placeholder";
import SkeletonImage from "./SkeletonImage";

type MovieCardSmallProps = {
    image: string,
    title: string,
    index: number
}

const MovieCardSmall: React.FC<MovieCardSmallProps> = ({ image, title, index }) => {
    
    return(
        <View style={[styles.cardContainer, { alignItems: index % 3 === 0 ? 'flex-start' : index % 3 === 1 ? 'center' : 'flex-end'}]}>
            <TouchableOpacity style={styles.card}>
                <SkeletonImage imageUrl={image} variant='small' />
                <View style={styles.textContainer}>
                <Text style={styles.titleText} variant="titleMedium" numberOfLines={2}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
  };

  const styles = StyleSheet.create({
    cardContainer: {
        width: Dimensions.get('window').width / 3 - PADDING,
        flex: 1,
        height: '100%',
        overflow: 'hidden',
        justifyContent: "center",
        paddingVertical: PADDING,
    },
    card: { 
      width: Dimensions.get('window').width / 3 - PADDING * 1.5,
      height: '100%',
      borderRadius: 12,
      elevation: 5,
      backgroundColor: COLORS.backgroundDim,
      overflow: 'hidden',
      alignItems: "center", 
    },
    textContainer: {
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 23
    }
  })

  export default MovieCardSmall;