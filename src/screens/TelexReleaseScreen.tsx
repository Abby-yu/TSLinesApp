
// =====================================
// src/screens/TelexReleaseScreen.tsx
// =====================================

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from "../styles/common";

type QueryType = 'bl' | 'container';

const TelexReleaseScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [queryType, setQueryType] = useState<QueryType>('bl');
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    if (!inputValue.trim()) {
      Alert.alert('錯誤', '請輸入查詢號碼');
      return;
    }
    
    // 模擬查詢
    navigation.navigate('TelexReleaseResult', {
      queryType,
      queryValue: inputValue,
    });
  };

  const handleRecentSearch = (value: string) => {
    setInputValue(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#10B981" />
      
      {/* Header */}
      <View style={[styles.header, {backgroundColor: '#10B981'}]}>
        <View style={styles.headerContent}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>電放查詢</Text>
            <Text style={styles.headerSubtitle}>Telex Release Query</Text>
          </View>
          <TouchableOpacity style={styles.helpButton}>
            <Text style={styles.helpButtonText}>?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={[styles.content, {backgroundColor: '#F0FDF4'}]} showsVerticalScrollIndicator={false}>
        {/* Query Type Tabs */}
        <View style={styles.tabSection}>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[
                styles.tab,
                queryType === 'bl' ? styles.activeTab : styles.inactiveTab
              ]}
              onPress={() => setQueryType('bl')}>
              <Text style={styles.tabIcon}>📄</Text>
              <Text style={[
                styles.tabText,
                queryType === 'bl' ? styles.activeTabText : styles.inactiveTabText
              ]}>
                提單號碼 BL No.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tab,
                queryType === 'container' ? styles.activeTab : styles.inactiveTab
              ]}
              onPress={() => setQueryType('container')}>
              <Text style={styles.tabIcon}>📦</Text>
              <Text style={[
                styles.tabText,
                queryType === 'container' ? styles.activeTabText : styles.inactiveTabText
              ]}>
                貨櫃號碼 Container No.
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Input Section */}
        <View style={styles.inputSection}>
          <View style={styles.inputCard}>
            <View style={styles.inputHeader}>
              <View style={styles.iconContainer}>
                <Text style={styles.searchIcon}>🔍</Text>
              </View>
              <View>
                <Text style={styles.inputTitle}>
                  {queryType === 'bl' ? '提單號碼查詢' : '貨櫃號碼查詢'}
                </Text>
                <Text style={styles.inputSubtitle}>
                  {queryType === 'bl' ? 'BL Number Query' : 'Container Number Query'}
                </Text>
              </View>
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>
                {queryType === 'bl' ? '提單號碼 Bill of Lading Number' : '貨櫃號碼 Container Number'}
              </Text>
              <TextInput
                style={styles.textInput}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder={
                  queryType === 'bl' 
                    ? '輸入提單號碼 (例: TSLU2024090001)' 
                    : '輸入貨櫃號碼 (例: TSLU1234567)'
                }
                autoCapitalize="characters"
              />
            </View>

            {/* Example formats */}
            <View style={styles.exampleSection}>
              <Text style={styles.exampleTitle}>格式範例：</Text>
              <View style={styles.exampleList}>
                {queryType === 'bl' ? (
                  <>
                    <Text style={styles.exampleItem}>• TSLU2024090001</Text>
                    <Text style={styles.exampleItem}>• TSHA240900001</Text>
                    <Text style={styles.exampleItem}>• TSKE2024000123</Text>
                  </>
                ) : (
                  <>
                    <Text style={styles.exampleItem}>• TSLU1234567</Text>
                    <Text style={styles.exampleItem}>• TSHA9876543</Text>
                    <Text style={styles.exampleItem}>• TSKE5555555</Text>
                  </>
                )}
              </View>
            </View>
          </View>
        </View>

        {/* Recent Searches */}
        <View style={styles.recentSection}>
          <View style={styles.recentCard}>
            <View style={styles.recentHeader}>
              <Text style={styles.historyIcon}>🕒</Text>
              <Text style={styles.recentTitle}>最近查詢記錄</Text>
            </View>
            <View style={styles.recentList}>
              <TouchableOpacity 
                style={styles.recentItem}
                onPress={() => handleRecentSearch('TSLU2024080015')}>
                <View style={styles.recentItemContent}>
                  <Text style={styles.recentItemNumber}>TSLU2024080015</Text>
                  <Text style={styles.recentItemDate}>09/08</Text>
                </View>
                <Text style={styles.recentItemStatus}>已電放 • Surrendered</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.recentItem}
                onPress={() => handleRecentSearch('TSHA1234567')}>
                <View style={styles.recentItemContent}>
                  <Text style={styles.recentItemNumber}>TSHA1234567</Text>
                  <Text style={styles.recentItemDate}>09/07</Text>
                </View>
                <Text style={styles.recentItemStatus}>處理中 • Processing</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Search Button */}
      <View style={styles.searchButtonContainer}>
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonIcon}>🔍</Text>
          <Text style={styles.searchButtonText}>查詢電放狀態</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TelexReleaseScreen;