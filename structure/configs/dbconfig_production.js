"use strict"

module.exports = {
    userInfo: {
        username: "ciwong_sabin",
        password: "dianzibao2015",
        database: "db_userinfo",
        config: {
            host: "rdsji4782vw39828axxz.mysql.rds.aliyuncs.com",
            port: 3306,
            dialect: "mysql",
            timezone: "+08:00",
            pool: {
                maxConnections: 600,
                minConnections: 3,
                maxIdleTime: 10000
            }
        }
    }
}
