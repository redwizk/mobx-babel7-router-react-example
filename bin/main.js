var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");

if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');

    const config = require('../webpack/webpack.config.dev');
    
    config.entry.push("webpack-dev-server/client?http://" + config.devServer.host + ':' + config.devServer.port);

    let compiler = webpack(config);

    let devServer = new WebpackDevServer(compiler, config.devServer);
    
    console.log('Server : '+ config.devServer.host + ':' + config.devServer.port);
    devServer.listen(config.devServer.port, (err) => {
        console.log('[DEV SVR ERR] : '+ err);
    });
}
else if(process.env.NODE_ENV == 'production') {
    console.log('Webpack is running on production mode');

    const config = require('../webpack/webpack.config.prod');
    let compiler = webpack(config);

    compiler.run((err, stats) => {
        let messages;
        if (err) {
            if (!err.message) {
                console.log('[ ERR ] : ' + 'Unknown Error');
                return;
            }
            console.log('[ ERR ] : ' + err.message);
        } else {
            const info = stats.toJson();

            if (stats.hasErrors()) {
              console.error("\n[ ERR ]\n" + info.errors+"\n");
            }
          
            if (stats.hasWarnings()) {
              console.warn("\n[ WARN ]\n" + info.warnings+"\n");
            }
        }
    });
}
