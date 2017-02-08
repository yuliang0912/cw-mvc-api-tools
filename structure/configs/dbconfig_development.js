"use strict"

module.exports = {
    userInfo: {
        username: "root",
        password: "root",
        databas: "db_userinfo",
        onfig: {
            host: "192.168.1.64",
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
