// src/screens/TelexReleaseResultScreen.tsx

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TelexReleaseResponse} from '../services/telexApi';

interface RouteParams {
  queryType: 'bl' | 'container';
  queryValue: string;
  apiResponse: TelexReleaseResponse;
}

const TelexReleaseResultScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const {queryType, queryValue, apiResponse} = route.params as RouteParams;

  const telexData = apiResponse.docs?.[0];
  if (!telexData) {
    return (
      <View style={uiStyles.noResultContainer}>
        <Text style={uiStyles.noResultText}>
          未找到相關電放資料，請檢查輸入的提單號碼是否正確。
        </Text>
        <TouchableOpacity style={uiStyles.backButton} onPress={() => navigation.goBack()}>
          <Text style={uiStyles.backButtonText}>← 返回</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const vessel = telexData.BL_VESSEL || 'N/A';
  const voyage = telexData.BL_VOYAGE || 'N/A';
  const getPortName = (portCode: string) => {
    const portMap: {[key: string]: string} = {
      'TWKEL': 'KEELUNG',
      'TWKHH': 'KAOHSIUNG',
      'TWTPE': 'TAIPEI',
    };
    return portMap[portCode] || portCode;
  };
  const isReleased = telexData.BL_SURRENDERED === 'Y';
  const releaseStatusText = isReleased ? '電放已核准' : '電放處理中';
  const surrenderStatusText = isReleased ? 'BL Surrendered' : 'Processing';

  return (
    <SafeAreaView style={uiStyles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0A2463" />
      
      {/* Header */}
      <View style={uiStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={uiStyles.headerButton}>
          <Text style={uiStyles.headerButtonText}>←</Text>
        </TouchableOpacity>
        <View style={uiStyles.headerTitleContainer}>
          <Text style={uiStyles.headerTitle}>電放查詢結果</Text>
          <Text style={uiStyles.headerSubtitle}>Telex Release Results</Text>
        </View>
        <TouchableOpacity style={uiStyles.headerButton}>
          <Text style={uiStyles.headerButtonText}>↓</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={uiStyles.scrollView}>
        {/* Main Status Card */}
        <View style={[uiStyles.card, uiStyles.statusCard]}>
          <Text style={uiStyles.mainStatusText}>{releaseStatusText}</Text>
          <Text style={uiStyles.mainStatusSubText}>{surrenderStatusText}</Text>
        </View>

        {/* Query Info Card */}
        <View style={uiStyles.card}>
          <View style={uiStyles.infoRow}>
            <Text style={uiStyles.infoLabel}>提單號碼</Text>
            <Text style={uiStyles.infoValue}>{telexData.BL_NUMBER}</Text>
          </View>
          <View style={uiStyles.infoRow}>
            <Text style={uiStyles.infoLabel}>查詢類型</Text>
            <Text style={uiStyles.infoValue}>{queryType === 'bl' ? '提單' : '貨櫃'}</Text>
          </View>
        </View>

        {/* Master Data Card */}
        <View style={uiStyles.card}>
          <View style={uiStyles.infoRow}>
            <Text style={uiStyles.infoLabel}>船名 / 航次</Text>
            <Text style={uiStyles.infoValue}>{vessel} / {voyage}</Text>
          </View>
          <View style={uiStyles.infoRow}>
            <Text style={uiStyles.infoLabel}>目的港</Text>
            <Text style={uiStyles.infoValue}>{getPortName(telexData.BL_PORT)}</Text>
          </View>
          <View style={uiStyles.infoRow}>
            <Text style={uiStyles.infoLabel}>貨物類別</Text>
            <Text style={uiStyles.infoValue}>{telexData.BL_GEN_TYPE}</Text>
          </View>
          <View style={uiStyles.infoRow}>
            <Text style={uiStyles.infoLabel}>電放備註</Text>
            <Text style={uiStyles.infoValue}>{telexData.NOTE1 || '無'}</Text>
          </View>
        </View>

        {/* Action and Time Card */}
        <View style={uiStyles.card}>
          <View style={uiStyles.infoRow}>
            <Text style={uiStyles.infoLabel}>系統動作</Text>
            <Text style={uiStyles.infoValue}>{telexData.ACTION || 'N/A'}</Text>
          </View>
          <View style={uiStyles.infoRow}>
            <Text style={uiStyles.infoLabel}>狀態備註</Text>
            <Text style={uiStyles.infoValue}>{telexData.NOTE3 || 'N/A'}</Text>
          </View>
          <View style={uiStyles.infoRow}>
            <Text style={uiStyles.infoLabel}>更新時間</Text>
            <Text style={uiStyles.infoValue}>{telexData.ACTIONDATE || 'N/A'}</Text>
          </View>
        </View>

        {/* Additional Info Section */}
        <View style={uiStyles.card}>
          <View style={uiStyles.infoRow}>
            <Text style={uiStyles.infoLabel}>發貨人 Shipper</Text>
            <Text style={uiStyles.infoValue}>{telexData.SHIPPER || 'N/A'}</Text>
          </View>
          <View style={uiStyles.infoRow}>
            <Text style={uiStyles.infoLabel}>收貨人 Consignee</Text>
            <Text style={uiStyles.infoValue}>{telexData.CONSIGNEE || 'N/A'}</Text>
          </View>
          <View style={uiStyles.infoRow}>
            <Text style={uiStyles.infoLabel}>通知人 Notify</Text>
            <Text style={uiStyles.infoValue}>{telexData.NOTIFY || 'N/A'}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// --- 優化後的樣式定義 ---
const uiStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E6F0F8', // 淺藍灰色背景，更柔和
  },
  header: {
    backgroundColor: '#0A2463', // 深海藍
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headerButton: {
    padding: 5,
  },
  headerButtonText: {
    fontSize: 24,
    color: '#fff',
  },
  headerTitleContainer: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#BFCFFF', // 淺藍色，與深藍背景協調
    marginTop: 2,
  },
  scrollView: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statusCard: {
    alignItems: 'center',
    paddingVertical: 25,
    backgroundColor: '#0D3B66', // 另一種藍色，用於區分
  },
  mainStatusText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  mainStatusSubText: {
    fontSize: 16,
    color: '#C7D9E5',
    marginTop: 5,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  infoLabel: {
    fontSize: 14,
    color: '#616161',
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#212121',
    textAlign: 'right',
    flexShrink: 1,
  },
  // 錯誤提示頁面樣式
  noResultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#E6F0F8',
  },
  noResultText: {
    fontSize: 16,
    color: '#757575',
    textAlign: 'center',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#0A2463',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export {TelexReleaseResultScreen};