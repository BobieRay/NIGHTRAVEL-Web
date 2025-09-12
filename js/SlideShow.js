const modal = document.getElementById("modal");
const slideImg = document.getElementById("slide");

let currentIndex = 0;
let currentSet = 0;
let autoPlayInterval = null; // 自動再生用タイマー

// 画像リスト（ステージごとにまとめられる）
const imageSets = [
    [
        "images/ステージ1/ハコノフA.png",
        "images/ステージ1/ハコノフB.png",
        "images/ステージ1/ハコノフC.png",
        "images/ステージ1/ヴェンドボット.png",
        "images/ステージ1/デリボット.png",
        "images/ステージ1/シグナボット.png",
        "images/ステージ1/ボックスガイスト(射出状態).png",
        "images/ステージ1/ボックスガイスト(ゴーレム状態).png",
        "images/ステージ1/ボックスガイスト(おもり).png"
    ]
];

// モーダルを開く
function openSlideshow(setIndex) {
    currentSet = setIndex;
    currentIndex = 0;
    updateSlide();
    modal.style.display = "flex";

    // 自動再生開始（3秒ごとに切り替え）
    autoPlayInterval = setInterval(nextSlide, 3000);
}

// モーダルを閉じる
function closeSlideshow() {
    modal.style.display = "none";
    clearInterval(autoPlayInterval); // 自動再生を止める
}

// 画像を更新
function updateSlide() {
    slideImg.src = imageSets[currentSet][currentIndex];
}

// 前へ
function prevSlide() {
    currentIndex = (currentIndex - 1 + imageSets[currentSet].length) % imageSets[currentSet].length;
    updateSlide();
    resetAutoPlay();
}

// 次へ
function nextSlide() {
    currentIndex = (currentIndex + 1) % imageSets[currentSet].length;
    updateSlide();
    resetAutoPlay();
}

// 手動操作したら自動スライドをリセット（快適に操作できるように）
function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(nextSlide, 3000);
}