// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = require("!!../../node_modules/.pnpm/css-loader@6.8.1/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/vue-loader@15.10.2_css-loader@6.8.1/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.pnpm/postcss-loader@7.3.3/node_modules/postcss-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.3.2_sass@1.66.1/node_modules/sass-loader/dist/cjs.js!../../node_modules/.pnpm/style-resources-loader@1.5.0/node_modules/style-resources-loader/lib/index.js??clonedRuleSet-4.use[4]!../../node_modules/.pnpm/vue-loader@15.10.2_css-loader@6.8.1/node_modules/vue-loader/lib/index.js??vue-loader-options!./HelloWorld1.vue?vue&type=style&index=0&id=8d934868&prod&scoped=true&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = require("!../../node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("a67420fe", content, true, {});