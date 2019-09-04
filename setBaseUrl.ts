let baseUrl: string = "";   //这里是一个默认的url，可以没有
var env = process.env.NODE_ENV === 'development' ? 'development' :
    process.env.VUE_APP_TITLE === 'alpha' ? 'alpha' : 'production';
switch (env) {
    case 'development':
        baseUrl = "https://testdev.scxinglin.com/chronic-local"  //这里是本地的请求url
        break
    case 'alpha':   // 注意这里的名字要和步骤二中设置的环境名字对应起来
        baseUrl = "https://testdev.scxinglin.com/chronic-local"  //这里是测试环境中的url
        break
    case 'production':
        baseUrl = "https://image.scfortis.com/plat"   //生产环境url
        break
}

export default baseUrl;