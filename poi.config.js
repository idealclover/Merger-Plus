require("dotenv").config()

let pageData = require("./config.json")

const env = process.env
const publicPath = "/"
// const publicPath = env.NODE_ENV === "production" ? "env.PUBLIC_PATH" : "/"

console.log(`PUBLIC_PATH: ${publicPath}`)

module.exports = {
  output: {
    publicUrl: publicPath
  },
  constants: {
    DATA: JSON.stringify(pageData)
  }
}