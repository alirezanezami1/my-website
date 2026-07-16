import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/resume-backend/wp-json/wp/v2',
  timeout: 10000,
})

export const getProfileData = async () => {
  try {
    const response = await api.get('/pages/26')
    return response.data.acf
  } catch (error) {
    console.error('Error fetching profile:', error)
    throw error
  }
}
