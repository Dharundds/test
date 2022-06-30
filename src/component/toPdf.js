import React from "react";
import { Document, Page, Text, View, StyleSheet} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  image: {
    width: "50%",
    padding: 10
  },
});

const ToPdf = ({name,date}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{name}</Text>
        </View>
        <View style={styles.section}>
          <Text>{date}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default ToPdf;
