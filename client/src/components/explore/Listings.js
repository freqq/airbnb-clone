import React, {Component} from 'react'
import {PropTypes} from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView,
    Image,
    StyleSheet
} from 'react-native'
import colors from '../../styles/colors';
import Stars from '../Stars'
import HeartButton from '../buttons/HeartButton'

class Listings extends Component {
    get randomColor() {
        const colorsOb = [
            colors.gray04,
            colors.darkOrange,
            colors.black,
            colors.brown01,
            colors.brown02,
            colors.green01
        ]
        return colorsOb[Math.floor(Math.random() * colorsOb.length)]
    }

    renderListings() {
        const {listings, showAddToFav, handleAddToFav, favouriteListings} = this.props;
        return listings.map((listing, index) => (
            <TouchableHighlight style={styles.card} key={`listing-${index}`}>
                <View>
                    {showAddToFav
                        ? (
                            <View style={styles.addToFavouriteBtn}>
                                <HeartButton
                                    color={colors.white}
                                    selectedColor={colors.pink}
                                    selected={favouriteListings.indexOf(listing.id) > -1}
                                    onPress={() => handleAddToFav(listing)}/>
                            </View>
                        )
                        : null}
                    <Image style={styles.image} resizeMode="contain" source={listing.photo}/>
                    <Text
                        style={[
                        {
                            color: listing.color
                        },
                        styles.listingType
                    ]}>
                        {listing.type}
                    </Text>
                    <Text style={styles.listingTitle} numberOfLines={2}>
                        {listing.title}
                    </Text>
                    <Text style={styles.listingPrice}>
                        $ {listing.price}
                        {' '}
                        {listing.priceType}
                    </Text>
                    {listing.stars > 0
                        ? (<Stars votes={listing.stars} size={10} color={colors.green02}/>)
                        : null}
                </View>
            </TouchableHighlight>
        ));
    }

    render() {
        const {title, boldTitle} = this.props
        const titleStyle = boldTitle
            ? {
                fontSize: 22,
                fontWeight: '600'
            }
            : {
                fontSize: 18
            }

        return (
            <View style={styles.wrapper}>
                <View style={styles.titleWrapper}>
                    <Text style={[titleStyle, styles.title]}>{title}</Text>
                    <TouchableOpacity style={styles.seeAllButton}>
                        <Text style={styles.seeAllButtonText}>
                            See all
                        </Text>
                        <Icon name='angle-right' size={18} color={colors.gray04}/>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    horizontal={true}
                    contentContainerStyle={{
                    paddingRight: 30
                }}
                    style={styles.scrollView}
                    showsHorizontalScrollIndicator={false}>
                    {this.renderListings()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex'
    },
    title: {
        color: colors.gray04
    },
    seeAllButton: {
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    seeAllButtonText: {
        color: colors.gray04,
        marginRight: 5
    },
    titleWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 21,
        paddingRight: 21
    },
    scrollView: {
        marginTop: 20,
        marginLeft: 15,
        marginBottom: 20
    },
    card: {
        marginRight: 6,
        width: 155,
        marginLeft: 6,
        flexDirection: 'column',
        minHeight: 100
    },
    image: {
        width: undefined,
        marginBottom: 7,
        borderRadius: 8,
        flex: 1,
        height: 100
    },
    listingTitle: {
        fontWeight: '700',
        fontSize: 14,
        color: colors.gray04
    },
    listingType: {
        fontWeight: '700',
        fontSize: 10
    },
    addToFavouriteBtn: {
        position: 'absolute',
        right: 12,
        top: 7,
        zIndex: 2
    },
    listingPrice: {
        color: colors.gray04,
        marginBottom: 2,
        marginTop: 2,
        fontSize: 12,
        fontWeight: '300'
    }
})

Listings.propTypes = {
    title: PropTypes.string.isRequired,
    boldTitle: PropTypes.bool,
    listings: PropTypes.array.isRequired,
    showAddToFav: PropTypes.bool,
    handleAddToFav: PropTypes.func
}

export default Listings
