// src/screens/TelexReleaseScreen/TelexReleaseScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const TelexReleaseScreen: React.FC = () => {
  const [queryType, setQueryType] = useState<'bl' | 'container'>('bl');
  const [showResultsPage, setShowResultsPage] = useState(false);
  const [showDetailPage, setShowDetailPage] = useState(false);
  const [selectedContainer, setSelectedContainer] = useState<string>('');

  const switchQueryType = (type: 'bl' | 'container') => {
    setQueryType(type);
  };

  const showResults = () => {
    setShowResultsPage(true);
    setShowDetailPage(false);
  };

  const showQuery = () => {
    setShowResultsPage(false);
    setShowDetailPage(false);
  };

  const showDetail = (containerId: string) => {
    setSelectedContainer(containerId);
    setShowDetailPage(true);
    setShowResultsPage(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerButton}>
            <Icon name="arrow-left" size={20} color="#4B5563" />
          </TouchableOpacity>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>電放查詢</Text>
            <Text style={styles.headerSubtitle}>Telex Release Query</Text>
          </View>
          <TouchableOpacity style={styles.headerButton}>
            <Icon name="help-circle" size={20} color="#4B5563" />
          </TouchableOpacity>
        </View>

        {/* Query Type Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tab,
              queryType === 'bl' ? styles.tabActive : styles.tabInactive,
            ]}
            onPress={() => switchQueryType('bl')}
          >
            <Icon name="file-text" size={16} color={queryType === 'bl' ? 'white' : '#374151'} />
            <Text style={queryType === 'bl' ? styles.tabTextActive : styles.tabTextInactive}>
              提單號碼 BL No.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              queryType === 'container' ? styles.tabActive : styles.tabInactive,
            ]}
            onPress={() => switchQueryType('container')}
          >
            <Icon name="package" size={16} color={queryType === 'container' ? 'white' : '#374151'} />
            <Text
              style={queryType === 'container' ? styles.tabTextActive : styles.tabTextInactive}
            >
              貨櫃號碼 Container No.
            </Text>
          </TouchableOpacity>
        </View>

        {/* Query Section */}
        {!showResultsPage && !showDetailPage && (
          <View style={styles.querySection}>
            {queryType === 'bl' ? (
              <View style={styles.inputCard}>
                <Text style={styles.queryTitle}>提單號碼查詢</Text>
                <Text style={styles.querySubtitle}>BL Number Query</Text>
                <TextInput
                  placeholder="輸入提單號碼 (例: TSLU2024090001)"
                  style={styles.textInput}
                />
                <View style={styles.exampleBox}>
                  <Text style={styles.exampleTitle}>格式範例：</Text>
                  <Text style={styles.exampleText}>• TSLU2024090001</Text>
                  <Text style={styles.exampleText}>• TSHA240900001</Text>
                  <Text style={styles.exampleText}>• TSKE2024000123</Text>
                </View>
              </View>
            ) : (
              <View style={styles.inputCard}>
                <Text style={styles.queryTitle}>貨櫃號碼查詢</Text>
                <Text style={styles.querySubtitle}>Container Number Query</Text>
                <TextInput
                  placeholder="輸入貨櫃號碼 (例: TSLU1234567)"
                  style={styles.textInput}
                />
                <View style={styles.exampleBox}>
                  <Text style={styles.exampleTitle}>格式範例：</Text>
                  <Text style={styles.exampleText}>• TSLU1234567</Text>
                  <Text style={styles.exampleText}>• TSHA9876543</Text>
                  <Text style={styles.exampleText}>• TSKE5555555</Text>
                </View>
              </View>
            )}
          </View>
        )}

        {/* Search Button */}
        {!showResultsPage && !showDetailPage && (
          <TouchableOpacity style={styles.searchButton} onPress={showResults}>
            <Icon name="search" size={20} color="white" />
            <Text style={styles.searchButtonText}>查詢電放狀態</Text>
          </TouchableOpacity>
        )}

        {/* Results Page */}
        {showResultsPage && (
          <View style={styles.resultsSection}>
            <Text style={styles.resultsTitle}>查詢結果</Text>
            {/* Example container list */}
            <TouchableOpacity
              style={styles.containerItem}
              onPress={() => showDetail('TSLU1234567')}
            >
              <Text style={styles.containerId}>TSLU1234567</Text>
              <Text style={styles.containerStatus}>已電放</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.containerItem}
              onPress={() => showDetail('TSLU1234568')}
            >
              <Text style={styles.containerId}>TSLU1234568</Text>
              <Text style={styles.containerStatus}>已電放</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Detail Page */}
        {showDetailPage && (
          <View style={styles.detailSection}>
            <Text style={styles.resultsTitle}>貨櫃詳情</Text>
            <Text style={styles.detailContainer}>{selectedContainer}</Text>
            <Text style={styles.detailText}>40' HC Container</Text>
            <Text style={styles.detailText}>Status: Surrendered</Text>
            <Text style={styles.detailText}>Release Date: 2024/09/09</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },
  scrollContent: { padding: 16, paddingBottom: 100 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleContainer: { alignItems: 'center' },
  headerTitle: { fontSize: 18, fontWeight: '600', color: '#111827' },
  headerSubtitle: { fontSize: 12, color: '#6B7280' },

  tabContainer: { flexDirection: 'row', marginBottom: 16 },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 16,
    marginHorizontal: 4,
  },
  tabActive: { backgroundColor: '#3B82F6' },
  tabInactive: { backgroundColor: '#E5E7EB' },
  tabTextActive: { color: 'white', marginLeft: 6 },
  tabTextInactive: { color: '#374151', marginLeft: 6 },

  querySection: {},
  inputCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  queryTitle: { fontSize: 18, fontWeight: '600', marginBottom: 4, color: '#111827' },
  querySubtitle: { fontSize: 12, color: '#6B7280', marginBottom: 12 },
  textInput: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
    backgroundColor: 'white',
  },
  exampleBox: { backgroundColor: '#ECFDF5', borderRadius: 12, padding: 12 },
  exampleTitle: { fontWeight: '500', marginBottom: 4, color: '#065F46' },
  exampleText: { fontSize: 12, color: '#065F46' },

  searchButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#10B981',
    paddingVertical: 14,
    borderRadius: 16,
    marginBottom: 16,
  },
  searchButtonText: { color: 'white', fontWeight: '600', marginLeft: 8 },

  resultsSection: { marginTop: 16 },
  resultsTitle: { fontSize: 18, fontWeight: '600', marginBottom: 8, color: '#111827' },
  containerItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerId: { fontWeight: '600', color: '#111827' },
  containerStatus: { color: '#10B981', fontWeight: '500' },

  detailSection: { marginTop: 16, backgroundColor: 'white', borderRadius: 16, padding: 16 },
  detailContainer: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
  detailText: { fontSize: 14, color: '#374151', marginBottom: 2 },
});

export default TelexReleaseScreen;
