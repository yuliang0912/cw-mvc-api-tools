/**
 * Created by yuliang on 2016/12/30.
 */

const co = require('co')
const router = require('koa-router')()

module.exports = function (app) {

    router.get('/', co.wrap(function *(ctx, next) {
        ctx.body = "welcome to cw-api-gateway"
    }))

    //其他模块由代理配置决定
    router.all('/*', require('./auto-router'))

    app.use(router.routes()).use(router.allowedMethods())
}