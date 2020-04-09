TypeScript React AntDesign Select Demo
=================================

AntD中的Select有一个严重的问题，就是option中选项如果过长，后面的内容会被隐藏，在有些情况下无法使用。

这里通过css对其进行override时发现一个问题：
option选项会被直接插入到body下，而不是我们自己定义的组件下。为了能对它进行css覆盖，需要给定一个dropdownClassName名字，再对其覆写。

```
npm install
npm run demo
```

It will open page on browser automatically.
