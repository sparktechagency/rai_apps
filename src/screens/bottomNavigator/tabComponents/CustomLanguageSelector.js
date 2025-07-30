import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from 'react-native';

const CustomLanguageSelector = ({ 
  selectedLanguage = 'ENG',
  languages = ['ENG', 'RUS'], // Backend will provide these
  onLanguageChange,
  disabled = false,
  size = 'default', // 'small', 'default', 'large'
  style,
  containerStyle,
  textStyle,
  activeTextStyle,
}) => {
  const animatedValue = React.useRef(new Animated.Value(
    languages.indexOf(selectedLanguage)
  )).current;

  // Size configurations
  const sizeConfig = {
    small: { 
      containerWidth: 60, 
      containerHeight: 24, 
      fontSize: 10, 
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
    default: { 
      containerWidth: 70, 
      containerHeight: 28, 
      fontSize: 12, 
      paddingHorizontal: 12,
      paddingVertical: 6,
    },
    large: { 
      containerWidth: 80, 
      containerHeight: 32, 
      fontSize: 14, 
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
  };

  const config = sizeConfig[size] || sizeConfig.default;
  const selectedIndex = languages.indexOf(selectedLanguage);
  const segmentWidth = config.containerWidth / languages.length;

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: selectedIndex,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [selectedIndex, animatedValue]);

  const handleLanguagePress = (language, index) => {
    if (!disabled && language !== selectedLanguage) {
      onLanguageChange(language);
    }
  };

  const indicatorPosition = animatedValue.interpolate({
    inputRange: languages.map((_, index) => index),
    outputRange: languages.map((_, index) => index * segmentWidth),
    extrapolate: 'clamp',
  });

  const renderLanguageOption = (language, index) => {
    const isActive = language === selectedLanguage;
    
    return (
      <TouchableOpacity
        key={language}
        onPress={() => handleLanguagePress(language, index)}
        activeOpacity={0.7}
        disabled={disabled}
        style={[
          styles.languageOption,
          {
            width: segmentWidth,
            height: config.containerHeight,
            paddingHorizontal: config.paddingHorizontal / 2,
          }
        ]}
      >
        <Animated.Text
          style={[
            styles.languageText,
            {
              fontSize: config.fontSize,
              color: isActive ? '#FFFFFF' : '#666666',
              fontWeight: isActive ? '600' : '500',
            },
            textStyle,
            isActive && activeTextStyle,
          ]}
        >
          {language}
        </Animated.Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          width: config.containerWidth,
          height: config.containerHeight,
        },
        disabled && styles.containerDisabled,
        containerStyle,
        style,
      ]}
    >
      {/* Background Indicator */}
      <Animated.View
        style={[
          styles.activeIndicator,
          {
            width: segmentWidth - 4,
            height: config.containerHeight - 4,
            borderRadius: (config.containerHeight - 4) / 2,
            transform: [{ translateX: indicatorPosition }],
            marginLeft: 2,
          },
        ]}
      />
      
      {/* Language Options */}
      <View style={styles.optionsContainer}>
        {languages.map(renderLanguageOption)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  containerDisabled: {
    opacity: 0.5,
  },
  activeIndicator: {
    position: 'absolute',
    backgroundColor: '#007AFF',
    shadowColor: '#007AFF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    zIndex: 1,
  },
  optionsContainer: {
    flexDirection: 'row',
    flex: 1,
    zIndex: 2,
  },
  languageOption: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageText: {
    textAlign: 'center',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});

export default CustomLanguageSelector;