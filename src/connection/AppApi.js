import {BASE_URL} from "./BaseUrl.js";

export const APP_API = {
    login: '/auth/login',
    users: '/auth/addUser',
    getUser: '/auth',
    addNews: '/auth/addNews',
    news: '/news',
    perfect: '/perfect-user',
    projects: '/project',
    partners: '/partner',
    admin: '/auth/dashboard/admin',
    pManager: '/auth/dashboard/p-manager',
    tLeader: '/auth/dashboard/t-leader',
    worker: '/auth/dashboard/worker',
    uploadPhoto: '/attachment/upload',
    addNewPhoto: '/project/upload-new-photo',
    downloadPhoto: BASE_URL + '/attachment/download?id='

}
