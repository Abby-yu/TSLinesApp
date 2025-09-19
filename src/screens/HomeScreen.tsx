// src/screens/HomeScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const {width} = Dimensions.get('window');

interface ServiceCardProps {
  title: string;
  subtitle: string;
  backgroundColor: string;
  iconName: string;
  iconType: 'material' | 'feather';
  iconColor: string;
  onPress?: () => void;
}

interface ActionButtonProps {
  title: string;
  iconName: string;
  iconType: 'material' | 'feather';
  onPress?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  subtitle,
  backgroundColor,
  iconName,
  iconType,
  iconColor,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.serviceCard, {backgroundColor}]}
      onPress={onPress}>
      {iconType === 'material' ? (
        <Icon name={iconName} size={32} color={iconColor} />
      ) : (
        <FeatherIcon name={iconName} size={32} color={iconColor} />
      )}
      <Text style={styles.serviceTitle}>{title}</Text>
      <Text style={styles.serviceSubtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
};

const ActionButton: React.FC<ActionButtonProps> = ({title, iconName, iconType, onPress}) => {
  return (
    <TouchableOpacity style={styles.actionButton} onPress={onPress}>
      {iconType === 'material' ? (
        <Icon name={iconName} size={24} color="#6B7280" />
      ) : (
        <FeatherIcon name={iconName} size={24} color="#6B7280" />
      )}
      <Text style={styles.actionText}>{title}</Text>
    </TouchableOpacity>
  );
};


type RootStackParamList = {
  Home: undefined;
  TelexRelease: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleServicePress = (serviceName: string) => {
    if (serviceName === '電放查詢') {
      navigation.navigate('TelexRelease');
    } else {
      console.log(`${serviceName} 服務被點擊`);
    }
  };

  const handleSchedulePress = () => {
    console.log('船期查詢被點擊');
    // 這裡可以添加導航邏輯
  };

  const handleActionPress = (actionName: string) => {
    console.log(`${actionName} 被點擊`);
    // 這裡可以添加相應的功能
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4A6CF7" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>德翔海運</Text>
            <Text style={styles.headerSubtitle}>TS Lines</Text>
          </View>
          <TouchableOpacity style={styles.anchorButton}>
            <Icon name="anchor" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>歡迎使用德翔海運服務</Text>
          <Text style={styles.welcomeSubtitle}>專業海運服務，提供全方位服務</Text>
        </View>

        {/* Services Section */}
        <View style={styles.servicesSection}>
          <Text style={styles.sectionTitle}>服務功能</Text>
          
          <View style={styles.servicesGrid}>
            {/* Row 1 */}
            <View style={styles.serviceRow}>
              <ServiceCard
                title="運單查詢"
                subtitle="航次運單查詢"
                backgroundColor="#E8F2FF"
                iconName="description"
                iconType="material"
                iconColor="#4A6CF7"
                onPress={() => handleServicePress('運單查詢')}
              />
              <ServiceCard
                title="電放查詢"
                subtitle="Telex Release"
                backgroundColor="#E8F8F5"
                iconName="file-text"
                iconType="feather"
                iconColor="#10B981"
                onPress={() => handleServicePress('電放查詢')}
              />
            </View>

            {/* Row 2 */}
            <View style={styles.serviceRow}>
              <ServiceCard
                title="免費滯留"
                subtitle="Free Days Query"
                backgroundColor="#FFF7ED"
                iconName="package"
                iconType="feather"
                iconColor="#F59E0B"
                onPress={() => handleServicePress('免費滯留')}
              />
              <ServiceCard
                title="貨櫃動態"
                subtitle="Cargo Tracking"
                backgroundColor="#FAF5FF"
                iconName="map-pin"
                iconType="feather"
                iconColor="#8B5CF6"
                onPress={() => handleServicePress('貨櫃動態')}
              />
            </View>
          </View>
        </View>

        {/* Port to Port Schedule Button */}
        <TouchableOpacity style={styles.scheduleButton} onPress={handleSchedulePress}>
          <View style={styles.scheduleContent}>
            <Text style={styles.scheduleTitle}>船期查詢</Text>
            <Text style={styles.scheduleSubtitle}>Port to Port Schedule</Text>
          </View>
          <Icon name="directions-boat" size={28} color="white" />
        </TouchableOpacity>

        {/* Bottom Action Buttons */}
        <View style={styles.bottomActions}>
          <ActionButton
            title="聯絡客服"
            iconName="info-outline"
            iconType="material"
            onPress={() => handleActionPress('聯絡客服')}
          />
          <ActionButton
            title="最新消息"
            iconName="description"
            iconType="material"
            onPress={() => handleActionPress('最新消息')}
          />
          <ActionButton
            title="線上客服"
            iconName="headphones"
            iconType="feather"
            onPress={() => handleActionPress('線上客服')}
          />
        </View>
      </ScrollView>

      {/* Bottom Tab Navigation */}
      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.tabButton}>
          <Icon name="home" size={24} color="#4A6CF7" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabButton}>
          <Icon name="search" size={24} color="#9CA3AF" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabButton}>
          <Icon name="notifications-none" size={24} color="#9CA3AF" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabButton}>
          <Icon name="person-outline" size={24} color="#9CA3AF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    backgroundColor: '#4A6CF7',
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTextContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  headerSubtitle: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 2,
  },
  anchorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  welcomeSection: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  welcomeTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 5,
  },
  welcomeSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  servicesSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 15,
  },
  servicesGrid: {
    gap: 12,
  },
  serviceRow: {
    flexDirection: 'row',
    gap: 12,
  },
  serviceCard: {
    flex: 1,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2.22,
    elevation: 3,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginTop: 8,
    marginBottom: 4,
    textAlign: 'center',
  },
  serviceSubtitle: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  scheduleButton: {
    backgroundColor: '#4A6CF7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  scheduleContent: {
    flex: 1,
  },
  scheduleTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 4,
  },
  scheduleSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  bottomActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    marginBottom: 10,
  },
  actionButton: {
    alignItems: 'center',
    gap: 8,
  },
  actionText: {
    fontSize: 12,
    color: '#6B7280',
  },
  bottomTab: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    justifyContent: 'space-around',
  },
  tabButton: {
    padding: 8,
  },
});

export default HomeScreen;