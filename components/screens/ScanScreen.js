import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ScanScreen() {
  return (
    <View style={styles.container}>
      {/* Khung quét sản phẩm với vector góc */}
      <View style={styles.scannerFrame}>
        {/* Các góc vector */}
        <View style={[styles.corner, styles.topLeft]} />
        <View style={[styles.corner, styles.topRight]} />
        <View style={[styles.corner, styles.bottomLeft]} />
        <View style={[styles.corner, styles.bottomRight]} />

        {/* Ảnh sản phẩm */}
        <Image
          style={styles.productImage}
          source={require('../../assets/orange-juice.png')} // Thay bằng đường dẫn ảnh chai nước ép
        />
      </View>

      {/* Thông tin sản phẩm */}
      <View style={styles.productInfoContainer}>
        <Image
          style={styles.thumbnailImage}
          source={require('../../assets/orange-juice-thumbnail.png')} // Ảnh thumbnail sản phẩm
        />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>Lauren's Orange Juice</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    position: 'relative', // Quan trọng để định vị vector góc
  },
  productImage: {
    width: '80%',
    height: '100%',
    resizeMode: 'contain',
  },
  corner: {
    width: 30,
    height: 30,
    borderColor: '#007bff', // Màu xanh dương
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
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3, // Hiệu ứng nổi trên Android
  },
  thumbnailImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  productDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    width: 35,
    height: 35,
    backgroundColor: '#5cb85c',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});
