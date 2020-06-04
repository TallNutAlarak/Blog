import Vue from "vue"
import axios from "axios"

let server = axios.create({
    timeout:5000,
    baseURL:"/api"
})
Vue.prototype.$http = server
