import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";

import Articles from "../../components/article_List/Articles";
import Plants from "../../components/plants/Plants";


export default function BookmarksScreen() {
    // const [activeTab, setActiveTab] = useState('London');

    const [activeTab, setActiveTab] = useState('London');

    const openTab = (tab) => {
        setActiveTab(tab);
    };

    // const openTab = (tab) => {
    //     setActiveTab(tab);
    // };

    return (
        <ScrollView className="flex-1 px-6 py-4 bg-white">
            <View className="flex flex-row rounded-md mb-4 bg-neutral-100">
                <TouchableOpacity
                    style={[styles.tablinks, activeTab === 'London' && styles.activeTab]}
                    onPress={() => openTab('London')}
                    className="w-1/2 flex justify-center"
                >
                    <Text
                        style={[
                            styles.tabText,
                            activeTab === 'London' && styles.activeTabText,
                        ]}
                        className="text-base font-bold leading-8 text-center"
                    >
                        Plants
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.tablinks, activeTab === 'article' && styles.activeTab]}
                    onPress={() => openTab('article')}
                    className="w-1/2 flex justify-center"
                >
                    <Text
                        style={[
                            styles.tabText,
                            activeTab === 'article' && styles.activeTabText,
                        ]}
                        className="text-base font-bold leading-8 text-center"
                    >
                        Articles
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Tab Content */}
            {activeTab === 'London' && (
                <View style={styles.tabcontent}>
                    <Plants />
                </View>
            )}
            {activeTab === 'article' && (
                <View style={styles.tabcontent}>
                    <Articles />
                </View>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    tablinks: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 2,
        borderRadius: 5,
    },
    activeTab: {
        backgroundColor: '#059669',
    },
    tabText: {
        fontSize: 16,
        color: '#000000',  // Default text color
    },
    activeTabText: {
        color: '#ffffff',  // Text color for active tab
    },
    tabcontent: {
        padding: 10,
        borderColor: '#ddd',
    },
});
