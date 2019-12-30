import { StyleSheet, Dimensions, StatusBar } from "react-native";
const themeColor = "#03A9F4";
const hight = Dimensions.get("window").height;
export default styles = StyleSheet.create({
    textLogin: {
        color: "#03A9F4",
        fontWeight: "600",
        marginVertical: 15,
        fontSize: 29
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        marginBottom: 5,
        justifyContent: "center"
    },
    txt_check: {
        color: "red",
        fontSize: 15,
        textAlign: "right"
    },
    overlayBackground: {
        width: "100%",
        bottom: 0,
        right: 0,
        left: 0,
        top: 0,
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 2
    },
    overlayContianer: { width: "80%", height: "60%", backgroundColor: "#fff", position: "absolute", zIndex: 30 },
    imageBackgroundStyle: {
        width: "100%",
        height: "60%",
        alignItems: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    addPostLayOut: {
        width: "100%",
        height: hight,
        backgroundColor: "#fefefe",
        position: "absolute",
        paddingTop: StatusBar.currentHeight + 15,
        paddingHorizontal: 15
    },
    imagePanel: { width: "100%", borderRadius: 10, height: hight / 3, borderColor: "#ccc", borderWidth: 2 },
    font24: { fontSize: 24, color: "#fff" },
    themeColor: { color: themeColor },
    btnDelete: {
        backgroundColor: "gray",
        borderRadius: 100,
        height: 45,
        width: 45,
        top: -5,
        right: -5,
        position: "absolute",
        justifyContent: "center",
        alignItems: "center"
    },
    btnPadding: { paddingVertical: 10, paddingHorizontal: 5 },
    btn: { backgroundColor: themeColor, borderRadius: 10 },
    spacebetweenRow: { justifyContent: "space-between", flexDirection: "row" }
});
