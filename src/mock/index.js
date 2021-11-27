import Mock from 'mockjs'

Mock.setup({
  timeout: '200-600'
})
Mock.mock(
  '/user/userInfo',
  'get',
  () => {
    return {
      name: 'glpla',
      age: 40
    }
  }
)