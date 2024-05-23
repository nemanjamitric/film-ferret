import React, { useState } from "react"
import SkeletonPlaceholder from "@james-kirawan/expo-skeleton-placeholder"
import { Dimensions, Image, StyleSheet, View } from "react-native"
import { COLORS } from "../constants/colors"
import { PADDING } from "../constants/designConstants"

interface SkeletonImageProps {
    imageUrl: string,
    variant: 'small' | 'large',
}

const SkeletonImage: React.FC<SkeletonImageProps> = ({ imageUrl, variant }) => {
    const [isImageLoading, setIsImageLoading] = useState(true);

    return(
        <>
        {isImageLoading && <SkeletonPlaceholder
            backgroundColor={COLORS.backgroundDim}
            highlightColor={COLORS.accent}
            speed={1400}
            enabled
        >
            <View
            style={variant === 'small' ? styles.skeletonSmall : styles.skeletonLarge}>

            </View>
        </SkeletonPlaceholder>}
        
        <Image
            source={{ uri: imageUrl }} 
            style={[variant === 'small' ? styles.imageSmall : styles.imageLarge, {height: isImageLoading ? 0 : 'auto'}]}
            onLoadStart={() => 
                setIsImageLoading(true)} 
            onLoad={() => {
                setIsImageLoading(false)}} 
            />
        </>
    )
}

const styles = StyleSheet.create({
    imageSmall: { 
        width: Dimensions.get('window').width / 3 - PADDING * 1.5, 
        aspectRatio: 0.675, 
        objectFit: 'fill', 
        borderRadius: 12, 
        borderWidth: 1,
        borderColor: COLORS.accent, 
    },
    imageLarge: { width: '100%', aspectRatio: 0.75, objectFit: 'cover', borderRadius: 12, },
    skeletonSmall: { 
        width: Dimensions.get('window').width / 3 - PADDING * 1.5, 
        aspectRatio: 0.68, 
        borderRadius: 12, 
        borderWidth: 1,
        borderColor: COLORS.accent, 
    },
    skeletonLarge: { 
        width: '100%',
        aspectRatio: 0.747, 
        borderRadius: 12, 
        borderWidth: 1,
        borderColor: COLORS.accent, 
    }
})

export default SkeletonImage