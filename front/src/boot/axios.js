import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { useCounterStore } from 'stores/example-store'
import { Alert } from 'src/addons/Alert'
// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: 'https://api.example.com' })

export default boot(({ app, router }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios.create({ baseURL: import.meta.env.VITE_API_BACK })
  app.config.globalProperties.$url = import.meta.env.VITE_API_BACK
  app.config.globalProperties.$store = useCounterStore()
  app.config.globalProperties.$alert = Alert
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  const token = localStorage.getItem('tokenNeuro')
  if (token) {
    useCounterStore().loading = true
    app.config.globalProperties.$axios.defaults.headers.common.Authorization = `Bearer ${token}`
    app.config.globalProperties.$axios.post('me').then((res) => {
      // console.log(res.data)
      useCounterStore().user = res.data.user
      useCounterStore().isLoggedIn = true
    }).catch(() => {
      app.config.globalProperties.$axios.defaults.headers.common.Authorization = ''
      useCounterStore().user = {}
      localStorage.removeItem('tokenNeuro')
      useCounterStore().isLoggedIn = false
      router.push('/login')
    }).finally(() => {
      useCounterStore().loading = false
    })
  }
  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
