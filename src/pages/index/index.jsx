import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { PostCard, PostForm } from '../../components'
import './index.scss'

export default function Index() {
  const [posts, setPosts] = useState([
    {
      title: '泰罗奥特曼',
      content: '泰罗是奥特之父和奥特之母唯一的亲生儿子。',
    }
  ])
  const [formTitle, setFormTitle] = useState('')
  const [formContent, setFormContent] = useState('')
  /**
   * 处理提交表单事件
   */
  function handleSubmit(e) {
    e.preventDefault()
<<<<<<< HEAD
    const { formTitle: title, formContent: content } = this.state
    const newPosts = this.state.posts.concat({ title, content })

    this.setState({
      posts: newPosts,
      formTitle: '',
      formContent: '',
    })
  }

  handleTitleInput(e) {
    this.setState({
      formTitle: e.target.value,
    })
=======

    const newPosts = posts.concat({ title: formTitle, content: formContent })
    setPosts(newPosts)
    setFormTitle('')
    setFormContent('')
>>>>>>> 0e0cf2b464f96119070612bad2d9f282a99fc586
  }

  return (
    <View className="index">
      {posts.map((post, index) => (
        <PostCard 
            key={index} 
            title={post.title} 
            content={post.content} 
            isList
        />
      ))}
      <PostForm
        formTitle={formTitle}
        formContent={formContent}
        handleSubmit={e => handleSubmit(e)}
        handleTitleInput={e => setFormTitle(e.target.value)}
        handleContentInput={e => setFormContent(e.target.value)}
      />
    </View>
  )
}
