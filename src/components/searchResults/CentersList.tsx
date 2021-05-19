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
                  {center.item.dose1 > 0 ? (
                    <Paragraph style={styles.dose1}>Dose 1 - {center.item.dose1}</Paragraph>
                  ) : null}
                  {center.item.dose2 > 0 ? (
                    <Paragraph style={styles.dose2}>Dose 2 - {center.item.dose2}</Paragraph>
                  ) : null}
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
  dose1: {
    color: "#00E5FF",
  },
  dose2: {
    color: "#00B0FF",
  },
});
