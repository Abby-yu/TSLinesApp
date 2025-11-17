import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FDF4',
  },
  header: {
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
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  headerSubtitle: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  
  // API Status Section
  apiStatusSection: {
    paddingTop: 16,
    paddingBottom: 8,
  },
  apiStatusCard: {
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(59, 130, 246, 0.2)',
  },
  apiStatusIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  apiStatusText: {
    fontSize: 12,
    color: '#1E40AF',
    fontWeight: '500',
  },
  
  // Tab Styles
  tabSection: {
    paddingTop: 12,
    paddingBottom: 16,
  },
  tabContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 16,
    padding: 8,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  activeTab: {
    backgroundColor: '#10B981',
  },
  inactiveTab: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  disabledTab: {
    backgroundColor: 'rgba(156, 163, 175, 0.3)',
  },
  tabIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  tabText: {
    fontSize: 12,
    fontWeight: '600',
  },
  activeTabText: {
    color: 'white',
  },
  inactiveTabText: {
    color: '#6B7280',
  },
  disabledTabText: {
    color: '#9CA3AF',
  },
  
  // Input Section
  inputSection: {
    marginBottom: 20,
  },
  inputCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  inputHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  iconContainer: {
    width: 64,
    height: 64,
    backgroundColor: '#DCFCE7',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  searchIcon: {
    fontSize: 32,
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  inputSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  exampleSection: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    borderRadius: 12,
    padding: 16,
  },
  exampleTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#047857',
    marginBottom: 8,
  },
  exampleList: {
    gap: 4,
  },
  exampleItem: {
    fontSize: 13,
    color: '#059669',
  },
  
  // Recent Section
  recentSection: {
    marginBottom: 100,
  },
  recentCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  recentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  historyIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  recentTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
  },
  recentList: {
    gap: 8,
  },
  recentItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.5)',
  },
  recentItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  recentItemNumber: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
  },
  recentItemDate: {
    fontSize: 12,
    color: '#6B7280',
  },
  recentItemStatus: {
    fontSize: 14,
    color: '#6B7280',
  },
  
  // Search Button
  searchButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  searchButton: {
    backgroundColor: '#10B981',
    borderRadius: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  searchButtonDisabled: {
    backgroundColor: '#9CA3AF',
  },
  searchButtonIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
  
  // Result Styles
  summarySection: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  summaryCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  summaryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  successBadge: {
    backgroundColor: '#DCFCE7',
  },
  warningBadge: {
    backgroundColor: '#FEF3C7',
  },
  statusBadgeText: {
    fontSize: 12,
    fontWeight: '500',
  },
  successBadgeText: {
    color: '#059669',
  },
  warningBadgeText: {
    color: '#D97706',
  },
  summaryText: {
    fontSize: 14,
    color: '#6B7280',
  },
  summaryValue: {
    fontWeight: '500',
    color: '#1F2937',
  },

  // Result Section
  resultSection: {
    marginBottom: 16,
  },
  resultCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  statusHeader: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  successHeader: {
    backgroundColor: '#10B981',
  },
  warningHeader: {
    backgroundColor: '#F59E0B',
  },
  statusContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkIcon: {
    fontSize: 24,
    color: 'white',
    marginRight: 12,
  },
  statusTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  statusSubtitle: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  statusMark: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  masterInfo: {
    padding: 20,
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  infoItem: {
    width: '45%',
  },
  infoLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
  },
  infoSubValue: {
    fontSize: 12,
    color: '#6B7280',
  },
  statusValue: {
    fontSize: 14,
    fontWeight: '500',
  },
  successText: {
    color: '#059669',
  },
  warningText: {
    color: '#D97706',
  },
  releaseInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  releaseLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  releaseValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
  },
  notesInfo: {
    marginTop: 12,
    padding: 12,
    backgroundColor: '#FEF3C7',
    borderRadius: 8,
  },
  notesLabel: {
    fontSize: 12,
    color: '#92400E',
    fontWeight: '500',
    marginBottom: 4,
  },
  notesValue: {
    fontSize: 13,
    color: '#78350F',
    lineHeight: 18,
  },

  // Container Section
  containerSection: {
    marginBottom: 20,
  },
  containerCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  containerIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  containerTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
  },
  infoList: {
    gap: 12,
  },
  infoRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(229, 231, 235, 0.5)',
  },
  infoRowLabel: {
    fontSize: 14,
    color: '#6B7280',
    width: 100,
    fontWeight: '500',
  },
  infoRowValue: {
    fontSize: 14,
    color: '#1F2937',
    flex: 1,
  },
  noInfoText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    fontStyle: 'italic',
    paddingVertical: 20,
  },

  // Services Section
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
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 2.22,
    elevation: 3,
  },
  serviceEmoji: {
    fontSize: 32,
    marginBottom: 8,
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

  // Welcome Section
  welcomeSection: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  welcomeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  welcomeEmoji: {
    fontSize: 24,
  },
  welcomeTextContainer: {
    flex: 1,
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



  // Button Styles
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  anchorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  exportButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exportButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  shareButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },


  
  // Schedule Button
  scheduleButton: {
    backgroundColor: '#4A6CF7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
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
  scheduleEmoji: {
    fontSize: 28,
  },
  anchorEmoji: {
    fontSize: 20,
  },


});


export default styles;
