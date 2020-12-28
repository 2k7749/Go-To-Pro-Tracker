module.exports = {
    port: 3000,
    dbConnectionString: 'your postgresql connection',
    saltRounds: 10,
    jwtSecret: 'yo-its-a-secret',
    authTokenTimeout: "1d",
    authCookieTimeout: 86400
}