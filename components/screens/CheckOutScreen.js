import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function CheckOutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.backButtonText}>{'< Cart'}</Text>
      </TouchableOpacity>
      <Text style={styles.header}>Checkout</Text>
      
      {/* Tổng tiền và thuế */}
      <Text style={styles.amount}>₹1,527</Text>
      <Text style={styles.gst}>Including GST (18%)</Text>

      {/* Phương thức thanh toán */}
      <View style={styles.paymentOptions}>
        <TouchableOpacity style={styles.paymentButton}>
          <Text style={styles.paymentButtonText}>Credit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentButton}>
          <Text style={styles.paymentButtonText}>Apple Pay</Text>
        </TouchableOpacity>
      </View>

      {/* Form nhập thông tin thẻ */}
      <TextInput style={styles.input} placeholder="Card Number" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Cardholder Name" />
      <View style={styles.row}>
        <TextInput style={[styles.input, styles.halfInput]} placeholder="Expiry Date" keyboardType="numeric" />
        <TextInput style={[styles.input, styles.halfInput]} placeholder="CVV / CVC" keyboardType="numeric" />
      </View>

      {/* Nút thanh toán */}
      <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate('OrderConfirmation')}>
        <Text style={styles.payButtonText}>Pay for the order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  amount: {
    fontSize: 20,
    color: '#4CAF50',
    marginBottom: 5,
  },
  gst: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  paymentOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  paymentButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  paymentButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    flex: 1,
    marginHorizontal: 5,
  },
  payButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  payButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
