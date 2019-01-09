import TopicList from '../components/TopicList'
import Empty from '../components/Empty'

export default [
  { path: '/', component: Empty },
  {
    path: '/topics',
    name: 'TopicList',
    component: TopicList
  }
]