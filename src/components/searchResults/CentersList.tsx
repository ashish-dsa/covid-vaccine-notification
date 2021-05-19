import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";

export const CentersList = ({ centersList }: { centersList: Array<null> }) => {
  if (!centersList || centersList.length === 0) {
    return null;
  }
  return (
    <FlatList
      data={centersList}
      renderItem={(center: any) => {
        return (
          <Card style={styles.card}>
            <Card.Content>
              <View style={styles.viewRow}>
                <View style={styles.viewColumn}>
                  <Title>{center.item.name}</Title>
                  <Paragraph>{center.item.address}</Paragraph>
                  <Paragraph style={styles.vaccineName}>{center.item.vaccineName}</Paragraph>
                </View>
              </View>
            </Card.Content>
          </Card>
        );
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: "1%",
    marginHorizontal: "2%",
  },

  viewRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewColumn: {},
  vaccineName: {
    color: "green",
  },
});
