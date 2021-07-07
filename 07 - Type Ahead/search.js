const url = 'https://gist.githubusercontent.com/soyaine/81399bb2b24ca1bb5313e1985533c640/raw/bdf7df2cbcf70706c4a5e51a7dfb8c933ed78878/TangPoetry.json';
const poetries = [];
// 发送ajax请求，将获取的数据保存在poetries数组中
const xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        poetries.push(...JSON.parse(xhr.responseText));
    }
}
xhr.send();
console.log(poetries);

function findMatches(wordToMatch, poetries) {
    return poetries.filter(poet => {
        const regex = new RegExp(wordToMatch, 'gi');
        // 多个作者进行拼接
        const author = poet.detail_author.join('');
        return poet.detail_text.match(regex) || poet.title.match(regex) || author.match(regex);
    });
}

function displayMatches() {
    // this就是这个input的DOM
    const matches = findMatches(this.value, poetries);
    // gi: 全文查找，忽略大小写
    const regex = new RegExp(this.value, 'gi');
    console.log(matches);
    const html = matches.map(poet => {
        // 匹配诗句文本和诗名段，为其添加上span标签，以便在CSS中修改其高亮样式
        const text = poet.detail_text.replace(regex, `<span class="highlight">${this.value}</span>`);
        const title = poet.title.replace(regex, `<span class="highlight">${this.value}</span>`);
        return `
        <li>
            <span class="poet">${text}</span>
            <span class="title">${title} - ${poet.detail_author[0]}</span>
        </li>
        `
    }).join('');
    console.log(html);
    suggestions.innerHTML = html;
}

const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

search.addEventListener('change', displayMatches);
search.addEventListener('keyup', displayMatches);
