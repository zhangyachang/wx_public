const config = require('../config/config');
const utils = require('../utils/utils');
const wxBase = require('./wxBase');
const RuleEngine = require('node-rules');

const url = require('url');

const { __handleAPIRes, __mustValue, __handleRes } = require('../module/result');
// const db = require('../schema/index');


// let url1 = `http://hyhh.zplus.top/scp?openid=o77Y-wvJEbGTvDqWjhwbDnYmak0w&access_token=27_ChLFcd2vuyo10HZqAKc425lGzlvXikGU4dUQaRntZdfp5HZiHD4nqSCPShxoKjGyyEb44qs8HsSNFZF2fzxh1Q&state=https://hyhh.zplus.top/scp?id=Ku9HFTaGkTIhB227#/`;
// let parseUrl = url1.split('?')[1];
// parseUrl = '?' + parseUrl;



// console.log('打印要切割的字符串');
// console.log('打印切割完成之后', url.parse(parseUrl, true).query)

// let url2 = `http://hyhh.zplus.top/scp?id=/93/J5smmhkkJ7jSR270#/`;
// let parseUrl2 = url2.split('?')[1];
// parseUrl2 = '?' + parseUrl2;
// console.log('parseUrl2==>', url.parse(parseUrl2, true).query);


// let url3 = `http://hyhh.zplus.top/scp/#/?openid=o77Y-wvJEbGTvDqWjhwbDnYmak0w&access_token=27_aosXTDGzcaVR11D3oaNtPPG1vldqsYuHVRqoFQ_-QIs1BvE9kc5RzopxQiF_fi7qwIH76F4T_9T7xBWxjQyEqQ&state=https://hyhh.zplus.top/scp?p=512e668d5a783eec53e5b293ef7dc353d6056abddf51c76aa3f7ebf59645b4ca#/`;
// let url3 = `http://hyhh.zplus.top/scp/#/?openid=o77Y-wvJEbGTvDqWjhwbDnYmak0w&access_token=27_KHjp61Pe01LIfx6UH5KhBu-MuYQeb6C7JVrDVp2oalzaJdJpPrXIP68aUwximSXb-QYSk2-ztvXOxclq7v5ouA&state=%2F91%2Fc1ZZMRwl9iz9q304`;
// let { openid, access_token, state, id } = url.parse('?' + url3.split('?')[1]);
// console.log('这个东西是什么', url3.split('?')[2] && url3.split('?')[2].split('#')[0]);

// let obj = url.parse('?' + url3.split('?')[1], true).query;

// console.log('现在的', obj);

// console.log('openid ')


/**
 * 验证URL接口
 */
exports.checkToken = async ctx => {
  try {
    console.log('验证接口服务器接口');
    // console.log('发送过来了');
    // console.log('get请求');
    // console.log(ctx.query);
    // console.log('post请求');
    // console.log(ctx.body);
    const { signature, timestamp, nonce, echostr } = ctx.query;
    // console.log(signature, timestamp, nonce, echostr);
    let sha1Str = utils.sha1(timestamp, nonce, config.wxConfig.Token);
    // console.log('加密后的结果');
    // console.log(sha1Str);
    // console.log('微信发送的字符串');
    // console.log(signature);
    // console.log('判断是否相等');
    // console.log(sha1Str === signature);
    if (sha1Str === signature) {
      console.log('校验成功');
      ctx.body = echostr;
    } else {
      console.log('校验失败');
      ctx.body = false;
    }
  } catch (e) {
    console.log(e);
    ctx.body = __handleAPIRes('服务器繁忙，请稍后再试', 500);
  }
};



/*
我传过去的go_url 是这个 go_url=http://hyhh.zplus.top/scp#?qr=http://qr.ynzyiot.com/93/Ku9HFTaGkTIhB227


http://hyhh.zplus.top/scp#?openid=o77Y-wvJEbGTvDqWjhwbDnYmak0w&access_token=27_X7GfGlUj6i0GZwirKUbQmt5z4ZVlYTa34cgEBqerAsw1e5VcfK4m3q4NRVh5_-PWj4zh_hc6lRpHd6R3FRT8UA#/?qr=http%3A%2F%2F220.165.250.147%2Fscp

http://hyhh.zplus.top/scp?openid=o77Y-wvJEbGTvDqWjhwbDnYmak0w&access_token=27_XtTHL9DTQvFVF1Ft27Dn1NnRQO4NG1uXqk6Ue88z_a6rVseSXBStJBYfa1MVzuAbwxnv5HT2k5-ZPcH5KZRcJA#/?qr=http%3A%2F%2F220.165.250.147%2Fscp#/

*/




