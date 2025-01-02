import React, { useMemo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import CommonConstant from '../../constants/CommonConstant';
import Responsive from '../../constants/styles/Responsive';
import { getColors } from '../../constants/styles/Theme';
import themeStore from '../../store/themeStore';
import { QUERY_KEYS } from '../../constants/QueryKeys';
import HomeScreenHelper from './libs';

const HomeScreen = () => {
  const { theme } = themeStore();
  const COLORS = useMemo(() => getColors(theme), [theme]);
  const styles = useMemo(() => createStyles(COLORS), [COLORS]);

  // Fetch data with React Query
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.RECOMMENDED],
    queryFn: () => HomeScreenHelper.getData(),
    staleTime: CommonConstant.STALE_TIME,
  });

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
const createStyles = (COLORS) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.defaultBackground,
    },
    header: {
      backgroundColor: COLORS.appBackground,
      width: '100%',
      paddingVertical: Responsive.height(10),
      borderBottomRightRadius: Responsive.width(20),
      borderBottomLeftRadius: Responsive.width(20),
      justifyContent: 'center',
    },
  });




