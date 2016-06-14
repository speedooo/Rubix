---
order: 10
chinese: 对话框
english: dialogbox
---
---

## 常见模式

### 模态对话框
当对话框弹出时必须要用户对当前对话框给出响应，才能对对话框以外的应用程序进行操作。

<br>

特点：
强制用户进行一些操作，如果对话框被页面隐藏，会使用户误认为站点无响应。

<img class="preview-img" align="right" alt="规格示例" src="https://os.alipayobjects.com/rmsportal/fuPcwZCYiohhdSt.png">


### 单一选项对话框
对话框中只提供给用户一个选项，通常是引导用户到某一特定功能。但需要伴有一段详细的解释，让用户充分了解该项功能的用途。
<br>

特点：选项按钮突出，通常点击面积很大。引导用户点击，但同时也可能引起用户的恐慌，会直接选择关闭对话框，适用于目的极其明确的对话框，希望引导用户进入特定操作。

<img class="preview-img" align="right" alt="规格示例" src="https://os.alipayobjects.com/rmsportal/fuPcwZCYiohhdSt.png">

## 内容

1. 标题：明确对话框内容，需要简短且清晰
2. 正文：详细描述对话内容，以便用户做出下一步动作，可能是纯文字描述，也可能需要用户填写部分信息
3. 动作：对话框内容完成后执行的动作，通常包括确定、取消动作，也有单一选择的情况。
4. 遮罩层：区分对话框与主界面内容，需要添加遮罩层。对话框动作结束后会随对话框一起消失。

## 规格
