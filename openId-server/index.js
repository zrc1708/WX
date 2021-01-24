const Koa = require('koa')
const Router = require('koa-router')
const Bodyparser = require('koa-bodyparser')
const cors = require('koa2-cors')
const jwt = require('jsonwebtoken')
const Fly = require('flyio/src/node')
var fly=new Fly

const app = new Koa();
app.use(Bodyparser())
app.use(cors())

const router = new Router()

router.get('/test',async ctx => {
    ctx.body = {
        message:"ok"
    }
})

// 获取用户唯一标识接口
router.post('/getOpenId',async ctx => {
    const data = ctx.request.body
    
    let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${data.appId}&secret=${data.appSecret}&js_code=${data.code}&grant_type=authorization_code`
    let res = await fly.get(url)

    let openId = JSON.parse(res.data).openid
    let pserson = {
        username:'test',
        openId
    }
    let token = jwt.sign(pserson, 'niconiconi')

    // 反编译token
    // let result = jwt.verify(token, 'niconiconi');
    // console.log(result);

    ctx.body = {
        message:"ok",
        token
    }
})

app.use(router.routes())
app.listen(8877, () => {
    console.log('服务器启动成功')
});