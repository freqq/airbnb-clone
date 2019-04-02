import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../styles/colors'
import SearchBar from '../components/explore/SearchBar'
import Categories from '../components/explore/Categories'
import Listings from '../components/explore/Listings'
import categoriesList from '../data/CategoriesData'
import listings from '../data/listings'

class InboxContainer extends Component {
    static navigationOptions = {
        header: null,
        tabBarLabel: 'EXPLORE',
        tabBarIcon: ({tintColor}) => (<Icon
            style={{
            marginTop: 6
        }}
            name="ios-search"
            size={22}
            color={tintColor}/>)
    }

    state = {}

    handleAddToFav = () => {
        const {navigate} = this.props.navigation
        navigate('CreateList')
    }

    renderListings() {
        return listings.map((listing, index) => {
            return (
                <View key={`listing-${index}`}>
                    <Listings
                        key={`listing-item-${index}`}
                        title={listing.title}
                        listings={listing.listings}
                        showAddToFav={listing.showAddToFav}
                        handleAddToFav={this.handleAddToFav}
                        boldTitle={listing.boldTitle}/>
                </View>
            )
        })
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <SearchBar/>
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollViewContent}>
                    <Text style={styles.heading}>Explore Airbnb</Text>
                    <View style={styles.categories}>
                        <Categories categories={categoriesList}/>
                    </View>
                    {this.renderListings()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.white
    },
    scrollViewContent: {
        paddingBottom: 80
    },
    scrollView: {
        paddingTop: 120
    },
    heading: {
        fontSize: 22,
        color: colors.gray04,
        fontWeight: '600',
        paddingLeft: 20,
        paddingBottom: 20
    },
    categories: {
        marginBottom: 40
    }
})

export default InboxContainer