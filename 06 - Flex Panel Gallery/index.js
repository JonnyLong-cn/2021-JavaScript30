const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    // 给当前面板的CSS类中添加open
    this.classList.toggle('open');
}

function toggleWord(e) {
    // 打印当前过渡结束的CSS属性
    console.log(e.propertyName);
    // 如果包含flex就添加open-actived类名
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-actived');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
// 在CSS transition完成后触发transitionend事件
panels.forEach(panel => panel.addEventListener('transitionend', toggleWord));