/**
 * POST解析用户发送来的消息
 */
exports.analysisToken = async ctx => {
  try {
    console.log('消息数据');
    console.log("get请求的参数");
    console.log(ctx.query);
    let { signature, timestamp, nonce, openid, encrypt_type, msg_signature } = ctx.query;
    console.log('拿到的消息签名');
    console.log(signature, timestamp, nonce, openid, encrypt_type, msg_signature);

    console.log('post请求体');
    console.log(ctx.req.body);

    const xmlCon = ctx.req.body.xml;
    let { ToUserName, FromUserName, CreateTime, MsgType, Content, MsgId, Encrypt, MediaId } = xmlCon;
    // // 拿到加密字符串
    // let encryptStr = ctx.req.body.xml.Encrypt[0];


    // // 开发者计算签名
    // let devMsgSignature = utils.sha1(config.wxConfig.Token, timestamp, nonce, encryptStr);
    // if (devMsgSignature !== msg_signature) {
    //   // 如果不等于 则判断为不是微信发送过来的消息，
    //   console.log('不是微信发送的');
    //   return ctx.body = __handleAPIRes('error', 500);
    // }
    // console.log('是微信发送的');

    // 在此处解密秘密字符串


    // 根据发送的不同的消息 做不同的处理
    if (MsgType[0] === 'text') {
      console.log('文本消息');
      return ctx.body = wxBase.messageFormat({
        ToUserName: FromUserName[0],
        FromUserName: ToUserName[0],
        MsgType: 'text',
        Content: Content[0]
      });
    } else if (MsgType[0] === 'image') {
      console.log('图片消息');
      return ctx.body = wxBase.messageFormat({
        ToUserName: FromUserName[0],
        FromUserName: ToUserName[0],
        MsgType: 'image',
        MediaId: MediaId[0]
      });
    } else if (MsgType[0] === 'voice') {
      console.log('语音消息');
      return ctx.body = wxBase.messageFormat({
        ToUserName: FromUserName[0],
        FromUserName: ToUserName[0],
        MsgType: 'voice',
        MediaId: MediaId[0]
      });
    } else if (MsgType[0] === 'video') {
      // 回复视频消息
    } else if (MsgType[0] === 'music') {
      // 回复音乐消息
    } else if (MsgType[0] === 'news') {
      // 回复图文消息 想要增加更多拓展去消息中添加
      return ctx.body = wxBase.messageFormat({
        ToUserName: FromUserName[0],
        FromUserName: ToUserName[0],
        MsgType: 'news',
      });
    }

    ctx.body = "success";
  } catch (e) {
    console.log(e);
    ctx.body = __handleAPIRes('服务器繁忙，请稍后再试', 500);
  }
};

/**
 * 获取当前的access_token
 */
exports.getAccess_token = async ctx => {
  try {
    console.log('获取当前的access_token');
    console.log(ctx);
    console.log(ctx.query);
    console.log(ctx.request.body);

    ctx.body = __handleAPIRes({
      access_token: config.wxConfig.access_token
    });
  } catch (e) {
    console.log(e);
    ctx.body = __handleAPIRes('服务器繁忙，请稍后再试', 500);
  }
};


// 展会的一点东西
/**
 * 微信的auth2.0验证
 */
