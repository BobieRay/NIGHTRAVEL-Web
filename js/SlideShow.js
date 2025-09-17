// スライド用の画像リスト
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
        "images/ステージ1/ボックスガイスト(おもり状態).png"
    ],
    [
        "images/ステージ2/ミサイルマシン.png",
        "images/ステージ2/ガードボット.png",
        "images/ステージ2/ドローン.png",
        "images/ステージ2/サイバードッグ.png",
        "images/ステージ2/フルメタルワーム.png",
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

const enemy_name = [
    [
        "ハコノフA",
        "ハコノフB",
        "ハコノフC",
        "ヴェンドボット",
        "デリボット",
        "シグナボット",
        "(ボス)ボックスガイスト(射出状態)",
        "(ボス)ボックスガイスト(ゴーレム状態)",
        "(ボス)ボックスガイスト(おもり状態)"
    ],
    [
        "ミサイルマシン",
        "ガードボット",
        "ドローン",
        "サイバードッグ",
        "(ボス)フルメタルワーム",
    ],
    [
        "カルカス",
        "スレイド",
        "ノードコア",
        "ブレイズ",
        "(ボス)ヴァルクス(第1形態)",
        "(ボス)ヴァルクス(第2形態)"
    ]
];

let currentSet = 0;
let currentIndex = 0;

function openSlideshow(setIndex) {
    currentSet = setIndex;
    currentIndex = 0;
    updateSlides();
    document.getElementById("modal").style.display = "flex";
}

function updateSlides() {
    const img = document.getElementById("modalImage");
    const text = document.getElementById("enemy_name");
    if(currentSet==1&&currentIndex==4)
    {
        img.style.width="60%";
    }
    else if(currentSet==2&&currentIndex==5)
    {
        img.style.width="60%";
    }
    else if(currentSet==2&&currentIndex==3)
    {
        img.style.width="45%";
    }
    else
    {
        img.style.width="35%";
    }
    img.src = imageSets[currentSet][currentIndex];
    text.innerText = enemy_name[currentSet][currentIndex];
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