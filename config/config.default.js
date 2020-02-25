/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1581684233832_516';

  // 跨域设置
  config.cors = {
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH"
  };

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  //mysql 配置
  exports.mysql = {
      // 单数据库信息配置
      client: {
        // host
        host: '39.105.87.199',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: '123456',
        // 数据库名
        database: 'node_test',
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
  };
  config.sequelize = {
    dialect: "mysql", // support: mysql, mariadb, postgres, mssql
    database: "node_test2",
    host: "39.105.87.199",
    port: "3306",
    username: "root",
    password: "123456",
    timezone: "+08:00",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    define: {
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  };
  config.sequelize = { ...config.sequelize };
  return {
    ...config,
    ...userConfig,
  };
};