exports.auth = async ctx => {
  try {

    console.log('auth回调函数域名');
    // 1. 用户授权后获取code
    console.log('获取到的url请求', ctx.query);
    const { code, state, shareUrl } = ctx.query;
    console.log(code, state);

    // 2. 通过code换取 access_token
    let getAuthResult = await wxBase.getAuthorizationAccess_token(code);
    console.log('获取到的结果', getAuthResult);
    // console.log('这个重定向连接是什么', '/exhibition#?openid=' + getAuthResult.openid + '&shareUrl=' + encodeURIComponent(shareUrl));
    if (shareUrl) {
      ctx.redirect('/exhibition#?openid=' + getAuthResult.openid + '&shareUrl=' + encodeURIComponent(shareUrl));
    } else {
      ctx.redirect('/exhibition#?openid=' + getAuthResult.openid);
    }

    return;
    if (getAuthResult.errcode) {
      // 
      return ctx.body = __handleAPIRes('获取token失败');
    }

    const { access_token, refresh_token, openid, scope } = getAuthResult;
    // console.log(access_token, refresh_token, openid, scope);


    // 3. 刷新access_token 如果需要


    // 4. 拉取用户信息(需scope为 snsapi_userinfo)
    let userInfoResult = await wxBase.gerUserInfoByOpenid({ access_token, openid });
    console.log('拉取到的用户信息为');
    console.log(userInfoResult);

    let newInfo = {
      openid: userInfoResult.openid,
      nickname: userInfoResult.nickname,
      sex: userInfoResult.sex,
      language: userInfoResult.language,
      city: userInfoResult.city,
      province: userInfoResult.province,
      country: userInfoResult.country,
      headimgurl: userInfoResult.headimgurl,
      privilege: JSON.stringify(userInfoResult.privilege)
    }

    let handleSaveResult = await new Promise((resolve, reject) => {
      db.userModel.findOneAndUpdate({
        openid: userInfoResult.openid
      }, newInfo, { upsert: true, new: true, setDefaultsOnInsert: true }, function (err, result) {
        if (err) {
          resolve(__handleRes(err, 400));
        }
        resolve(__handleRes(result));
      })
    });

    if (handleSaveResult.status === 400) {
      return ctx.body = __handleAPIRes('服务器繁忙，请稍后再试');
    }
    // 执行成功了
    console.log('查找或新增结果');
    console.log(handleSaveResult);


    // // 判断数据库中是否存在此数据
    // let searchUserResult = await new Promise((resolve, reject) => {
    //   userModel.find({ openid: userInfoResult.openid }, (err, result) => {
    //     if (err) {
    //       resolve(__handleRes(err, 400));
    //     }
    //     resolve(__handleRes(result));
    //   });
    // });

    // console.log('查询结果');
    // if (searchUserResult.status === 400) {
    //   return ctx.body = __handleAPIRes('查询过程出现错误', 400);
    // }
    // console.log('查询成功');
    // console.log(searchUserResult);

    // if (searchUserResult.data.length === 0) {
    //   // 不存在
    //   // 加入进去
    //   let newUser = new userModel({
    //     openid: userInfoResult.openid,
    //     nickname: userInfoResult.nickname,
    //     sex: userInfoResult.sex,
    //     language: userInfoResult.language,
    //     city: userInfoResult.city,
    //     province: userInfoResult.province,
    //     country: userInfoResult.country,
    //     headimgurl: userInfoResult.headimgurl,
    //     privilege: JSON.stringify(userInfoResult.privilege)
    //   });
    //   let saveResult = await new Promise((resolve, reject) => {
    //     newUser.save((err, result) => {
    //       if (err) {
    //         resolve({ status: 400, con: err });
    //       }
    //       resolve({ status: 200, con: result });
    //     })
    //   });

    //   if (saveResult.status === 400) {
    //     console.log('数据保存失败');
    //     return console.log(saveResult.con);
    //   }

    //   console.log('保存成功');
    //   console.log(saveResult.con)

    // } else {
    //   // 存在了 更新信息
    //   console.log('已经存在了');
    //   userModel.update({

    //   })
    // }

    ctx.body = __handleAPIRes({
      msg: '获取用户信息成功',
      userInfo: userInfoResult
    });

  } catch (e) {
    console.log(e);
    ctx.body = __handleAPIRes('服务器繁忙，请稍后再试', 500);
  }
};


/**
 * 云烟微信的auth2.0验证
 */
