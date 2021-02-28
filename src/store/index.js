import Vue from "vue";
import Vuex from "vuex";
import AxiosAPI from "../store/axios_kidney";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    // Manage User
    stateModalManageUser: false,
    // User (Login, Register)
    stateLoginUser: [],
    stateRegisterUser: [],
    stateGetAllUser: [],
    stateGetAllUserByHospital: [],
    stateUpdateAdmin: [],
    // Hospital (Add, Update, GetAll, GetOne, Delete)
    stateAddHospital: [],
    stateUpdateHospital: [],
    stateGetAllHospital: [],
    stateGetOneHospital: [],
    stateDeleteHospital: [],
    // Diary (Add, Update, GetAll, GetOne, Delete)
    stateAddDiary: [],
    stateUpdateDiary: [],
    stateGetAllDiary: [],
    stateGetOneDiary: [],
    stateDeleteDiary: [],
    // Dewell Graph
    stateGetDewellChart: [],
    stateGetDewellChartData: [],
    // Fill Drain Graph
    stateGetFillDrainChart: [],
    // Urine Gain Graph
    stateGetProfitChart: [],
    stateGetProfitChartDate: [],
    // BloodPresure Graph
    stateGetWeightChart: [],
    stateGetWeightChartDate: [],
    dashboardReady: false
  },
  mutations: {
    mutationModalManageUSer (state) {
      state.stateModalManageUser = !state.stateModalManageUser
    },
    // Login Mutation
    mutationLogin  (state, data) {
      state.stateLoginUser = data
    },
    // Register Mutation
    mutationRegister (state, data) {
      state.stateRegisterUser = data
    },
    // Update Admin Mutation
    mutationUpdateAdmin (state, data) {
      state.stateUpdateAdmin = data
    },
    // Get All User Mutation
    mutationGetAllUser (state, data) {
      state.stateGetAllUser = data
    },
    // Get All User By Hopital ID Mutation
    mutationGetAllUserByHopitalID (state, data) {
      state.stateGetAllUserByHospital = data
    },
    // Add Hospital Mutation
    mutationAddHospital (state, data) {
      state.stateAddHospital = data
    },
    // Update Hospital Mutation
    mutationUpdateHospital (state, data) {
      state.stateUpdateHospital = data
    },
    // Get All Hospital Mutation
    mutationGetAllHospital (state, data) {
      state.stateGetAllHospital = data
    },
    // Get One Hospital Mutation
    mutationGetOneHospital (state, data) {
      state.stateGetOneHospital = data
    },
    // Delete Hospital Mutation
    mutationDeleteHospital (state, data) {
      state.stateDeleteHospital = data
    },
    // Add Diary Mutation
    mutationAddDiary (state, data) {
      state.stateAddDiary = data
    },
    // Update Diary Mutation
    mutationUpdateDiary (state, data) {
      state.stateUpdateDiary = data
    },
    // Get All Diary Mutation
    mutationGetAllDiary (state, data) {
      state.stateGetAllDiary = data
    },
    // Get One Diary Mutation
    mutationGetOneDiary (state, data) {
      state.stateGetOneDiary = data
    },
    // Delete Diary Mutation
    mutationDeleteDiary (state, data) {
      state.stateDeleteDiary = data
    },
    // Graph
    mutationGetDewellChart (state, data) {
      state.stateGetDewellChart = data
    },
    mutationGetFillDrainChart (state, data) {
      state.stateGetFillDrainChart = data
    },
    mutationGetProfitChart (state, data) {
      state.stateGetProfitChart = data
    },
    mutationGetWeightChart (state, data) {
      state.stateGetWeightChart = data
    },
    mutationGetAllData (state, data) {
      state.stateGetDewellChart = data.DewellChart
      state.stateGetProfitChart = data.ProfitChart
      state.stateGetWeightChart = data.WeightChart
      state.stateGetFillDrainChart = data.FillDrainChart
    },
    DashboardReady (state, status) {
      state.dashboardReady = status
    },
    mutationGetDewellChartDate (state, data) {
      state.stateGetWeightChart = data
    },
    mutationGetProfitChartDate (state, data) {
      state.stateGetProfitChartDate = data
    },
    mutationGetWeightChartData (state, data) {
      state.stateGetWeightChartDate = data
    }
  },
  actions: {
    // Login Actions
    async actionsLogin (context, access) {
      const axiosLogin = await AxiosAPI.Login(access)
      await context.commit('mutationLogin', axiosLogin)
    },
    // Register Actions
    async actionsRegister (context, access) {
      const axiosRegister = await AxiosAPI.Register(access)
      await context.commit('mutationRegister', axiosRegister)
    },
    // Update Admin Actions
    async actionsUpdateAdmin (context, access) {
      const axiosUpdateAdmin = await AxiosAPI.UpdateAdmin(access)
      await context.commit('mutationUpdateAdmin', axiosUpdateAdmin)
    },
    // Get All User Action
    async actionsGetAllUser (context) {
      const axiosGetAllUser = await AxiosAPI.GetAllUser()
      await context.commit('mutationGetAllUser', axiosGetAllUser)
    },
    // Get All User By Hospital ID Actions
    async actionsGetAllUserByHospitalID (context, access) {
      const responseData = await AxiosAPI.GetAllUserByHospitalID(access)
      await context.commit('mutationGetAllUserByHopitalID', responseData)
    },
    // Add Hospital Actions
    async actionsAddHospital (context, access) {
      const axiosAllHospital = await AxiosAPI.AddHospital(access)
      await context.commit('mutationAddHospital', axiosAllHospital)
    },
    // Update Hospital Actions
    async actionsUpdateHospital (context, access) {
      const axiosUpdateHospital = await AxiosAPI.UpdateHospital(access)
      await context.commit('mutationUpdateHospital', axiosUpdateHospital)
    },
    // Get All Hospital Actions
    async actionsGelAllHospital (context) {
      const axiosGetAllHospital = await AxiosAPI.GetAllHospital()
      await context.commit('mutationGetAllHospital', axiosGetAllHospital)
    },
    // Get One Hospital Actions
    async actionsGetOneHospital (context, access) {
      const axiosGetOneHospital = await AxiosAPI.GetOneHospital(access)
      await context.commit('mutationGetOneHospital', axiosGetOneHospital)
    },
    // Delete Hospital Actions
    async actionDeleteHospital (context, access) {
      const axiosDeleteHospital = await AxiosAPI.DeleteHospital(access)
      await context.commit('mutationDeleteHospital', axiosDeleteHospital)
    },
    // Add Diary Actions
    async actionsAddDiary (context, access) {
      const axiosAllDiary = await AxiosAPI.AddDiary(access)
      await context.commit('mutationAddDiary', axiosAllDiary)
    },
    // Update Diary Actions
    async actionsUpdateDiary (context, access) {
      const axiosUpdateDiary = await AxiosAPI.UpdateDiary(access)
      await context.commit('mutationUpdateDiary', axiosUpdateDiary)
    },
    // Get All Diary Actions
    async actionsGelAllDiary (context) {
      const axiosGetAllDiary = await AxiosAPI.GetAllDiary()
      await context.commit('mutationGetAllDiary', axiosGetAllDiary)
    },
    // Get One Diary Actions
    async actionsGetOneDiary (context, access) {
      const axiosGetOneDiary = await AxiosAPI.GetOneDiary(access)
      await context.commit('mutationGetOneDiary', axiosGetOneDiary)
    },
    // Delete Diary Actions
    async actionDeleteDiary (context, access) {
      const axiosDeleteDiary = await AxiosAPI.DeleteDiary(access)
      await context.commit('mutationDeleteDiary', axiosDeleteDiary)
    },
    // Graph Actions
    async actionGetDewellChart (context) {
      const axiosGetData = await AxiosAPI.GetDewellChart()
      await context.commit('mutationGetDewellChart', axiosGetData)
    },
    async actionGetProfitChart (context) {
      const axiosGetData = await AxiosAPI.GetProfitChart()
      await context.commit('mutationGetProfitChart', axiosGetData)
    },
    async actionGetWeightChart (context) {
      const axiosGetData = await AxiosAPI.GetWeightChart()
      await context.commit('mutationGetWeightChart', axiosGetData)
    },
    async actionGetAllChart (context, access) {
      var axiosGetDewellChart = await AxiosAPI.GetDewellChart(access)
      var axiosGetFillDrainChart = await AxiosAPI.GetfillDrainChart(access)
      var axiosGetProfitChart = await AxiosAPI.GetProfitChart(access)
      var axiosGetWeightChart = await AxiosAPI.GetWeightChart(access)
      var data = {
        DewellChart: axiosGetDewellChart,
        ProfitChart: axiosGetProfitChart,
        WeightChart: axiosGetWeightChart,
        FillDrainChart: axiosGetFillDrainChart
      }
      await context.commit('mutationGetAllData', data)
      await context.commit('DashboardReady', true)
    },
    async actionGetDewellChartDate (context, access) {
      var resposne = await AxiosAPI.GetDewellChartDate(access)
      await context.commit('mutationGetDewellChartDate', resposne)
    },
    async actionGetProfitChartDate (context, access) {
      var resposne = await AxiosAPI.GetProfitCharDate(access)
      await context.commit('mutationGetProfitChartDate', resposne)
    },
    async actionGetWeightChartDate (context, access) {
      var resposne = await AxiosAPI.GetWeightChartDate(access)
      await context.commit('mutationGetWeightChartData', resposne)
    }
  },
  modules: {}
});
