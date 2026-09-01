import axios from 'axios'
import { useToast } from 'vue-toastification'

const toast = useToast()

const api = axios.create({
  baseURL: 'http://localhost:8080/resume-backend/wp-json/wp/v2',
  timeout: 10000,
})

export const getProfileData = async () => {
  try {
    const response = await api.get('/pages/26')
    return response.data.acf
  } catch (error) {
    toast.error('در دریافت اطلاعات مشکلی پیش آمد. لطفاً بعداً دوباره تلاش کنید.')
  }
}

export const getProjectsData = async () => {
  try {
    const response = await api.get('/projects')
    return response.data
  } catch (error) {
    toast.error('در دریافت اطلاعات مشکلی پیش آمد. لطفاً بعداً دوباره تلاش کنید.')
    throw error
  }
}
