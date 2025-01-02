import React, { useRef, useEffect } from 'react';
import { Animated, Dimensions, Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('window');
const data = ['brown', 'orange', 'red', 'blue', 'green'];

export default function BannerCutom() {
  const scrollValue = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const translateX = scrollValue.interpolate({
    inputRange: [0, width],
    outputRange: [0, 20],
  });
  const inputRange = [0];
  const scaleOutputRange = [1];
  data.forEach(
    (_, i) =>
      i != 0 && inputRange.push(...[(width * (2 * i - 1)) / 2, width * i]),
  );
  data.forEach((_, i) => i != 0 && scaleOutputRange.push(...[0, 1]));
  const scaleX = scrollValue.interpolate({
    inputRange,
    outputRange: scaleOutputRange,
  });

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % data.length;
      scrollViewRef.current.scrollTo({ x: index * width, animated: true });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollValue } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
      >
        {data.map(x => (
          <Pressable style={[styles.card, { backgroundColor: x }]} key={x} onPress={() => console.log("onPress", x)}>
            <Image
              style={[{ width: '100%', height: '100%', borderRadius: 8 }]}
              source={{
                uri: 'https://img.freepik.com/premium-vector/digital-marketing-agency-corporate-business-flyer-modern-facebook-cover-social-media-post-banner_168750-187.jpg?w=1380',
                headers: { Authorization: 'someAuthToken' },
              }}
            />
          </Pressable>
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer} pointerEvents="none">
        {data.map(x => (
          <Indicator key={x} />
        ))}
        <Animated.View
          style={[
            styles.activeIndicator,
            [
              styles.animatedIndicator,
              { transform: [{ translateX }, { scaleX }] },
            ],
          ]}
        />
      </View>
    </View>
  );
}

function Indicator() {
  return <View style={styles.indicator} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1 / 6,
    paddingVertical: 3,
    borderRadius: 8
  },
  card: {
    width: width - 10,
    height: '100%',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  indicatorContainer: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#00000044',
    marginHorizontal: 5,
  },
  activeIndicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginHorizontal: 5,
  },
  animatedIndicator: {
    position: 'absolute',
  },
});