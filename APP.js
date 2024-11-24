생성, 수정, 업로드 불가 … 스토리지가 가득 찬 상태로 2년 이상 지나면 Drive와 Gmail에서 파일이 삭제될 수 있습니다.
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ImagePickerComponent from './ImagePickerComponent';
import YouTubeResults from './api';

export default function App() {
  const [keyword, setKeyword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* 이미지 선택 및 분석 */}
      <ImagePickerComponent onKeywordDetected={setKeyword} />
      {/* 키워드에 따른 YouTube 검색 결과 */}
      {keyword && <YouTubeResults query={keyword} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
