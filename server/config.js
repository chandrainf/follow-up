const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "SDJF0W850FJ5LDFJ4095809DFJG045F",
  mongoUri: process.env.MONGODB_URI || "mongodb+srv://sysadmin:YBc6bStzgNYMRgss@cluster0.sgrvx.gcp.mongodb.net/mernsocial?retryWrites=true&w=majority"
    //process.env.MONGO_HOST ||
    //'mongodb://' + (process.env.IP || 'localhost') + ':' +
    //(process.env.MONGO_PORT || '27017') +
    //'/mernproject'
}

export default config
