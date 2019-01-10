import TopicList from '../components/TopicList'
import Home from '../components/Home'

export default [
  { path: '/', component: Home },
  {
    path: '/topics',
    name: 'TopicList',
    component: TopicList
  }
]