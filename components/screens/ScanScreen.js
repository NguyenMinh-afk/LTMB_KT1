import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ScanScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
      </View>

      {/* Scanning Frame */}
      <View style={styles.scannerFrame}>
        <View style={[styles.corner, styles.topLeft]} />
        <View style={[styles.corner, styles.topRight]} />
        <View style={[styles.corner, styles.bottomLeft]} />
        <View style={[styles.corner, styles.bottomRight]} />

        <Image
          style={styles.productImage}
          source={require('../../assets/orange-juice.png')} // Path to the orange juice image
        />
      </View>

      {/* Product Info Section */}
      <TouchableOpacity style={styles.productInfoContainer}>
        <Image
          style={styles.thumbnailImage}
          source={require('../../assets/orange-juice-thumbnail.png')} // Path to product thumbnail
        />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>Lauren's</Text>
          <Text style={styles.productSubName}>Orange Juice</Text>
        </View>
        <TouchableOpacity style={styles.blueButton}>
          <Text style={styles.blueButtonText}>+</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    position: 'absolute',
    top: -60,
    left: 0,
    width: '100%',
    height: 60, // Adjusted height for header
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 15,
    zIndex: 1, // Ensures the header is on top of all other elements
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4', // Light gray background
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3, // Shadow for Android
    borderRadius: 0, // Square shape
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff', // Blue text for "<"
  },
  scannerFrame: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 15,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    position: 'relative',
  },
  productImage: {
    width: '80%',
    height: '100%',
    resizeMode: 'contain',
  },
  corner: {
    width: 30,
    height: 30,
    borderColor: '#007bff', // Blue corners
    position: 'absolute',
  },
  topLeft: {
    borderTopWidth: 3,
    borderLeftWidth: 3,
    top: 0,
    left: 0,
  },
  topRight: {
    borderTopWidth: 3,
    borderRightWidth: 3,
    top: 0,
    right: 0,
  },
  bottomLeft: {
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    bottom: 0,
    left: 0,
  },
  bottomRight: {
    borderBottomWidth: 3,
    borderRightWidth: 3,
    bottom: 0,
    right: 0,
  },
  productInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    width: '100%',
    marginTop: 10,
  },
  thumbnailImage: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  productDetails: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  productSubName: {
    fontSize: 14,
    color: '#666',
  },
  blueButton: {
    width: 50,
    height: 50,
    backgroundColor: '#007bff', // Blue button
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueButtonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});
