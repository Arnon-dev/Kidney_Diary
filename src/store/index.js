import axios from "axios";
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
    }
  },
  modules: {}
});
