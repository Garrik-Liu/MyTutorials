## 什么是前端开发？
简单来说，前端开发就是以HTML（结构）, CSS（表现）, JavaScript（行为）为基础，将PC端，移动端产品的UI设计最终在用户设备上进行实现。

用户通过前端工程师所做出来的网页，手机APP来直接与产品进行交互。基本来说所有在互联网上与视觉和交互相关的环节都是前端所专注的领域。现在你能看到这篇文章，就是得益于前端工程师的辛勤劳动。和他们的名字一样，前端开发者站在互联网的最前线。

简单一句话，前端开发就是互联网的门面。

## 前端到底难不难？
先简后难。这是很多前端从业者的共鸣。如果只是简简单单的用HTML, CSS, JavaScript做出一个可以进行简单交互的网页并不难，如果学的快的话，一天工夫就可以从零开始学这做出一个像样的网页。

但是前端服务的对象是用户。该如何去加交互才能让网页更好用？用户数暴涨，服务器，数据库该怎么部署? 搜关键字总是搜不到网页怎么办？换了小屏幕网页排版错乱怎么办？黑客攻击网页该如何防御？等等这些延伸问题，都让前端开发变得更加高深。

这是网上的一张**不完全**前端学习内容思维导图。

![image](http://imgs24.iaweg.com/pic/HTTP2Rvd24uYWRtaW41LmNvbS91cGxvYWRzL2FsbGltZy8xNTA3MDMvMjA2OV8xNTA3MDMxMTExMjdfMS5qcGclog.jpg)

![img](http://p2fuh27b9.bkt.clouddn.com/18-5-19/55556627.jpg)

啊，怎么这么多东西呀！！！

嗯，前端最难的地方就是为了处理不同的情况，为了让开发更有效率，每天都有新东西出来，最流行的开发方法每天都变。而应对方式只有 **！！努力学习 ！！**。

听起来，会有点让人皱眉头吗？别怕，这些新技术其实也都是以HTML, CSS ,JavaScript为基础，把上面三个弄精通，新技术也不知过是在上一层楼而已。

相信我，当你自己做出来第一个像模像样的网页的时候，你会爱上前端的！

> 那么让我们开始吧！

## HTML - “建筑工人有力量”
>HTML (HyperText Markup Language) 不是一种编程语言;它是一种标记语言，用于告诉您的浏览器如何构造您访问的网页。 -- MDN Web Docs

一个房子是靠地基，墙壁，房顶组成的。如果把前端比喻成盖房的话，HTML就是施工阶段，作为标记语言，它用来描述网页的结构。你可以把它理解成是一套用于网页内容的排版规则。

## 一个HTML实例

``` html
<!DOCTYPE html>     
<html>              
    <head>          
        <title>MyPage</title>
    </head>
    <body>
        <p>Hello World!</p>
    </body>
</html>
```

从实际出发，我们就先来看看一个HTML文档到底长什么样子吧！

* `<!DOCTYPE html>` 放在文档的第一行，用来声明文档类型。它不是HTML标签，只用来告诉浏览器，文档使用的HTML版本。( 实例中这一句的意思就是，文档采用HTML5。)
* `<html></html>` 这一对标签用来告诉浏览器这是一个HTML文档。整个HTML文档全部包含在这里面。
* `<head></head>` 用来定义文档的头部，在这里面定义了文档的各种属性和信息，里面的东西浏览者一般是看不到的。
* `<title></title>` 这一元素可以定义文档的标题。包含在`<head>`标签中。一般会在浏览器标题栏中显示，当把页面保存到收藏夹的时候，标题也会是该文档链接的默认名称。
* `<body></body>`在这个元素中定义了文档的主体内容。简单来说就是网页打开后浏览者看到的页面内容。
* `<p></p>` 这是段落元素，里面定义了一个段落。

从上面的例子可以看出，HTML语言只是在描述网页的结构，并没有涉及任何计算，变量，指令，方程。这也就是为什么说HTML是标记语言，而不是编程语言。

把写HTML就想象成搭乐高积木，这并不会很难，加油看下去吧！

## HTML标签，HTML元素
 
**HTML标签**是HTML文档的最基本单位。

为了与普通文本区分开，它由一个尖括号`<`开始，一个反尖括号`>`结束。两个尖括号之间的是标签名。标签名大小写不敏感。 

![image](https://mdn.mozillademos.org/files/9347/grumpy-cat-small.png)

**HTML元素**是由 **HTML标签**，**HTML内容** 和 **HTML属性** 构成的。

但是基本上，HTML标签 和 HTML元素 这两词很多情况下同义共通。所以也不必纠结于说法，只要明白对方所具体指的是什么就可以了。

它的主要组成部分是：
1. **开始标签（Opening tag）**：包括元素的名称（在本例中，p），包裹在开始和结束尖括号 ( < > ) 中。这表示元素开始或开始生效。
2. **结束标签（Closing tag）** ：在开始标签的基础上在元素名称之前包含正斜杠( / )。这表示元素结束的位置。
3. **内容（Content）**：元素的内容。
4. **元素（Element）**：开始标记 + 结束标记 + 内容 = 元素。

（某些HTML元素是**空元素**，在开始标签中进行关闭，并没有结束标签。例如：`<br/>`）

## HTML标签嵌套
你也可以把元素放到其它元素之中——这被称作**嵌套**。
```
<p>这是一个段落，<a href="https:\\baidu.com">连接到百度</a>。</p>
```
上面就是一个嵌套例子。你需要确保元素被正确的嵌套：在上面的例子中我们先打开`<p>`元素，然后才打开`<a>`元素，因此必须先将`<a>`元素关闭，然后再去关闭`<p>`元素。所有的元素都需要正确的打开和关闭，这样才能按你所想的方式展现。

## HTML属性

**HTML属性**是为HTML元素提供的附加信息。（在后面需要时在详细讲解）

![image](https://mdn.mozillademos.org/files/9345/grumpy-cat-attribute-small.png)

属性所包含的信息并不会出现在实际的内容中。上面这个例子里，class属性给元素赋了一个可供识别的类名。之后可以通过这个名字去为其定义样式信息。

规则：
1. 元素名与属性之间，以及每个属性之间用空格分开。
2. 属性名与属性值用“=”连接。
3. 属性值要用引号(“”)引起来。
4. 属性一般位于开始标签。
5. 不区分大小写，但是推荐小写。

## HTML注释

**HTML注释** 是对相应的代码所做出的说明和备注。写法如下：

``` html
<!-- 注释内容 -->
```

`<!--`表示注释开始，`-->`表示注释结束。

不要偷懒不好好写注释，为了日后自己和别人都能方便理解，查找，沟通，请一定要把注释写清楚，写明白。

## `<head>`内常用元素

**`<meta>`标签**：
又叫“元数据元素”，不会在客户端显示，但是会被浏览器解析。通常用于定义页面的关键字，描述，作者信息等。以方便搜索引擎来搜索页面相关信息。简单说元数据就是告诉搜索引擎这个网页是干什么的，是谁写的，等等。

在刚开始我想过讲解这一部分，目前只要先记住下面这个写法就可以了。这句代码告诉浏览器 HTML 文档使用 Unicode 字符编码。

``` html
<meta charset="UTF-8">
```

**`<title>`标签**
在前面已经见过了，`<title>`标签定义文档的标题，在所有 HTML 文档中是必需的。也就是页面打开后浏览器上方的标题。

``` html
<title>文档标题</title>
```

合起来之后就是下面这样，在目前的学习中，我们就先这样写就好了，更深入的内容在后面遇到时我们在探讨。

``` html
<head>
    <meta charset="utf-8">
    <title>文档标题</title>
</head>
```

## `<body>`内常用元素

### 段落与文本

**标题**

在 HTML 中一共有6个级别的标题元素。
级别由大到小通过 `<h1> - <h6>` ("heading") 标签来定义。

`<h1>` 级别最大，字号最大。`<h6>` 级别最小，字号最小。同时级别越高意味着重要性也越大。

``` html
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```

![Screen Shot 2018-05-15 at 12.47.10 PM](https://i.imgur.com/x0CYPs9.png)

**段落**

段落通过 `<p>` ("paragraph") 标签定义。顾名思义，段落标签用来标记一段文字。

``` html
<p>前端开发工程师是Web前端开发工程师的简称，2007年才真正开始受到重视的一个新兴职业。Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。</p>

<p>前端开发工程师不仅要掌握基本的Web前端开发技术，网站性能优化、SEO和服务器端的基础知识，而且要学会运用各种工具进行辅助开发以及理论层面的知识，包括代码的可维护性、组件的易用性、分层语义模板和浏览器分级支持等。</p>
```

![Screen Shot 2018-05-15 at 12.46.34 PM](https://i.imgur.com/MoRq2YY.png)

可以看到段落标签会自动换行，段落与段落之间有空隙。

**换行**

如果您希望在不产生一个新段落的情况下进行换行，请使用 `<br />` 标签：

``` html
<p>前端开发工程师是Web前端开发工程师的简称，2007年才真正开始受到重视的一个新兴职业。
<br />
Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。</p>
```

![Screen Shot 2018-05-15 at 12.46.06 PM](https://i.imgur.com/aZnldk5.png)

不同于`<p>`标签，使用`<br />`标签换行，两段文字之间没有空隙。但是这两个标签之间的区别可不只是样式不同这么简单哦。区分段落时请用`<p>`，段落之内换行请用`<br />`，不要随意乱用。

**格式化标签**

也就是针对文本进行各种 “格式化”（加粗，斜体，上标，下标） 的标签。

**加粗：**

标签 `<b>` ("bold") 和 `<strong>` 都可以对文本进行**加粗**。

``` html
<p>在这段文字中,<b>这段被加粗了</b></p>
<p>在这段文字中,<strong>这段被加粗了</strong></p>
```

![Screen Shot 2018-05-15 at 12.44.15 PM](https://i.imgur.com/qovfrAY.png)

**斜体：**

标签 `<i>` ("italic")，`<cite>` 和 `<em>`（"emphasis"）  可以使文本实现斜体。
```
<p>在这段文字中,<i>这段是斜体</i></p>
<p>在这段文字中,<cite>这段是斜体</cite></p>
<p>在这段文字中,<em>这段是斜体</em></p>
```

![Screen Shot 2018-05-15 at 12.43.39 PM](https://i.imgur.com/z0orkgN.png)

你可能会想，那么既然表现样式都一样，为什么要用这么多不同的标签去实现呢？

这里就涉及到 HTML 的语义化概念了。不同的标签具有不同的语义，哪怕它们所表现出的样式都一样，但所代表的意义也都不同。具体的区别我会在后面单开一个讲解语义化的文章。在目前我们就先暂时在练习中使用`<b>`和`<i>`。

**上标，下标：**

标签`<sup>`（“superscript”）可以实现文本的上标效果。标签`<sub>`（“subscript”）可以实现文本的下标效果。

``` html
<p>
  16<sup>2</sup>=256
</p>
<p>
  H<sub>2</sub>O是水
</p>
```

![Screen Shot 2018-05-15 at 12.43.01 PM](https://i.imgur.com/3tE7Jww.png)

**删除线，下划线，水平线**

借助各种线段可以加强文本的表达

**删除线：**

`<s>`标签（“strike”）和 `<del>`标签（“delete”）都可以用来在包含的文本中间画上一条贯穿线，以表达内容被删除。但是在 HTML5 中`<s>`标签已经不再被推荐使用，所以只要作为了解就好，在使用中还是选择`<del>`吧。

``` html
<p>倾销大甩卖：</p>
<p><del>原价：￥9998</del></p>
<p>跳楼价：￥998</p>
```

![Screen Shot 2018-05-15 at 12.59.40 PM](https://i.imgur.com/Zk5IYRI.png)

**下划线：**

`<u>`标签（“underline”）可以为文本加上下划线，但是我们应该避免去随意使用。因为很多时候用户会误以为加下划线的文本是超链接。

``` html
<p><u>我不是超链接，别点我！</u></p>
```

![Screen Shot 2018-05-15 at 1.02.51 PM](https://i.imgur.com/i8xj3uY.png)

**水平线：**

`<hr />`标签（“horizon”）表现为一条水平线，可以看到它是一个自闭和标签。

``` html
<p>我下面有一个水平线</p>
<hr />
<p>我上面有一个水平线</p>
```

![Screen Shot 2018-05-15 at 1.08.23 PM](https://i.imgur.com/P57FVUA.png)

**特殊符号**

要想在 HTML 中表现特殊符号（例如：空格，￥，$，÷）常用的有两种方法：

1. 直接在 HTML 文档中输入该特殊符号；
2. 在 HTML 文档中输入该特殊符号对应的 HTML 代码

注意： 很多符号属于 unicode 字符集，我们需要在`head`标签内添加`<meta charset="utf-8">`

例如，如果想添加两个空格在段落开头，你会发现在 HTML 文档中手动打空格是不管用的。我们就要使用 HTML 代码。

``` html
<p>&nbsp;&nbsp;前端开发工程师是Web前端开发工程师的简称，2007年才真正开始受到重视的一个新兴职业。</p>
```

![Screen Shot 2018-05-15 at 1.21.42 PM](https://i.imgur.com/U3BpNLY.png)

或者想表示金钱符号：

``` html
<p>欧元符号：&#8364</p>
<p>欧元符号：€</p>
```

![Screen Shot 2018-05-15 at 1.26.36 PM](https://i.imgur.com/NVRugdd.png)

在上面我使用了两种不同的方式输入同一个特殊符号。

由于特殊字符实在是太多了，大家可以根据需求自己去查找。

参考网站：[特殊字符大全](https://blog.csdn.net/u013778905/article/details/53177042)

### 超链接

使用标签 `<a>` 定义超文本链接，可以从一个页面指向另一个目的端的链接。也正是因为有了超链接，才让网页连成网络。

```
<a href="https://www.baidu.com/" target="_blank">百度</a>
```

![Screen Shot 2018-05-15 at 1.40.08 PM](https://i.imgur.com/xPHqmLR.png)

`<a>`标签的默认表现样式为蓝色，点击后字体颜色为紫色。

**`href`属性：**

在标签`<a>`中使用“`href`属性”来定义目标地址。当链接被点击，则跳转到目标。如果 `href` 属性没有被指定链接，`<a>` 标签将不是一个链接。

**`target`属性：**

`target`属性定义目标窗口的打开方式。默认值为`_self`，即在当前窗口打开链接。如果属性值为`_blank`，那么点击链接后，在新窗口中打开被链接文档。

**锚点链接：**

不同于上面的链接是访问外部的网页，锚点链接的目标对象是当前页面的某个部分。

``` html
<a href="#project">项目简介</a>
<a href="#team">团队介绍</a>

<div id="project">
  这里面写的是项目介绍...
</div>

<div id="team">
  这里面写的是团队介绍...
</div>
```

我在这里使用了`<div>`标签 这个我会在后面介绍，而`id`属性 我会在 CSS 章节再介绍，这里你可以先简单把 `id` 当做每个`<div>`元素“独立唯一的代号“，就像你的身份证号一样，一个号码对应一个人。所以`id`也必须是唯一的，不能出现重复相同的`id`。

在`<a>`标签的`href`属性值为 `#`符号 加上 目标元素的 `id`名。

当链接被点击的时候，网页就会自动滚动到目标板块了。

### 块级元素 & 行内元素（内联元素）

在这里我要讲解两个概念：块元素 和 行内元素。

在前面的学习中，我们发现有的元素独占一行（例如：`<p>`,`<h1> - <h6>`），有的元素可以几个排列在同一行（例如：`<a>`, `<b>`, `<em>`）

**块级元素** 在浏览器上表现为占据整行，不与其他元素共在同一行。可以在内嵌套块级元素和行内元素。

**行内元素** 则与其他行内元素可以共同位于同一行。行内元素内部也可以嵌套其他元素，但是不能是块级元素。 

### `<div>`标签 & `<span>`标签

**`<div>`标签** 是 “division”（分区）的英文缩写。它是一个 块级元素，顾名思义`<div>`基本上用来 分区 或 布局，作为组合其他 HTML 元素的容器。

**`<span>`标签** 是行内元素，可作为 文本的容器，当与 CSS 结合时，`<span>`标签可以用于为指定文本设置样式。

``` html
<div>
  <h1>区域 - 1</h1>
  <p>这是一个单独的分区，
    <span>这是一个嵌套在块级元素中的行内元素</span>
  </p>
</div>

<div>
  <h1>区域 - 2</h1>
  <p>这是一个单独的分区</p>
</div>
```

![Screen Shot 2018-05-15 at 3.30.18 PM](https://i.imgur.com/hhDjKfV.png)

### 图片

使用标签 `<img />` ("image") 定义HTML页面中的图像。

`<img />`是个自闭合，也就是说它没有闭合标签。

常用属性：
* `src`属性 定义图像文件的地址
* `alt`属性 定义一串可替换的文本，当浏览器无法载入图像和的时候，替换文本就会出现在原本图像的位置。告诉浏览者失去的信息。
* `title`属性 定义图片的提示文字，当用户把鼠标移到图片上时显示提示文字。

``` html
<img src="图片地址" alt="这是一个图片" />
```

**相对路径 & 绝对路径**

`src`属性内的图片地址可以是 相对路径，也可以是 绝对路径。这两个概念在初学的时候，一定要弄清楚。

**相对路径**：以当前文件所在目录为出发点，目标文件的地址相对于这个出发点来定义。

**绝对路径**：以硬盘的根目录为出发点，直接一层层的指向目标文件。

如果你熟悉 linux 的目录系统的话，应该比较容易理解这两个概念。

![Screen Shot 2018-05-15 at 5.50.59 PM](https://i.imgur.com/tihwyGf.png)

上面图片中，`index.html`文件所在层级目录下，有一个`img2.png`图片文件，还有一个`images`目录。在`images`目录下还有一个`img1.png`图片文件。

如果想在`index.html`文件里引用`img1.png`和`img2.png`两个图片，我们有下面这几种写法：

``` html
<img src="./images/img1.png" alt="img1.png" title="图片1"> <!-- 相对路径 --> 
<img src="/Users/Garrik/mySite/images/img1.img" alt="img1.png" title="图片1"> <!-- 绝对路径 -->
<img src="./img2.png" alt="img2.png" title="图片2"> <!-- 相对路径 -->
<img src="/Users/Garrik/mySite/img2.img" alt="img2.png" title="图片2"> <!-- 绝对路径 -->
```

当然上面的 绝对路径 是针对于我个人电脑的，每个人的路径都有可能不同。

在开发中推荐使用 相对路径，因为绝对路径是从所在设备的根目录出发的，每个设备的目录环境可能都不相同。我写的路径到你的电脑上就会找不到。所有如果使用 相对路径 的话，只要我的项目目录不发生结构性的改变，我的项目在哪个设备上都不会出问题。

### 列表

在 HTML 中，我们可以定义 无序列表，有序列表 和 定义列表。

**无序列表：**

使用 `<ul>`标签（“unordered list”）定义无序列表。在`<ul>`标签之内用`<li>`标签定义列表项。

``` html
<ul>
   <li>Apple</li>
   <li>Orange</li>
   <li>Grape</li>
</ul> 
```

![Screen Shot 2018-05-15 at 6.14.52 PM](https://i.imgur.com/TiUaspy.png)

通过改变`<ul>`标签的`type`属性值，我们可以定义不同的列表项符号。但在实际开发中更多用到的是 CSS 的 `list-style-type`属性。等后面讲到 CSS 的时候再说，现在先了解`type`属性。

属性值 | 符号
-- | --
disc | 默认值。实心圆。
circle 	| 空心圆。
square 	| 实心方块。

**有序列表：**

使用 `<ol>`标签（“ordered list”）定义有序列表。在`<ol>`标签之内用`<li>`标签定义列表项。

``` html
<ol>
   <li>Apple</li>
   <li>Orange</li>
   <li>Grape</li>
</ol> 
```

![Screen Shot 2018-05-15 at 6.15.03 PM](https://i.imgur.com/wdwyBkl.png)

**定义列表：**

定义列表 在开发中并不常用，但是我们还是要了解。

其分为两个部分：定义名词 和 定义描述。

简单来说 定义列表 就是一堆 名词 和 注释 的组合。

使用 `<dl>`标签（“definition list”）创建定义列表。使用 `<dt>`标签（“definition term”）创建定义名词。使用 `<dd>`标签（“definition description”）创建定义描述。

``` html
<dl>
  <dt>香蕉</dt>
  <dd>- 这个一个水果</dd>
  <dt>长颈鹿</dt>
  <dd>- 这是一个动物</dd>
  <dt>飞机</dt>
  <dd>- 这是一个交通工具</dd>
</dl> 
```

![Screen Shot 2018-05-15 at 6.36.38 PM](https://i.imgur.com/1US6EtB.png)

### 表格

使用 `<table>`标签 来定义表格。

HTML 表格的基本结构：
* `<table>…</table>`：定义表格
* `<tr>…</tr>`（“table row”）：定义表格的行
* `<td>…</td>`（“table data cell”）：定义每一行的单元格

`<tr>`，`<td>`都要放在`<table>...</table>`里面。

``` html
<table border="1">
  <tr>
    <td>第一行，第一列</td>
    <td>第一行，第二列</td>
  </tr>
  <tr>
    <td>第二行，第一列</td>
    <td>第二行，第二列</td>
  </tr>
  <tr>
    <td colspan="2">二列合一列</td>
  </tr>
</table>
```

![Screen Shot 2018-05-17 at 10.08.48 AM](https://i.imgur.com/7itRD2y.png)

`border`属性规定围绕表格的边框的宽度，单位为“px”。

`border`属性会为每个单元格应用边框，并用边框围绕表格。

如果`border`属性值改变，那么只有表格最外边框的尺寸会发生变化。表格内部的边框仍旧是`1px`宽。

**标题`<caption>`标签：**

使用`<caption>`标签可以定义表格标题。其必须紧随`<table>`开始标签之后。默认位于整个表格的第一行，一个表格只有一个标题。

**`<th>`标签：**

`<th>`标签定义表格内的表头单元格（包含表头信息），位于表格的第一行，用来表明这一列的内容类别。

之前看到的`<td>`标签定义的是标准单元格（包含数据）。

**`align`属性**

通过定义单元格（`<td>`，`<th>`）的`align`属性，我们可以设定单元格内文字的对齐方向。

* `align="left"`：靠左
* `align="center"`：居中
* `align="right"`：靠右

**合并行`rowspan`：**

在设计表格时，有时候根据需求，我们需要进行“合并单元格”。

使用`<td>`标签的`rowspan`属性我们可以合并多行。

``` html
<td rowspan="跨度的行数">内容</td>
```

**合并列`colspan`：**

使用`<td>`标签的`colspan`属性我们可以合并多列。

``` html
<td colspan="跨度的列数">内容</td>
```

使用前面讲到的标签，我们综合创建一个表格：

``` html
<table border="1">
  <caption>水果批发</caption>
  <tr>
    <th>产地</th>
    <th>名称</th>
    <th>单价（磅）</th>
    <th>数量（磅）</th>
  </tr>
  <tr>
    <td rowspan="2">海南</td>
    <td>香蕉</td>
    <td align="center">￥05</td>
    <td align="center">5</td>
  </tr>
  <tr>
    <td>榴莲</td>
    <td align="center">￥15</td>
    <td align="center">3</td>
  </tr>
  <tr>
    <td>美国</td>
    <td>樱桃</td>
    <td align="center">￥15</td>
    <td align="center">10</td>
  </tr>
  <tr>
    <td colspan="2">总价</td>
    <td colspan="2" align="center">￥220</td>
  </tr>
</table>
```

![Screen Shot 2018-05-17 at 10.46.53 AM](https://i.imgur.com/jwnljqB.png)

**表格语义化：**

为了加强表格的语义化，HTML 中引入了`<thead>`，`<tbody>`，`<tfoot>`三个标签。将表格分为：表头，表身，表脚。三个部分。

关于这一部分我会在后面的 语义化篇章 再讨论，目前大家先留一个印象吧。

### 表单

在平时浏览网页时，我们经常会遇到表单。例如：登录，注册账户，发表评论，做问卷调查，等等。通过上面我们讲到的标签，我们已经可以做出静态页面了，而表单往往是需要和后台服务器交互的，所有也就被称为动态页面。这里静态，与动态的区别可以理解为是否有与后台服务器的数据交流。

使用`<form>`标签可以创建一个表单。表单的用途简单来说就是收集信息，虽然涉及到了后端交互，但是在这一章我们只需要关心如何在 HTML 里构建表单的页面效果。

#### Input元素：

``` html
<input type="表单类型" />
```

`<input>`标签多数情况下被用到的表单标签是输入标签。

使用`<input>`标签来声明允许用户输入数据。

`<input>`是空元素，只由开始标签和属性组成。

具体的输入类型是由`type`属性定义的。在这里我们先介绍几个常用的。

**文本框（text）**

text 类型用于一般文本输入。

``` html
<input type="text" placeholder="此处是一个输入框">
```

![Screen Shot 2018-05-17 at 3.17.07 PM](https://i.imgur.com/6m6H9gR.png)

* `placeholder`属性 规定可描述输入 `<input>`字段预期值的简短的提示信息。
* `value`属性 定义文本框内的文字。
* `size`属性 定义文本框的长度，以字符为单位。
* `maxlength`属性 设置文本框中最多可以输入的字符数量。


**密码框（password）**

password 类型用于密码输入。在外观上它和 text 类型 一样，也有同样的属性，但是密码框输入的字符是不可见的。

``` html
<input type="password" value="123456">
```

![Screen Shot 2018-05-17 at 3.24.11 PM](https://i.imgur.com/f8UTiiJ.png)

可以发现我在`value`属性里设置了值，但最后在密码框里显示的却是星号。

**单选按钮（radio）**

单选按钮的意思就是在众多选项里面只能选一个，使用`radio`类型来创建。

``` html
<input type="radio" name="fruit" value="apple" /> 苹果
<input type="radio" name="fruit" value="banana" /> 香蕉
<input type="radio" name="fruit" value="grape" /> 葡萄
```

![Screen Shot 2018-05-17 at 3.31.00 PM](https://i.imgur.com/sDKKzYV.png)

radio 类型的`name`和`value`属性是必须要设置的。
* `name`属性定义的单选按钮组 (具有相同名称的单选按钮 属于同一组)。
* `value`属性设置单选按钮的值。

如果在浏览器尝试上面的例子，你会发现三个水果只有一个可以被选中，点击另外一个，则之前选中的自动被取消。但是注意只有`name`属性相同的按钮在一起才会有这种效果。

**复选框（checkbox）**

不同于上面的 radio 类型，checkbox 类型可以允许从选项列表中同时选中多个项。

``` html
<input type="checkbox" value="apple" checked="checked" /> 苹果
<input type="checkbox" value="banana" /> 香蕉
<input type="checkbox" value="grape" /> 葡萄
```

![Screen Shot 2018-05-17 at 3.43.54 PM](https://i.imgur.com/TXdO0F5.png)

`checked`属性可以让选项默认为选中状态。

上面的`checked="checked"`因为属性名和属性值一样，也可以简写为`checked`。

### `<label>`标签

`<label>`标签可以为`<input>`元素定义标记，以来加强表单的可用性，如果在`<label>`元素内点击文本，浏览器就会自动将焦点转到相关标签上。

根据上面的例子，我做出了如下修改：

``` html
<label for="apple">苹果</label>
<input type="checkbox" id="apple" value="apple" checked="checked" />
<label for="banana">香蕉</label>
<input type="checkbox" id="banana" value="banana" /> 
<label for="grape">葡萄</label>
<input type="checkbox" id="grape" value="grape" /> 
```

![Screen Shot 2018-05-17 at 5.36.07 PM](https://i.imgur.com/g8ipwYM.png)

改完之后，点击文字也可以选中相应的复选框。

#### 按钮

在 `<input>`标签 有三种按钮类型：
* 普通按钮 button
* 提交按钮 submit
* 重置按钮 reset

**普通按钮 button：**

``` html
<input type="button" value="点我">
```

![Screen Shot 2018-05-17 at 4.58.21 PM](https://i.imgur.com/9nScuwE.png)

`value`属性的值会显示在按钮之上。

在之后学了 JavaScript 我们可以为按钮绑定相应的事件。 
**提交按钮 submit & 重置按钮 reset：**

提交 和 重置按钮 都可以被看成是具备特殊功能的普通按钮。
* 提交按钮点击后，可以将表单内容提交到服务器；
* 重置按钮点击后，可以重置当前表单内部的表单元素；

``` html
  <form name="myForm" method="" action="">
    账号：<input type="text" placeholder="请输入账号" />
    <br />
    密码：<input type="password" placeholder="请输入密码" />
    <br />
    <input type="submit" value="提交" />
    <input type="reset" value="重置" />
  </form>
```

![Screen Shot 2018-05-17 at 5.09.23 PM](https://i.imgur.com/ytl30PJ.png)

**`<button>`标签**

前面我们看到的是按钮在`<input>`标签中的实现。而我们其实还可以用`<button>`标签实现按钮。

因为`<input>`标签是自闭和标签，所以一个弊端是在其内部无法嵌套任何其他标签或文字。而`<button>`标签就可以实现更多的可能性。

``` html
<button>点我</button>
```

![Screen Shot 2018-05-17 at 5.16.18 PM](https://i.imgur.com/34LwFYI.png)

#### 下拉列表

`<select>`标签 和 `<option>`标签 组合使用可以实现下拉列表。可以把它类比做一个可以下拉的无序列表。正常情况下只显示一个选项，当下拉菜单被点击更多选择则显示出来。

``` html
<select>
  <option>香蕉</option>
  <option>西瓜</option>
  <option>苹果</option>
  <option>樱桃</option>
</select>
```

![Screen Shot 2018-05-17 at 5.20.05 PM](https://i.imgur.com/ATLFHI9.png)

#### 多行文本区域

使用`<textarea>`标签定义一个多行的文本输入控件。

可以通过 `cols`（列） 和 `rows`（行） 属性来规定 `textarea` 的尺寸大小

``` html
<textarea rows="10" cols="30">
我是一个文本框。 
</textarea>
```

![Screen Shot 2018-05-17 at 5.38.43 PM](https://i.imgur.com/zsPXJPa.png)

表单目前我们先介绍这么多，当然表单可远远没这么简单。我们在实际开发中还要学会自己多查资料。

[HTML表单参考](http://www.runoob.com/html/html-forms.html)

### 音频 & 视频

通过`<video>`标签可以实现往网页中添加视频文件，用`<audio>`标签添加音频文件。

**`<video>`标签：**

``` html
<video width="500" controls
    poster="https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg" 
    src="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"     
></video>
```

![Screen Shot 2018-05-18 at 12.43.21 PM](https://i.imgur.com/0ScwEKI.png)

* `src`属性 定义了视频源文件的地址。
* `poster`属性 定义用户点击播放之前显示的封面
* `controls`属性 定义是否显示播放控件
* `width`属性 定义视频播放器的宽度，高度可以自行随比例变换。

**`<source>`标签：**

如果你想为视频指定多个视频源的话，可以使用`<source>`标签，浏览器会根据自己支持的格式去选择。

根据上面的例子，做出修改：

``` html
<video width="500" controls
  poster="https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg" >
  <source
    src="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
    type="video/mp4">
  <source
    src="https://archive.org/download/ElephantsDream/ed_hd.ogv"
    type="video/ogg">
  <source
    src="https://archive.org/download/ElephantsDream/ed_hd.avi"
    type="video/avi">
</video>
```

**`<audio>`标签：**

使用`<audio>`标签可以往网页中添加音频文件。使用方法和`<video>`基本一样。
 
``` html
<audio
  src="http://p2fuh27b9.bkt.clouddn.com/music.mp3"
  controls>
</audio>
```

![Screen Shot 2018-05-18 at 1.28.27 PM](https://i.imgur.com/NiJcRAb.png)

如果想让音乐自动循环背景播放，可以做出如下修改：

``` html
<audio
  src="http://p2fuh27b9.bkt.clouddn.com/music.mp3" 
  autoplay loop>
</audio>
```

* 去掉`controls`属性，因为用户看不到任何控件，则音频为背景播放。
* `autoplay`属性 让音频自动播放。
* `loop`属性 让音频循环播放

当然我在这里只能介绍一些基本用法，更多内容请大家多多查资料：[参考](http://www.runoob.com/html/html-sounds.html)

### 练习时间到

>好啦，到目前我们已经大概了解了HTML文档是怎么组成的，并且知道了一些常用HTML元素。那么下面我们来试着写一写吧。

在这里我推荐大家使用 [CodePen](https://codepen.io/pen/) 作为练习场所。

这是一个在线前端代码编辑网站。

简单！方便！好用！

