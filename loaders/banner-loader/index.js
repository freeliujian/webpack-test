const schema = require('./schema.json');

module.exports = function(content) {
  const {package} = this.getOptions(schema)
  
  return `console.info(${JSON.stringify(package)})` + content
}