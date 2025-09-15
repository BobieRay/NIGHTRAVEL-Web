// スライド用の画像リスト
const imageSets = [
    [
        "images/ステージ1/ハコノフA.png",
        "images/ステージ1/ハコノフB.png",
        "images/ステージ1/ハコノフC.png",
        "images/ステージ1/ヴェンドボット.png",
        "images/ステージ1/デリボット.png",
        "images/ステージ1/シグナボット.png",
        "images/ステージ1/ボックスガイスト(射出状態).png"
    ],
    [
        "images/ステージ2/missileMachine.png",
        "images/ステージ2/ガードボット.png",
        "images/ステージ2/ドローン.png",
        "images/ステージ2/サイバードッグ.png"
    ],
    [
        "images/ステージ3/カルカス.png",
        "images/ステージ3/スレイド.png",
        "images/ステージ3/ノードコア.png",
        "images/ステージ3/ブレイズ.png",
        "images/ステージ3/ヴァルクス(第1形態).png",
        "images/ステージ3/ヴァルクス(第2形態).png"
    ]
];


/*function showSlide(index) {
    const modalImage = document.getElementById("modalImage");
    modalImage.src = imageSets[currentSet][index];
    document.getElementById("counter").textContent =
        `${index + 1} / ${imageSets[currentSet].length}`;
}*/


let currentSet = 0;
let currentIndex = 0;

function openSlideshow(setIndex) {
    currentSet = setIndex;
    currentIndex = 0;
    updateSlides();
    document.getElementById("modal").style.display = "flex";
}

function closeSlideshow() {
    document.getElementById("modal").style.display = "none";
}

function updateSlides() {
    const img = document.getElementById("modalImage");
    img.src = imageSets[currentSet][currentIndex];
    document.getElementById("counter").textContent =
        `${currentIndex + 1} / ${imageSets[currentSet].length}`;
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + imageSets[currentSet].length) % imageSets[currentSet].length;
    updateSlides();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % imageSets[currentSet].length;
    updateSlides();
}