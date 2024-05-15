import{_ as l,c as e,o,a4 as i}from"./chunks/framework.axffzhAD.js";const b=JSON.parse('{"title":"组件封装原则","description":"","frontmatter":{},"headers":[],"relativePath":"fe/introduction/组件封装原则.md","filePath":"fe/introduction/组件封装原则.md"}'),a={name:"fe/introduction/组件封装原则.md"},t=i('<h1 id="组件封装原则" tabindex="-1">组件封装原则 <a class="header-anchor" href="#组件封装原则" aria-label="Permalink to &quot;组件封装原则&quot;">​</a></h1><h2 id="常见目录设计" tabindex="-1">常见目录设计 <a class="header-anchor" href="#常见目录设计" aria-label="Permalink to &quot;常见目录设计&quot;">​</a></h2><ul><li>components 内部目录结构 <ul><li><code>dialog</code> 对话框</li><li><code>loading</code> 加载</li><li><code>searchContent</code> 搜索表单</li><li><code>table</code> 表格</li></ul></li></ul><h2 id="设计前思考" tabindex="-1">设计前思考 <a class="header-anchor" href="#设计前思考" aria-label="Permalink to &quot;设计前思考&quot;">​</a></h2><ul><li>样式 <ul><li>组件内该写哪些样式、注意什么？ <ul><li>子组件可以先<strong>预制</strong>一些类，之后传<strong>类名</strong>即可。</li><li>子组件的<strong>样式权重</strong>设置低一点，方便引用的之后覆盖，避免使用 <code>important</code></li></ul></li></ul></li><li>template <ul><li>放 <code>slot</code> 里还是组件里？ <ul><li>[[固定内容]]可以写死，不确定的通过 <code>slot</code> 传递，也要考虑数据传递</li><li>可以预先设定内容，判断有没有传 <code>slot</code>，优先使用 <code>slot</code> 的值</li></ul></li></ul></li><li>行为 <ul><li>在父组件定义、还是子组件定义？ <ul><li>基本行为 → 子组件操作（关闭、重置按钮等）</li><li>业务行为 → 让父组件监听，再执行相应的操作</li></ul></li><li>还能根据 <code>状态前中后</code> 细分，使这个 <code>组件扩展性</code> 更强 <ul><li>例如：搜索前、中、后；关闭弹框前、后 [[组件行为扩展示例代码]]</li></ul></li></ul></li><li>props <ul><li>哪些值通过 <code>props</code> 传递，哪些由子组件自己声明？ <ul><li>子组件内部定义、行为越少，扩展性就越好，通过 <code>props</code> 传值扩展性会更强</li></ul></li></ul></li><li>扩展性 &amp;&amp; 便捷性 权衡 <ul><li>组件通过<code>父传值</code>，<code>扩展性</code>就会越强</li><li>子组件 <code>内部定义</code> 的东西越多，<code>便捷性</code> 就越强</li><li>所以引用的地方越多，组件内部行为就应该少一些，多让父组件去执行相应的操作</li></ul></li></ul><h2 id="封装业务组件的-2大原则" tabindex="-1">封装业务组件的 2大原则 <a class="header-anchor" href="#封装业务组件的-2大原则" aria-label="Permalink to &quot;封装业务组件的 2大原则&quot;">​</a></h2><p>不结合具体业务逻辑</p><ul><li>数据：一般组件只是最为一个容器，由父组件传入。</li><li>操作：子组件负责一些 UI 操作，然后触发父组件的监听，交由父组件进行功能操作。 尽量提供简便</li><li>让通用性高的子组件易于使用，如有少量差距，做针对性扩展。</li></ul><h2 id="组件数据-2种设计方式" tabindex="-1">组件数据 2种设计方式 <a class="header-anchor" href="#组件数据-2种设计方式" aria-label="Permalink to &quot;组件数据 2种设计方式&quot;">​</a></h2><ul><li>配置项 (props)</li><li>[[插槽]]</li></ul><h3 id="配置项" tabindex="-1">配置项 <a class="header-anchor" href="#配置项" aria-label="Permalink to &quot;配置项&quot;">​</a></h3><ul><li>场景：频繁使用的用配置项</li><li>优点：使用者更方便</li><li>缺点： <ul><li>不适用于复杂情况</li><li>健壮性差 <ul><li>避免：少传、多传、传错等情况</li><li>解决：必须要规范使用者传值，并给出引导、提示（这就是 <code>TS</code> 的必要性）</li></ul></li></ul></li></ul><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><ul><li>场景：自定义插槽用于扩展复杂的、不常用的组件</li><li>优点：完全开放，适用于任意情况。</li><li>缺点：基础的配置需要使用者写一遍</li></ul><h2 id="数据流-原则-建议" tabindex="-1">数据流 原则-建议 <a class="header-anchor" href="#数据流-原则-建议" aria-label="Permalink to &quot;数据流 原则-建议&quot;">​</a></h2><ol><li>优先使用 <code>computed</code>，警惕 <code>watch</code> / <code>watchEffect</code> 等 API 的使用。转换思维先从克制使用 watch 开始。</li><li>适当使用 <code>readonly</code>, 禁止状态被坏人修改</li><li>最小化状态。避免创建‘缓存’状态，让数据自然流动，不要阻断。</li><li>自顶而下，将细节/副作用分流到 hooks 或子组件中，起一个好一点的名字， 让流程看起来更清晰</li><li>将 watch 转换为 computed 的语义。外观上的差别是 watch 有 callback， 而 computed 是「管道」，会衍生新的数据。比如上面 <code>useRequest</code> 的例子</li><li>推荐使用 VueUse</li><li>封装 hooks， 让各种外部的状态或副作用优雅地集成进来</li><li>单向数据流，对这个有两层理解 <ul><li>表示是一种数据流动的方向，通常和 CQRS 模式配合，比如 Redux、Vuex，只能单向的修改和查询</li><li>表示一种数据管辖的范围。 通常应用只有数据的拥有者才有权限变更。进一步地讲，我们应该以组件为边界，来限定数据的管辖范围。需要变更时，通过‘事件’ 来通知拥有者。比如 严格遵循 v-model 协议。</li></ul></li><li>使用响应式开发思维，构造单向的数据流 <ul><li>尽量管道化的方式去设计你的程序</li><li>声明式，不要命令式</li><li>拆分组件或 hooks 来分治数据流</li><li>组件之间 props 传递也属于数据流。</li></ul></li><li>使用 ref/reactive → computed → watch → handler → render 这样的顺序组织代码</li></ol><h2 id="组件封装-常用属性" tabindex="-1">组件封装-常用属性 <a class="header-anchor" href="#组件封装-常用属性" aria-label="Permalink to &quot;组件封装-常用属性&quot;">​</a></h2><ol><li><code>$attrs</code> 简化多层组件之间 props <strong>传值</strong>；</li><li><code>$listeners</code> 简化多层组件之间<strong>事件传递</strong>；</li><li><code>$Slots</code> 更多<strong>拓展自定义组件传值</strong>，包括自定义 html 元素，及对象；</li><li><code>props validator</code> 增强组件传值稳健性，可自定义业务代码效验参数；</li><li><code>$refs</code> 对外提供 API 增强组件灵活度和可控性；</li></ol><h3 id="form-表单组件封装" tabindex="-1">form 表单组件封装 <a class="header-anchor" href="#form-表单组件封装" aria-label="Permalink to &quot;form 表单组件封装&quot;">​</a></h3><ul><li><strong>普通表单</strong><ul><li>通过组件组合生成的表单</li></ul></li><li><strong>动态表单</strong> [[动态表单]] <ul><li>通过配置代码生成的表单</li></ul></li></ul><p>生成动态表单的配置代码，一般来说会存储在后端，并通过 API 提供给前端使用。</p><h2 id="组件设计参考" tabindex="-1">组件设计参考 <a class="header-anchor" href="#组件设计参考" aria-label="Permalink to &quot;组件设计参考&quot;">​</a></h2><p><img src="https://gcore.jsdelivr.net/gh/itangqiao/pic@main/blog/image-20230415101309819.webp" alt=""></p><ul><li><strong><code>UI设计交互</code></strong> 就好比模块的 import、exports，要保持统一的出口。即统一风格配色，统一交互。</li><li><code>基本功能</code> 就好比模块的基本作用。必须保证基本功能的同时，兼容其他。</li><li><code>业务拓展</code> 就好比模块间的集成，这就要求组件可依耐性低、可拔插集成、高聚低耦合。</li><li><strong><code>性能</code></strong> 要考虑到大量数据或大量计算与 GUI 渲染线程互斥导致的性能问题。</li></ul><h2 id="疑问" tabindex="-1">疑问 <a class="header-anchor" href="#疑问" aria-label="Permalink to &quot;疑问&quot;">​</a></h2><h3 id="父组件中请求数据好-还是子组件中请求数据好" tabindex="-1">父组件中请求数据好？还是子组件中请求数据好？ <a class="header-anchor" href="#父组件中请求数据好-还是子组件中请求数据好" aria-label="Permalink to &quot;父组件中请求数据好？还是子组件中请求数据好？&quot;">​</a></h3><p>1、如果现在有一个父组件，3 个子组件。 每个组件展示的数据不同，有 2 种数据获取方式。 第一种：在父组件中获取所有的数据，然后使用 props 传递给每个子组件。 第二种：各个子组件中获取各自的数据。</p><blockquote><p>[!question] 你觉得哪种好？为什么？ 答：根据实际业务来 <code>如果数据其他组件用不到, 那么可以由子组件自己获取</code> 如果数据可能被 <code>同级组件 复用 共享</code> 那么由 <code>父组件统一获取然后分发下去</code> 如果数据可能被 <code>跨级组件 复用 共享</code> 那么你需要 <code>vuex</code> 或者 <code>eventbus</code> 统一分发至不同级别的组件 <code>子组件复用率高</code> 或 <code>耦合性小</code> 则独立获取数据, 子组件如果跟父组件关系紧密则父组件获取数据</p></blockquote><h2 id="心得" tabindex="-1">心得 <a class="header-anchor" href="#心得" aria-label="Permalink to &quot;心得&quot;">​</a></h2><p>要考虑<strong>心智成本</strong>和<strong>开发成本</strong><br> 不要<strong>大而全</strong>，让使用者自己组合；也不要过度封装增加使用成本和维护成本，找好平衡。<br> 准备两个方案，考虑<strong>便利性</strong>和<strong>扩展性</strong><br> 少用 <code>v-if</code>，尝试使用<strong>动态组件切换</strong><br> 做好传值校验(结合TS)</p><h2 id="扩展" tabindex="-1">扩展 <a class="header-anchor" href="#扩展" aria-label="Permalink to &quot;扩展&quot;">​</a></h2><p><a href="https://juejin.cn/post/6952777507162554382" target="_blank" rel="noreferrer">组件化开发之如何封装组件 - 掘金</a></p>',32),r=[t];function c(d,n,s,u,h,p){return o(),e("div",null,r)}const g=l(a,[["render",c]]);export{b as __pageData,g as default};