exports.authYN = async ctx => {
  try {

    console.log('auth回调函数域名');
    // 1. 用户授权后获取code
    console.log('获取到的url请求', ctx.query);
    const { code, state, qr } = ctx.query;
    console.log(code, state);

    // 2. 通过code换取 access_token
    let getAuthResult = await wxBase.getAuthorizationAccess_token(code);
    console.log('获取到的结果', getAuthResult);
    // console.log('这个重定向连接是什么', '/exhibition#?openid=' + getAuthResult.openid + '&shareUrl=' + encodeURIComponent(shareUrl));

    // ctx.redirect('/smg#?openid=' + getAuthResult.openid + '&access_token=' + getAuthResult.access_token +'&qr=' + qr);
    if (shareUrl) {
      ctx.redirect('/exhibition#?openid=' + getAuthResult.openid + '&shareUrl=' + encodeURIComponent(shareUrl));
    } else {
      ctx.redirect('/exhibition#?openid=' + getAuthResult.openid);
    }

    return;
    if (getAuthResult.errcode) {
      // 
      return ctx.body = __handleAPIRes('获取token失败');
    }

    const { access_token, refresh_token, openid, scope } = getAuthResult;
    // console.log(access_token, refresh_token, openid, scope);


    // 3. 刷新access_token 如果需要


    // 4. 拉取用户信息(需scope为 snsapi_userinfo)
    let userInfoResult = await wxBase.gerUserInfoByOpenid({ access_token, openid });
    console.log('拉取到的用户信息为');
    console.log(userInfoResult);

    return;

    let newInfo = {
      openid: userInfoResult.openid,
      nickname: userInfoResult.nickname,
      sex: userInfoResult.sex,
      language: userInfoResult.language,
      city: userInfoResult.city,
      province: userInfoResult.province,
      country: userInfoResult.country,
      headimgurl: userInfoResult.headimgurl,
      privilege: JSON.stringify(userInfoResult.privilege)
    }

    let handleSaveResult = await new Promise((resolve, reject) => {
      db.userModel.findOneAndUpdate({
        openid: userInfoResult.openid
      }, newInfo, { upsert: true, new: true, setDefaultsOnInsert: true }, function (err, result) {
        if (err) {
          resolve(__handleRes(err, 400));
        }
        resolve(__handleRes(result));
      })
    });

    if (handleSaveResult.status === 400) {
      return ctx.body = __handleAPIRes('服务器繁忙，请稍后再试');
    }
    // 执行成功了
    console.log('查找或新增结果');
    console.log(handleSaveResult);


    // // 判断数据库中是否存在此数据
    // let searchUserResult = await new Promise((resolve, reject) => {
    //   userModel.find({ openid: userInfoResult.openid }, (err, result) => {
    //     if (err) {
    //       resolve(__handleRes(err, 400));
    //     }
    //     resolve(__handleRes(result));
    //   });
    // });

    // console.log('查询结果');
    // if (searchUserResult.status === 400) {
    //   return ctx.body = __handleAPIRes('查询过程出现错误', 400);
    // }
    // console.log('查询成功');
    // console.log(searchUserResult);

    // if (searchUserResult.data.length === 0) {
    //   // 不存在
    //   // 加入进去
    //   let newUser = new userModel({
    //     openid: userInfoResult.openid,
    //     nickname: userInfoResult.nickname,
    //     sex: userInfoResult.sex,
    //     language: userInfoResult.language,
    //     city: userInfoResult.city,
    //     province: userInfoResult.province,
    //     country: userInfoResult.country,
    //     headimgurl: userInfoResult.headimgurl,
    //     privilege: JSON.stringify(userInfoResult.privilege)
    //   });
    //   let saveResult = await new Promise((resolve, reject) => {
    //     newUser.save((err, result) => {
    //       if (err) {
    //         resolve({ status: 400, con: err });
    //       }
    //       resolve({ status: 200, con: result });
    //     })
    //   });

    //   if (saveResult.status === 400) {
    //     console.log('数据保存失败');
    //     return console.log(saveResult.con);
    //   }

    //   console.log('保存成功');
    //   console.log(saveResult.con)

    // } else {
    //   // 存在了 更新信息
    //   console.log('已经存在了');
    //   userModel.update({

    //   })
    // }

    ctx.body = __handleAPIRes({
      msg: '获取用户信息成功',
      userInfo: userInfoResult
    });

  } catch (e) {
    console.log(e);
    ctx.body = __handleAPIRes('服务器繁忙，请稍后再试', 500);
  }
};

/**
 * 根据openid换取用户信息
 */
exports.openid2user = async ctx => {
  try {
    let { openid, access_token } = ctx.query;
    console.log('openid换取用户信息', openid);
    // let { access_token } = config.wxConfig;
    // console.log('传递的什么参数', { access_token, openid });
    let userInfoResult = await wxBase.gerUserInfoByOpenid({ access_token, openid });
    console.log('拉取到的用户信息为');
    console.log(userInfoResult);

    ctx.body = { data: userInfoResult, statusCode: 75200 };

  } catch (e) {
    console.log('报错了', e);
    ctx.body = __handleAPIRes('服务器繁忙，请稍后再试', 500);
  }
};

/**
 * 通过openid2UnionUser
 */
exports.openid2UnionUser = async (ctx) => {
  try {
    console.log('请求到了我');
    let { openid } = ctx.query;

    let userInfo = await wxBase.getUserInfo(openid);
    console.log('获取的用户信息', userInfo);
    ctx.body = {
      code: 0,
      data: userInfo,
      msg: 'ok'
    };

  } catch (e) {
    console.log('报错了', e);
    ctx.body = {
      code: -1,
      msg: '获取失败',
      data: ""
    };
  }
};

