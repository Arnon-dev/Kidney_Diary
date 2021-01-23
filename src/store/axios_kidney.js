import axios from 'axios'

export default {
  // Login
  async Login (val) {
    const data = {
      data: val
    }
    try {
      const response = await axios.post('http://localhost:8080/users', data)
      return response
    } catch (error) {
      return error.response
    }
  },
  // Register
  async Register () {
    const data = {
      username: "user1",
      password: "1234",
      firstName: "Kidney",
      lastName: "Diary",
      dateOfBirth: "1995-09-18",
      age: 25,
      telNo: "0123456789",
      OTP: null,
      email: "email@gmail.com",
      gender: "MALE",
      installationDate: "2020-12-27",
      dateOfDialysis: "2020-12-27",
      staffName: "Staff",
      staffTel: "0123456789",
      remark: "remark",
      hospitalId: 1
    }
    try {
      const response = await axios.post('http://localhost:8080/users', data)
      return response
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
      const response = await axios.get('http://localhost:8080/hospitals')
      return response
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
  }
}