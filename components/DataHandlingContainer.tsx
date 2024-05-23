import React from "react";
import { View, ActivityIndicator, StyleSheet, Dimensions, ScrollView, RefreshControl } from "react-native";
import { Icon, Text, useTheme } from "react-native-paper";

type DataHandlingContainerProps = {
    loading: boolean,
    error: boolean,
    data: any,
    children: React.ReactNode,
    onRefresh?: () => void
}

const DataHandlingContainer: React.FC<DataHandlingContainerProps> = ({ loading, error, data, children, onRefresh = () => {} }) => {
    const theme = useTheme();
    if (error) {
      return( 
      <ScrollView refreshControl={<RefreshControl refreshing={false} onRefresh={onRefresh} />} contentContainerStyle={styles.container}>
        <Icon source={'emoticon-sad-outline'} size={Dimensions.get('window').width / 3} color={theme.colors.primary} />
        <Text style={styles.messageText}>An error occured while fetching data.</Text>
      </ScrollView>);
    }
    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    if (!data) {
      return(
        <View style={styles.container}>
          <Icon source={'emoticon-sad-outline'} size={Dimensions.get('window').width / 3} color={theme.colors.primary} />
          <Text style={styles.messageText}>Nothing to show...</Text>
        </View>);
    }
    if (data) {
      return children;
    }
  };

  const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      alignItems: "center", 
      justifyContent: "center"
    },
    messageText: {
      fontSize: 20,
      fontFamily: 'Light',
      textAlign: 'center',
      width: '80%'
    }
  })

  export default DataHandlingContainer;