import {
    Text,
    Image,
    SafeAreaView,
    StyleSheet,
    View,
    Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
const isSmallScreen = width < 400; // Adjust the width value based on the screen size you consider as small

function ActivityDetails(): JSX.Element {
    return (
        <SafeAreaView style={styles.container}>
            {/* Image */}
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <Text
                        style={[
                            styles.Header,
                            isSmallScreen && styles.smallScreenHeader,
                        ]}>
                        Transaction Details
                    </Text>
                </View>
            </View>
            {/* Bottom half modal */}
            <SafeAreaView
                style={[styles.bottomHalfModal, isSmallScreen && styles.smallScreenBottomHalfModal]}
            >
                <View style={styles.transactionHeader}>
                    <Image
                        source={require('../../assets/sent.png')}
                        style={[styles.image, isSmallScreen && styles.smallScreenImage]}
                        resizeMode="contain"
                    />
                    <Text style={styles.sentText}>Sent</Text>
                </View>
                <View style={[styles.timeContainer, isSmallScreen && styles.smallScreenTimeContainer
                ]}>
                    <View>
                        <Text style={styles.dateLabel}>Date</Text>
                        <Text style={styles.dateValue}>Aug 19, 2019</Text>
                    </View>
                    <View>
                        <Text style={styles.timeLabel}>Time</Text>
                        <Text style={styles.timeValue}>10:30 AM</Text>
                    </View>
                </View>
                <View style={[styles.dottedLine, isSmallScreen && styles.smallScreenDottedLines]} />
                <View style={styles.amountInBtc}>
                    <Text style={styles.amountInBtcText}>
                        Amount
                    </Text>
                    <Text style={styles.amountInBtcValue}>
                        0.0001 BTC
                    </Text>
                </View>

                <View style={styles.amountInUsd}>
                    <Text style={styles.amountInUsdText}>
                        Amount($)
                    </Text>
                    <Text style={styles.amountInUsdValue}>
                        $5.00
                    </Text>
                </View>

                {/* Status: transaction confirmed */}
                <View style={styles.statusContainer}>
                    <Text style={styles.statusLabel}>Status</Text>
                    <Text style={styles.statusValue}>Transaction Confirmed</Text>
                </View>
                <View style={[styles.dottedLine, isSmallScreen && styles.smallScreenDottedLines]} />
                <View style={styles.transactionIdContainer}>
                    <Text style={styles.transactionIdLabel}>Transaction ID</Text>
                    <Text style={styles.transactionIdValue}>0x4c4...a7f</Text>
                </View>
                <Text style={styles.fromLabel}>From</Text>
                <View
                    style={[styles.senderItem, isSmallScreen && styles.smallScreenSenderItem]}
                >
                    <Image
                        source={{ uri: `https://ui-avatars.com/api/?name=John+Doe&color=fff&size=30&font-size=0.7` }}
                        style={styles.senderProfilePicture}
                        resizeMode="contain"
                    />
                    <View style={styles.senderInfo}>
                        <Text style={styles.senderCryptoTag}>{`jdoe`}</Text>
                        <Text style={styles.senderFullName}>{`John Doe (You)`}</Text>
                    </View>

                </View>
                <Text style={styles.toLabel}>To</Text>
                <View
                    style={[styles.recipientItem, isSmallScreen && styles.smallScreenRecipientItem]}
                >
                    <Image
                        source={{ uri: `https://ui-avatars.com/api/?name=John+Doe&color=fff&size=30&font-size=0.7` }}
                        style={styles.recipientProfilePicture}
                        resizeMode="contain"
                    />
                    <View style={styles.recipientInfo}>
                        <Text style={styles.recipientCryptoTag}>{`jdoe`}</Text>
                        <Text style={styles.recipientFullName}>{`John Doe`}</Text>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3447F0',
        alignItems: 'center',
    },
    bottomHalfModal: {
        backgroundColor: '#fff',
        width: '100%',
        height: '90%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    smallScreenBottomHalfModal: {
        height: "88%"
    },
    Header: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '10%',
        width: '100%',
    },
    smallScreenHeader: {
        fontSize: 25,
    },
    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '3%',
    },
    headerText: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: '5%',
    },
    image: {
        width: 80,
    },
    smallScreenImage: {
        width: 60,
    },
    sentText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#347AF0',
    },
    transactionHeader: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: '5%',
        marginLeft: '5%',
        position: 'absolute',
        bottom: '91%',
    },
    timeContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: '20%',
    },
    smallScreenTimeContainer: {
        marginTop: '15%',
    },
    dateLabel: {
        color: "#B5BBC9"
    },
    timeLabel: {
        color: "#B5BBC9"
    },
    dateValue: {
        color: "#000",
        fontWeight: '600',
        fontSize: 15,
    },
    timeValue: {
        color: "#000",
        fontWeight: '600',
        fontSize: 15,
    },
    dottedLine: {
        width: '90%',
        height: 1,
        backgroundColor: '#D8D8D8',
        marginTop: '5%',
    },
    smallScreenDottedLines: {
        marginTop: '3%',
    },
    amountInBtc: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'flex-start',
        marginLeft: '10%',
        marginTop: '3%',
    },
    amountInBtcText: {
        fontSize: 15,
        color: '#B5BBC9',
        fontWeight: 'bold',
    },
    amountInBtcValue: {
        fontSize: isSmallScreen ? 15 : 25,
        color: '#3D4C63',
        fontWeight: 'bold',
    },
    amountInUsd: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'flex-start',
        marginLeft: '10%',
        marginTop: '3%',
    },
    amountInUsdText: {
        fontSize: 15,
        color: '#B5BBC9',
        fontWeight: 'bold',
    },
    amountInUsdValue: {
        fontSize: isSmallScreen ? 15 : 25,
        color: '#3D4C63',
        fontWeight: 'bold',
    },
    statusContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'flex-start',
        marginLeft: '10%',
        marginTop: '3%',
    },
    statusLabel: {
        fontSize: 15,
        color: '#B5BBC9',
        fontWeight: 'bold',
    },
    statusValue: {
        fontSize: isSmallScreen ? 15 : 25,
        color: '#347AF0',
        fontWeight: 'bold',
    },
    transactionIdContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'flex-start',
        marginLeft: '10%',
        marginTop: '3%',
    },
    transactionIdLabel: {
        fontSize: 15,
        color: '#B5BBC9',
        fontWeight: 'bold',
    },
    transactionIdValue: {
        fontSize: isSmallScreen ? 15 : 25,
        color: '#3D4C63',
        fontWeight: 'bold',
    },
    fromLabel: {
        fontSize: 15,
        color: '#B5BBC9',
        fontWeight: 'bold',
        marginLeft: '10%',
        marginTop: isSmallScreen ? '3%' : '10%',
        alignSelf: 'flex-start',
    },
    toLabel: {
        fontSize: 15,
        color: '#B5BBC9',
        fontWeight: 'bold',
        marginLeft: '10%',
        marginTop: isSmallScreen ? '3%' : '10%',
        alignSelf: 'flex-start',
    },
    recipientItem: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginLeft: '10%',
        width: '100%',
    },
    smallScreenRecipientItem: {
        marginTop: 5,
    },
    recipientProfilePicture: {
        width: isSmallScreen ? 40 : 50,
        height: isSmallScreen ? 40 : 50,
        borderRadius: 25,
        marginRight: 20,
    },
    recipientInfo: {
        display: 'flex',
        flexDirection: 'column',
    },
    recipientFullName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    recipientCryptoTag: {
        fontSize: 14,
        color: '#3D4C63',
    },
    senderItem: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginTop: 10,
        marginLeft: '10%',
        width: '100%',
    },
    smallScreenSenderItem: {
        marginTop: 10,
    },
    senderProfilePicture: {
        width: isSmallScreen ? 40 : 50,
        height: isSmallScreen ? 40 : 50,
        borderRadius: 25,
        marginRight: 20,
    },
    senderInfo: {
        display: 'flex',
        flexDirection: 'column',
    },
    senderFullName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    senderCryptoTag: {
        fontSize: 14,
        color: '#3D4C63',
    },
});

export default ActivityDetails;