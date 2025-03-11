import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Phần chào mừng và ảnh */}
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.username}>Nguyễn Đức Minh</Text>
        </View>
        <Image
          style={styles.profileImage}
          source={require('../../assets/profile-image-url.png')} // Đường dẫn thực tế đến ảnh
        />
      </View>

      {/* Phần Your Insights */}
      <View style={styles.insightsContainer}>
        <Text style={styles.insightsTitle}>Your Insights</Text>
        <View style={styles.insightRow}>
          <View style={styles.insightBox}>
            <Icon name="qrcode" size={30} color="#555" />
            <Text style={styles.insightTitle}>Scan new</Text>
            <Text style={styles.insightData}>Scanned 483</Text>
          </View>
          <View style={styles.insightBox}>
            <Icon name="warning" size={30} color="#d9534f" />
            <Text style={styles.insightTitle}>Counterfeits</Text>
            <Text style={styles.insightData}>Counterfeited 32</Text>
          </View>
        </View>
        <View style={styles.insightRow}>
          <View style={styles.insightBox}>
            <Icon name="check" size={30} color="#5cb85c" />
            <Text style={styles.insightTitle}>Success</Text>
            <Text style={styles.insightData}>Checkouts 8</Text>
          </View>
          <View style={styles.insightBox}>
            <Icon name="calendar" size={30} color="#0275d8" />
            <Text style={styles.insightTitle}>Directory</Text>
            <Text style={styles.insightData}>History 26</Text>
          </View>
        </View>
      </View>

      {/* Phần Explore More */}
      <TouchableOpacity style={styles.exploreMoreContainer}>
        <Text style={styles.exploreText}>Explore More</Text>
        <Icon name="arrow-right" size={20} color="#000" style={styles.arrowIcon} />
      </TouchableOpacity>

      {/* Hình ảnh bên dưới */}
      <View style={styles.imageRow}>
        <Image
          style={styles.smallImage}
          source={require('../../assets/image-1.png')} // Hình ảnh đầu tiên
        />
        <Image
          style={styles.smallImage}
          source={require('../../assets/image-2.png')} // Hình ảnh thứ hai
        />
        <Image
          style={styles.smallImage}
          source={require('../../assets/image-3.png')} // Hình ảnh thứ ba
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  username: {
    fontSize: 20,
    fontWeight: '600',
    color: '#555',
  },
  insightsContainer: {
    marginTop: 20,
  },
  insightsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  insightRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  insightBox: {
    width: '45%',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  insightTitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  insightData: {
    marginTop: 5,
    fontSize: 14,
    color: '#777',
  },
  exploreMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    justifyContent: 'center',
  },
  exploreText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 8,
  },
  arrowIcon: {
    marginLeft: 8,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  smallImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
