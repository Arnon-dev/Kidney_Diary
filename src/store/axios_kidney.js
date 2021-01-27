import axios from 'axios'
import { Decode } from '@/services'

const GetToken = () => {
  const kidnryData = JSON.parse(Decode.decode(localStorage.getItem('kidnryData')))
  console.log(kidnryData)
  const auth = {
    headers: { Authorization: `Bearer ${kidnryData.token}` }
  }
  return auth
}
export default {
  // Login
  async Login (val) {
    const data = val.dataLogin
    try {
      const response = await axios.post(`https://kidney-diary-service.yuzudigital.com/admins/login`, data)
      return response.data
    } catch (error) {
      return error.response
    }
  },
  // Register
  async Register (val) {
    const data = val.dataUser
    // console.log('data', data)
    try {
      const response = await axios.post(`https://kidney-diary-service.yuzudigital.com/admins`, data)
      return response.data
    } catch (error) {
      return error.response  
    }
  },
  // Update Admin
  async UpdateAdmin (val) {
    const data = {
      id: val.id,
      email: val.email,
      firstName: val.firstName,
      lastName: val.lastName,
      position: val.position,
      image: val.image,
      type: val.type,
      activeFlag: val.activeFlag,
      hospitalId: val.hospitalId
    }
    try {
      const response = await axios.put(`https://kidney-diary-service.yuzudigital.com/admins/` + val.id, data)
      return response.data
    } catch (error) {
      return error.response  
    }
  },
  // Get All User
  async GetAllUser () {
    try {
      const response = await axios.get(`https://kidney-diary-service.yuzudigital.com/admins`)
      return response.data
    } catch (error) {
      return error.response  
    }
  },
  // Get All User By Hospital ID
  async GetAllUserByHospitalID (val) {
    console.log(val)
    try {
      const response = await axios.get(`https://kidney-diary-service.yuzudigital.com/users?hospitalId=` + val.hospitalID)
      return response.data
    } catch (error) {
      return error.response  
    }
  },
  // Add Hospital
  async AddHospital () {
    const data = {
      name: '',
      code: '',
      tel: ''
    }
    try {
      const response = await axios.post('http://localhost:8080/hospitals', data)
      return response
    } catch (error) {
      return error.response  
    }
  },
  // Update Hospital
  async UpdateHospital (val) {
    const data = {
      name: '',
      code: '',
      tel: ''
    }
    try {
      const response = await axios.put('http://localhost:8080/hospitals/' + val.id, data)
      return response
    } catch (error) {
      return error.response  
    }
  },
  // Get all Hospital
  async GetAllHospital () {
    try {
      const response = await axios.get(`https://kidney-diary-service.yuzudigital.com/hospitals`)
      return response.data
    } catch (error) {
      return error.response
    }
  },
  // Get One Hospital
  async GetOneHospital (val) {
    try {
      const response = await axios.get('http://localhost:8080/hospitals/' + val.id)
      return response
    } catch (error) {
      return error.response
    }
  },
  // Delete Hospital
  async DeleteHospital (val) {
    try {
      const response = await axios.delete('http://localhost:8080/hospitals' + val.id)
      return response
    } catch (error) {
      return error.response
    }
  },
  // Add Diary
  async AddDiary () {
    const data = {
      userId: 1,
      round: "round",
      dateTime: "dateTime",
      startDate: "startDate",
      endDate: "endDate",
      concentration: "concentration",
      total: "total",
      startDrain: "startDrain",
      stopDrain: "stopDrain",
      drainAmount: "drainAmount",
      startFill: "startFill",
      endFill: "endFill",
      fillAmount: "fillAmount",
      profit: "profit",
      urineAmount: "urineAmount",
      drainColor: "drainColor",
      weight: "weight",
      bloodPressureHigh: "bloodPressureHigh",
      bloodPressureLow: "bloodPressureLow",
      dwellTime: "dwellTime",
      fillTime: "fillTime",
      drainTime: "drainTime"
    }
    try {
      const response = await axios.post('http://localhost:8080/diaries', data)
      return response
    } catch (error) {
      return error.response  
    }
  },
  // Update Diary
  async UpdateDiary (val) {
    const data = {
      userId: 1,
      round: "round",
      dateTime: "dateTime",
      startDate: "startDate",
      endDate: "endDate",
      concentration: "concentration",
      total: "total",
      startDrain: "startDrain",
      stopDrain: "stopDrain",
      drainAmount: "drainAmount",
      startFill: "startFill",
      endFill: "endFill",
      fillAmount: "fillAmount",
      profit: "profit",
      urineAmount: "urineAmount",
      drainColor: "drainColor",
      weight: "weight",
      bloodPressureHigh: "bloodPressureHigh",
      bloodPressureLow: "bloodPressureLow",
      dwellTime: "dwellTime",
      fillTime: "fillTime",
      drainTime: "drainTime"
    }
    try {
      const response = await axios.put('http://localhost:8080/diaries/' + val.id, data)
      return response
    } catch (error) {
      return error.response  
    }
  },
  // Get all Diary
  async GetAllDiary () {
    try {
      const response = await axios.get('http://localhost:8080/diaries')
      return response
    } catch (error) {
      return error.response
    }
  },
  // Get One Diary
  async GetOneDiary (val) {
    try {
      const response = await axios.get('http://localhost:8080/diaries/' + val.id)
      return response
    } catch (error) {
      return error.response
    }
  },
  // Delete Diary
  async DeleteDiary (val) {
    try {
      const response = await axios.delete('http://localhost:8080/diaries' + val.id)
      return response
    } catch (error) {
      return error.response
    }
  },
  // DewellChart
  async GetDewellChart () {
    const auth = await GetToken()
    console.log(auth)
    var typechart = 'getDewellChart'
    try {
      const response = await axios.get(`https://kidney-diary-service.yuzudigital.com/charts?type=` + typechart, auth)
      console.log('GetDewellChart ===========>', response)
      return response.data
    } catch (error) {
      return error.response
    }
  },
  // ProfitChart
  async GetProfitChart () {
    const auth = await GetToken()
    var typechart = 'getProfitChart'
    try {
      const response = await axios.get(`https://kidney-diary-service.yuzudigital.com/charts?type=` + typechart, auth)
      console.log('GetProfitChart ===========>', response.data)
      return response.data
    } catch (error) {
      return error.response
    }
  },
  // WeightChart
  async GetWeightChart () {
    const auth = await GetToken()
    var typechart = 'getWeightChart'
    try {
      const response = await axios.get(`https://kidney-diary-service.yuzudigital.com/charts?type=` + typechart, auth)
      console.log('GetWeightChart ===========>', response)
      return response.data
    } catch (error) {
      return error.response
    }
  }
}