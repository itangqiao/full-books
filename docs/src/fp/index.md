
## 函数式编程
是什么？
解决了什么问题？

## 怎么理解函数是一等公民
1. 函数可以存储在变量中 - 如: let x = fn;
2. 函数可作为参数 - 如: forEach(fn)  
3. 函数可作为返回值  - 如: return fn;

## 函数式编程基础
纯函数
高阶函数

### 纯函数
1. 给定相同的输入，总是返回相同的输出。
2. 在函数的执行过程中没有副作用。

如: 不纯的函数:
`splice` 及其他修改原数组的方法 , `splice` 对原数组操作再返回,改变了原数组

### 高阶函数
输入: 将其他函数作为参数，作为函数的输入。
输出: 在函数中输出另一个函数。

使用高阶函数的意义:
- 将运算过程抽象, 屏蔽细节
- 使用的时候, 只需关注目标结果

## 函数式编程重要组成部分
柯里化
组合函数
函子

函数式编程没有完全落地，但是部分重要思想随处可见。

### 柯里化
```ts 
const logWithPrefix = (prefix) => (msg) => console.log(`[${prefix}] ${msg}`);

const info = logWithPrefix('INFO');
info('系统启动'); // [INFO] 系统启动
```


### 1. 表单校验器封装

```ts
// 先设置规则，再传值进行校验
const minLength = (len: number) => (value: string) => value.length >= len;

const validateName = minLength(3);

console.log(validateName("Jo")); // false
console.log(validateName("John")); // true
```

### 2. 带默认参数的请求封装
> 统一 API 前缀，不重复写 baseURL。

```ts
const createFetcher = (baseURL: string) => (endpoint: string) =>
  fetch(`${baseURL}${endpoint}`).then(res => res.json());

const api = createFetcher('https://api.example.com');

api('/users'); // 请求 https://api.example.com/users
api('/posts'); // 请求 https://api.example.com/posts
```


### 3. 日志工具函数（不同等级）

```ts
const log = (level: 'info' | 'warn' | 'error') => (message: string) =>
  console.log(`[${level.toUpperCase()}] ${message}`);

const info = log('info');
const error = log('error');

info('系统正常启动'); // [INFO] 系统正常启动
error('服务挂了');     // [ERROR] 服务挂了
```


### 4. 生成带前缀的 className（常见于组件库开发）
> 用于 BEM 命名规范或统一组件类名。

```ts
const withPrefix = (prefix: string) => (className: string) =>
  `${prefix}-${className}`;

const btnClass = withPrefix('btn');

btnClass('primary'); // "btn-primary"
btnClass('danger');  // "btn-danger"
```

### 5. 权限控制函数

```ts
const hasPermission = (user) => (permission: string) =>
  user.permissions.includes(permission);

const canAccess = hasPermission({
  permissions: ['admin:view', 'user:edit']
});

canAccess('admin:view'); // true
canAccess('admin:delete'); // false
```



### 6. 事件绑定/事件生成器

```ts
const createClickHandler = (id: number) => () => {
  console.log(`Clicked item ${id}`);
};

<button onClick={createClickHandler(5)}>点我</button>
```

  

### 7. 国际化翻译封装（i18n）

```ts
const createTranslator = (locale: Record<string, string>) => 
  (key: string) => locale[key] || key;

const t = createTranslator({
  hello: '你好',
  goodbye: '再见'
});

t('hello');    // "你好"
t('unknown');  // "unknown"
```

  
| 适用场景    | 是否推荐       |
| ----------- | -------------- |
| 工具函数复用      | 强烈推荐（更灵活、易测） |
| 表单验证器、权限控制等 | 推荐           |
| 简单业务逻辑      | ❌ 一般不柯里化，直写更清晰 |


## 柯里化 & 组合函数 & 函子
函数嵌套 → 使用函数组合解决问题
函子嵌套 → 使用 `Monad` 解决问题

柯里化 将多元函数转为一元函数, 为了更多函数组合使用
函数组合 将多个一元的纯函数 组合成新的函数, 合成更加强大的函数
函子 帮我们控制副作用, 进行异常处理, 异步操作等...
- **Maybe 函子**: 处理空指针异常 - value 是值
- **Either 函子**: 对异常处理 - value 是值
- **IO 函子**: 控制副作用 - value 是函数 
- **Task 函子**: 处理异步任务
- **Monad 函子**: 处理函子嵌套问题



