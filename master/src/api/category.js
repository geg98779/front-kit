import request from '@/utils/request.js'

export const getCategory = () => {
    return request({
        url: '/category'
    })
}