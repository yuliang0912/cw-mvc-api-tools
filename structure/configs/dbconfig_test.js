"use strict"

module.exports = {
    userInfo: {
        username: "ciwong_sabin",
        password: "ciwong2017",
        database: "db_userinfo",
        config: {
            host: "192.168.2.117",
            port: 3306,
            dialect: "mysql",
            timezone: "+08:00",
            pool: {
                maxConnections: 2000,
                minConnections: 3,
                maxIdleTime: 10000
            }
        }
    }
}
