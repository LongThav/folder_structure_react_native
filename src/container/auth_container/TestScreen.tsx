import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import RenderHome from '../../component/RenderHome';
import data from '../../temp/dataHome';
import { useAppDispatch, useAppSelector } from '../../hook/reduxhooks';
import { handleFetchNews } from '../../redux/actions/actions';
import defaultStyle from '../../styles';
import defaultColor from '../../them/colors';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const news = useAppSelector(state => state.news);
  const loading = useAppSelector(state => state.news.loading);

  useEffect(() => {
    dispatch(handleFetchNews());
  }, []);

  const _renderItem = useCallback(
    ({ item, index }: any) => {
      return <RenderHome item={item} index={index} />;
    },
    [data],
  );


  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'red' }}>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={{
        padding: defaultStyle.pandding,
        height: '100%',
        backgroundColor: defaultColor.white,
      }}
      scrollEventThrottle={16}
      data={news.loading ? [] : news.data.data}
      renderItem={_renderItem}
      ListEmptyComponent={() => {
        return (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>No data found!</Text>
          </View>
        );
      }}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});