import React, { Component } from "react";
import { Text, View } from "react-native";
import { SearchBar } from "react-native-elements";
import { graphql } from "react-apollo";
import { compose } from "recompose";
import { searchByName } from "../../query/queries";
class SeachFriend extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ""
        };
    }

    render() {
        return (
            <SearchBar
                containerStyle={{ backgroundColor: "#fff", borderBottomWidth: 0 }}
                inputContainerStyle={{ backgroundColor: "#dcdcdc", borderWidth: 0, borderRadius: 10 }}
                placeholder={"Search"}
                value={this.props.value}
                onChangeText={this.props.onChangeText}
                onFocus={this.onFocus}
            />
        );
    }
}
export default compose(
    graphql(searchByName, {
        name: "searchByName",
        options: props => {
            return { variables: { value: props.value } };
        }
    })
)(SeachFriend);
