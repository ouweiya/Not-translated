## 介绍

开发中因受限英语水平, 难免借助 Googl 翻译文档, 但是有时候它会搞乱排版, 就像下面这样.

![bad.png](img/bad.png)

这个扩展就是修复它.

![good.png](img/good.png)

## 使用

![a.gif](img/a.gif)

#### 刷新页面后

![b.gif](img/b.gif)

### 为什么有几种颜色?

他们代表三种需求.

- 左键蓝色: 不翻译此区域,并且运用自定义样式, 比如修改代码的字体, 大小等.
- 右键绿色: 不翻译此区域, 不运用自定义样式, 也就是说,不修改外观.
- 中键黄色: 强制翻译, 有时候 google 翻译会对某些区域不翻译, 但是我们需要对它翻译,就用中键.

除了三个按键, 还有支持滚轮, 调节 DOM 范围, 实现细腻化选择, 就像下面这样.

![c.gif](img/c.gif)

**需要注意的是, 并不是所有的的元素可以被选中, 只有具有类名, id, 表格, 标题 (h1-6), 代码标签, 比如: `code` , `pre`, `code` ... 等等能选中.**

主要是避免选择通用标签, 比如选择了一个 `p` 标签, 结果不言而明.


### 一点建议
选择的时候尽可能选择足够大的父级, 而不是每个子级.

**坏的做法**

![no.png](img/no.png)

**好的做法**

![yes.png](img/yes.png)


## 管理页面

在管理你可以查看, 你所选取的元素, 支持增删改, 以及每个域名自定义样式.

![mer.png](img/mer.png)

此扩展内置了[Fira Code](https://github.com/tonsky/FiraCode) 字体, 提供三种变体.

- FiraCode-Regular
- FiraCode-Medium
- FiraCode-Retina

![css.png](img/css.png)

## 安装

下载压缩文件包, 然后解压, 在 Chrome 中加载.

[Not translated.zip](https://github.com/ouweiya/Not-translated/releases/download/1.1/Not.translated.zip)

或者将源代码 [github.com/ouweiya/Not-translated](https://github.com/ouweiya/Not-translated) 中的`dist`文件, 加载到 Chrome 中也可以.

![g.png](img/g.png)

## 总结

控制 Chrome 翻译或不翻译,主要由两个类名决定, `notranslate` 和 `translate`.

也就是说在网页加载那一刻, 需要完成对选定 DOM 元素遍历并添加上类名.

在 CSS 方面使用的是动态选择器, 无需遍历, 使用 CSS 选择器自动运用样式, 总体来说,流畅无阻塞,并且无侵入.

即使这个扩展不用来修复翻译排版, 也可以用来美化代码排版, 用你喜爱的字体 ,比如 `Fira Code`.

## 瑕疵

当网络特别阻塞的时候, Google 翻译会抢先翻译, 这个时候刷新页面即可, 而不是扩展没有起作用.

还有一些网站是动态渲染, 类名是动态生成的, 这也就造成了明明第一次选中,但刷新后没有生效, 可以通过调节 DOM 范围,更大或更小,来避开这个类.

## 小提示

这个扩展追求简洁,设计成了无菜单项, 要 启动选择/关闭选择, 直接点击图标.
也有快捷键.

`Ctrl + q` 切换 开启 / 关闭, Mac `Command + q`

`Esc` 关闭 (当前文档失焦时, 会不起作用)

![control.png](img/control.png)
