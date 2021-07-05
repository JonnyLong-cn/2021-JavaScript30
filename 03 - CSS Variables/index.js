// 获取页面中的input元素
const inputs = document.querySelectorAll('.controls input');
// 用JavaScript改变CSS属性值
function setProperty() {
    // 处理单位的问题
    const suffix = this.dataset.suffix || '';
    // 将HTML标签内部的value设置到CSS样式中
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    // 设置code部分的值
    document.getElementById(`code-${this.name}`).innerText = this.value + suffix;
}
// 为每个input添加监听事件，触发更新操作
inputs.forEach(input => input.addEventListener('change', setProperty));
inputs.forEach(input => input.addEventListener('mousemove', setProperty));