/**
 * 请求signature签名
 * @params {String} url 当前页面的网址 不包含#及其后面部分
 */
exports.getSignature = async ctx => {
  try {
    const { url } = ctx.request.body;
    console.log('获取jsapi签名接口');
    console.log(url);

    let __isUndefined = __mustValue({ url });
    if (__isUndefined) {
      return ctx.body = __handleAPIRes(__isUndefined);
    }
    let noncestr = utils.randomString(16);
    let timestamp = parseInt(Date.now() / 1000);

    let string = `jsapi_ticket=${config.wxConfig.jsapi_ticket}&noncestr=${noncestr}&timestamp=${timestamp}&url=${url}`;
    let signature = utils.sha1String(string);
    // console.log('加密后的signature为');
    // console.log(signature);
    ctx.body = __handleAPIRes({
      noncestr,
      timestamp,
      signature
    });
  } catch (e) {
    console.log(e);
    ctx.body = __handleAPIRes('服务器繁忙，请稍后再试', 500);
  }
};

/**
 * 获取微信服务列表
 */
exports.getServerIpList = async ctx => {
  try {
    console.log('获取微信服务器列表');
    let ipResult = await wxBase.getWxIpList();

    console.log('获取到的地址列表为');
    console.log(ipResult);
    ctx.body = __handleAPIRes(ipResult);
  } catch (e) {
    console.log(e);
    ctx.body = __handleAPIRes('服务器繁忙，请稍后再试', 500);
  }
};

/**
 * 自定义菜单查询
 */
exports.getMenuList = async ctx => {
  try {
    console.log('自定义菜单查询');
    let result = await wxBase.getMenu();
    console.log(result);
    ctx.body = __handleAPIRes(result);
  } catch (e) {
    console.log(e);
    ctx.body = __handleAPIRes('服务器繁忙，请稍后再试', 500);
  }
};

/**
 * 获取客服模板列表
 */
exports.getTemplate = async ctx => {
  try {
    console.log('自定义菜单查询');
    let result = await wxBase.getTemplate();
    console.log(result);
    ctx.body = __handleAPIRes(result);
  } catch (e) {
    console.log(e);
    ctx.body = __handleAPIRes('服务器繁忙，请稍后再试', 500);
  }
};

/**
 * 可以加入微信支付吗
 * 需要营业执照什么的，如果没有的话可以尝试调取接口吗。
 */



// 27_Gsj9KRPaxNwocy22aJqKxGY1WwQcPrboWdCrvrEUAO4CJM5GLyUpwNndmvNmmCdLk5YtUwwRn6uAE6FDNU0t-A
// 27_2Nna11qQZN_8tGzyK-9zxbefFZJsbGiu1K0ddw0h-8iihQMDxQ6nB2eLHGVzbvXV1pD2JZEj6YfmX_e-o-Rwpw

http://hyhh.zplus.top/scp?openid=o77Y-wvJEbGTvDqWjhwbDnYmak0w&access_token=&state=http://220.165.250.147/scp#/





/**
 * 测试上传数组
 */
exports.testArrary = async ctx => {
  try {
    console.log('接收到请求数据');
    console.log(ctx.request.body);

    ctx.body = ctx.request.body;
  } catch (e) {
    console.log(e);
    ctx.body = __handleAPIRes('服务器繁忙，请稍后再试', 500);
  }
};



/* Creating Rule Engine instance */
let R = new RuleEngine();

/* Add a rule */
var rule = {
  "condition": function (R) {
    console.log('this是什么', this);
    R.when(this.transactionTotal < 500);
  },
  "consequence": function (R) {
    this.result = false;
    this.reason = "The transaction was blocked as it was less than 500";
    R.stop();
  }
};

/* Register Rule */
R.register(rule);

/* Add a Fact with less than 500 as transaction, and this should be blocked */
var fact = {
  "name": "user4",
  "application": "MOB2",
  "transactionTotal": 600,
  "cardType": "Credit Card"
};

/**
 * 测试规则引擎
 */
exports.nodeRules = async ctx => {
  try {
    console.log('接收到请求数据');

    /* Check if the engine blocks it! */
    R.execute(fact, function (data) {
      console.log('返回结果', data);
      if (data.result) {
        console.log("Valid transaction");
      } else {
        console.log("Blocked Reason:" + data.reason);
      }
    });
  } catch (e) {
    console.log(e);
    ctx.body = __handleAPIRes('服务器繁忙，请稍后再试', 500);
  }
}
