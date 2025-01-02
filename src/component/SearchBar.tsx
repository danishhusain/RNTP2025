import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, getColors } from '../constants/styles/Theme';
import Responsive from '../constants/styles/Responsive';
import IconName from '../constants/IconName';
import themeStore from '../store/themeStore';

interface SearchBarProps {
  onSearch: (query: string) => void
}

function SearchBar({ onSearch }: SearchBarProps) {
  const { theme } = themeStore();
  const COLORS = getColors(theme);
  const styles = createStyles(COLORS);

  const handleSearch = (searchQuery) => {
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search by surah name and number"
        onChangeText={(searchQuery) => handleSearch(searchQuery)}
        placeholderTextColor={COLORS.lightFog}
      />
      <TouchableOpacity style={styles.iconContainer}>
        <Icon
          name={IconName.SEARCH}
          size={Responsive.width(14)}
          color={COLORS.appHighlight}
        />
      </TouchableOpacity>
    </View>
  );
}

const createStyles = (_COLORS: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: Responsive.width(1),
      borderColor: COLORS.appHighlight,
      borderRadius: Responsive.width(18),
      paddingHorizontal: Responsive.width(10),
      width: '90%',
      alignSelf: 'center',
    },
    input: {
      flex: 1,
      fontSize: Responsive.font(14),
      paddingLeft: Responsive.width(10),
      color: COLORS.white,
    },
    iconContainer: {
      padding: Responsive.width(5),
    },
  });

export default SearchBar;
