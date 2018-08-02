import {wxRequest} from '../utils/wxRequest';

let env = "-test" //-dev 或者 -test
const apiMall = 'https://api.reawei.cn'

const getLucky = (params) =>
wxRequest(params, apiMall + "/api/v1/lucky");

module.exports = {
    getLucky
}
