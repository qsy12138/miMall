module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{ //当我访问/api的时候，把它代理成为别的地址
                target:'http://mall-pre.springboot.cn', //代理后的目标地址，也就是转变后的地址
                changeOrigin:true, //是否将主机头的源点更改为url的地址
                pathRewrite:{ //路径的转发规则
                    '/api':'' //我们将/api置为空，也就是实际转发的时候，只把/api后面的地址去转发
                }
            }
        }
    }
}