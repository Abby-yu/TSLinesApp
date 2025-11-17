// =====================================
// src/screens/HomeScreen.tsx
// =====================================

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
import {useNavigation} from '@react-navigation/native';
import styles from "../styles/common";

// 嘗試導入圖標，失敗時使用備用方案
let Icon: any;
let FeatherIcon: any;
let iconsAvailable = false;

try {
  Icon = require('react-native-vector-icons/MaterialIcons').default;
  FeatherIcon = require('react-native-vector-icons/Feather').default;
  iconsAvailable = true;
} catch (error) {
  console.log('Vector icons not available, using fallback');
}

interface ServiceCardProps {
  title: string;
  subtitle: string;
  backgroundColor: string;
  iconName?: string;
  iconType?: 'material' | 'feather';
  iconColor?: string;
  emoji: string;
  onPress?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  subtitle,
  backgroundColor,
  iconName,
  iconType,
  iconColor,
  emoji,
  onPress,
}) => {
  const renderIcon = () => {
    if (iconsAvailable && iconName && iconType && iconColor) {
      try {
        if (iconType === 'material' && Icon) {
          return <Icon name={iconName} size={32} color={iconColor} />;
        } else if (iconType === 'feather' && FeatherIcon) {
          return <FeatherIcon name={iconName} size={32} color={iconColor} />;
        }
      } catch (error) {
        console.log('Icon rendering failed, using emoji fallback');
      }
    }
    return <Text style={styles.serviceEmoji}>{emoji}</Text>;
  };

  return (
    <TouchableOpacity
      style={[styles.serviceCard, {backgroundColor}]}
      onPress={onPress}>
      {renderIcon()}
      <Text style={styles.serviceTitle}>{title}</Text>
      <Text style={styles.serviceSubtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
};

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  const handleServicePress = (serviceName: string) => {
    console.log(`${serviceName} 服務被點擊`);
    if (serviceName === '電放查詢') {
      navigation.navigate('TelexRelease');
    }
    // TODO: 添加其他服務的導航
  };

  const handleSchedulePress = () => {
    console.log('船期查詢被點擊');
    // TODO: 添加船期查詢導航
  };

  const handleActionPress = (actionName: string) => {
    console.log(`${actionName} 被點擊`);
  };

  const renderHeaderIcon = () => {
    if (iconsAvailable && Icon) {
      try {
        return <Icon name="anchor" size={24} color="white" />;
      } catch (error) {
        console.log('Header icon failed, using emoji');
      }
    }
    return <Text style={styles.anchorEmoji}>⚓</Text>;
  };

  const renderScheduleIcon = () => {
    if (iconsAvailable && Icon) {
      try {
        return <Icon name="directions-boat" size={28} color="white" />;
      } catch (error) {
        console.log('Schedule icon failed, using emoji');
      }
    }
    return <Text style={styles.scheduleEmoji}>🚢</Text>;
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
            {renderHeaderIcon()}
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <View style={styles.welcomeHeader}>
            <Text style={styles.welcomeEmoji}>👋</Text>
            <View style={styles.welcomeTextContainer}>
              <Text style={styles.welcomeTitle}>歡迎使用德翔海運服務</Text>
              <Text style={styles.welcomeSubtitle}>專業海運服務，提供全方位服務</Text>
            </View>
          </View>
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
                emoji="📋"
                onPress={() => handleServicePress('運單查詢')}
              />
              <ServiceCard
                title="電放查詢"
                subtitle="Telex Release"
                backgroundColor="#E8F8F5"
                iconName="file-text"
                iconType="feather"
                iconColor="#10B981"
                emoji="📄"
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
                emoji="📦"
                onPress={() => handleServicePress('免費滯留')}
              />
              <ServiceCard
                title="貨櫃動態"
                subtitle="Cargo Tracking"
                backgroundColor="#FAF5FF"
                iconName="map-pin"
                iconType="feather"
                iconColor="#8B5CF6"
                emoji="📍"
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
          {renderScheduleIcon()}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;