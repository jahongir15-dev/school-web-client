import {BASE_CONFIG} from "../BaseConfig";
import {APP_API} from "../AppApi";

export const GetPerfects = async () => {
    try {
        const res = await BASE_CONFIG.doGet(APP_API.perfect + "/list")
        return res.data
    } catch (err) {
        console.log(err)
    }
}

export const GetPartners = async () => {
    try {
        const res = await BASE_CONFIG.doGet(APP_API.partners + "/list")
        return res.data
    } catch (err) {
        console.log()
    }
}

export const GetUsers = async () => {
    try {
        const res = await BASE_CONFIG.doGet(APP_API.getUser + "/list")
        return res.data
    } catch (err) {
        console.log()
        return toast.danger("GetUsersda xatolik")
    }
}

export const GetOneNews = async (id) => {
    try {
        const res = await BASE_CONFIG.doGetOne(APP_API.news, id)
        return res.data
    } catch (err) {
        console.log()
    }
}

export const GetNews = async () => {
    try {
        const res = await BASE_CONFIG.doGet(APP_API.news + "/list")
        return res.data
    } catch (err) {
        console.log()
    }
}

export const GetProject = async () => {
    try {
        const res = await BASE_CONFIG.doGet(APP_API.projects + "/list")
        return res.data
    } catch (err) {
        console.log()
    }
}
