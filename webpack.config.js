//向外部暴露一个打包文件
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname,'./src/index.html'),
    filename:'index.html',
    chunks:['main'] 
})

module.exports={
    mode:'development', //开发环境
    plugins:[
        htmlPlugin
    ],
    // 所有第三方模块规则
    module: {
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/
              },
          ]
    }
}