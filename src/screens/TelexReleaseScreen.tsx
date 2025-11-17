// src/screens/TelexReleaseScreen.tsx (更新版本)
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
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {telexApi} from '../services/telexApi';
import styles from "../styles/common";

type QueryType = 'bl' | 'container';

const TelexReleaseScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [queryType, setQueryType] = useState<QueryType>('bl');
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!inputValue.trim()) {
      Alert.alert('錯誤', '請輸入查詢號碼');
      return;
    }

    // 目前API只支援BL Number查詢
    if (queryType !== 'bl') {
      Alert.alert('提示', '目前僅支援提單號碼查詢，貨櫃號碼查詢功能開發中');
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await telexApi.queryTelexRelease(inputValue.trim().toUpperCase());
      
      if (response.docs && response.docs.length > 0) {
        // 查詢成功，導航到結果頁面
        navigation.navigate('TelexReleaseResult', {
          queryType,
          queryValue: inputValue.trim().toUpperCase(),
          apiResponse: response,
        });
      } else {
        // 沒有找到資料
        Alert.alert(
          '查詢結果',
          '未找到相關電放資料，請檢查輸入的提單號碼是否正確。',
          [
            {text: '確定', style: 'default'}
          ]
        );
      }
    } catch (error) {
      console.error('查詢失敗:', error);
      Alert.alert(
        '查詢失敗',
        '網路連線異常或伺服器暫時無法回應，請稍後再試。',
        [
          {text: '確定', style: 'default'}
        ]
      );
    } finally {
      setIsLoading(false);
    }
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
                queryType === 'container' ? styles.activeTab : styles.inactiveTab,
                queryType === 'container' && styles.disabledTab
              ]}
              onPress={() => {
                Alert.alert('功能開發中', '貨櫃號碼查詢功能即將推出，目前請使用提單號碼查詢。');
              }}>
              <Text style={styles.tabIcon}>📦</Text>
              <Text style={[
                styles.tabText,
                queryType === 'container' ? styles.activeTabText : styles.inactiveTabText,
                queryType === 'container' && styles.disabledTabText
              ]}>
                貨櫃號碼 Container No.
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* API Status Info */}
        <View style={styles.apiStatusSection}>
          <View style={styles.apiStatusCard}>
            <Text style={styles.apiStatusIcon}>🔗</Text>
            <Text style={styles.apiStatusText}>即時查詢德翔海運電放系統</Text>
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
                <Text style={styles.inputTitle}>提單號碼查詢</Text>
                <Text style={styles.inputSubtitle}>BL Number Query</Text>
              </View>
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>提單號碼 Bill of Lading Number</Text>
              <TextInput
                style={styles.textInput}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder="輸入提單號碼 (例: 220010190069)"
                autoCapitalize="characters"
                editable={!isLoading}
              />
            </View>

            {/* Example formats */}
            <View style={styles.exampleSection}>
              <Text style={styles.exampleTitle}>格式範例：</Text>
              <View style={styles.exampleList}>
                <Text style={styles.exampleItem}>• 220010190069</Text>
                <Text style={styles.exampleItem}>• TSLU2024090001</Text>
                <Text style={styles.exampleItem}>• TSHA240900001</Text>
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
                onPress={() => handleRecentSearch('220010190069')}
                disabled={isLoading}>
                <View style={styles.recentItemContent}>
                  <Text style={styles.recentItemNumber}>220010190069</Text>
                  <Text style={styles.recentItemDate}>今天</Text>
                </View>
                <Text style={styles.recentItemStatus}>已電放 • Surrendered</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.recentItem}
                onPress={() => handleRecentSearch('TSLU2024080015')}
                disabled={isLoading}>
                <View style={styles.recentItemContent}>
                  <Text style={styles.recentItemNumber}>TSLU2024080015</Text>
                  <Text style={styles.recentItemDate}>09/08</Text>
                </View>
                <Text style={styles.recentItemStatus}>查詢範例</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Search Button */}
      <View style={styles.searchButtonContainer}>
        <TouchableOpacity 
          style={[styles.searchButton, isLoading && styles.searchButtonDisabled]} 
          onPress={handleSearch}
          disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator color="white" size="small" />
          ) : (
            <Text style={styles.searchButtonIcon}>🔍</Text>
          )}
          <Text style={styles.searchButtonText}>
            {isLoading ? '查詢中...' : '查詢電放狀態'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


export default TelexReleaseScreen;  