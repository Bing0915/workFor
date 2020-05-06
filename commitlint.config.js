/*
 * @Author: bing.ma
 * @Date: 2020-05-06 10:34:10
 * @LastEditors: bing.ma
 * @LastEditTime: 2020-05-06 10:34:36
 * @Description: 
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      "build", "docs", "feat", "merge", "fix", "pref", "refactor", "style", "test", "revert", "chore"
    ]],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never']
  }
}
