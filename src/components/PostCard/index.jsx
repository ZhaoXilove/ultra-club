import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default function PostCard({ title, isList, content }) {
  const handleClick = () => {
    if (isList) {

      Taro.navigateTo({
        url: `/pages/post/post?title=${title}&content=${content}`,
      })
    }
  }

  return (
    <View className="postcard" onClick={handleClick}>
      <View className="post-title">{title}</View>
      <View className="post-content">{content}</View>
    </View>
  )
}
