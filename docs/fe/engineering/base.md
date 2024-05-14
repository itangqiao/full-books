# 基础框架

- ### 技术选型
	- 框架 
- ### 统一规范 `eslint + prettier + husky + commitlint` 
	- 代码
		- [[eslint+prettier]] 
	- git
		- [[husky]] 
	- 项目
		- 文件组织
		- 命名方式
	- UI
- ### 测试
	- 单元测试
	- TDD 测试驱动开发
		- TDD 就是根据需求提前把测试代码写好，然后根据测试代码实现功能。
- ### 部署
	- CICD
- ### 监控
	- 错误监控
	- 性能监控
	- 用户信息收集
	- 数据上报
- ### 性能优化
	- 手动检查
	- 工具检查
- ### 重构
	- 过三，提取重复代码，封装为函数。
	- 拆分太长、功能过多的函数

## 扩展
使用 `simple-git-hooks` 作为 `git hooks` 方案，`lint-staged` 和 `prettier` 格式化代码。