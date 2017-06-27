## react-comment-app
----

### 基础
----

- 预备了两个分支，一个是自己的，一个是胡子大哈兄的版本。发现了`state`的设计确实是一件需要斟酌的事情。

- 组件虽小，却也有空间留给自己思考。


### 反思
---

- 在`comment`组件中，我由于昨天`todo-app`的惯性思考，直接在根组件上设置了所有的状态，以为这样符合`当多组件共享同一状态时，该状态应提升至这些组件最近的根组件上。`这一原则。

- 实质上，是没有理解清楚这条原则。`共享同一状态`指的是该状态会影响到那些组件的形态，回头再看，在`edit comment`时是不会影响commentList组件的。

- 对于`commentList`组件而言，它自身没有状态的概念，只渲染`props`里的数据。

- 所以最终的状态设计为
``` javascript
// commnetInput 
 state = {
   username: '',
   content: ''
 }

 // commentApp 
 state = {
   commentList = []
 }
```