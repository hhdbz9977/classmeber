let currentPage = 1; // 当前页码
const totalPages = 10; // 总页数
const pageNumber = document.querySelector('.page-number');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// 更新页码函数
function updatePage() {
    pageNumber.textContent = currentPage; // 更新页面显示的页码
}

// 上一页按钮事件
prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--; // 页码减一
        updatePage(); // 更新显示
    }
});

// 下一页按钮事件
nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++; // 页码加一
        updatePage(); // 更新显示
    }
});

// 初始显示
updatePage(1);
updatePage(2);