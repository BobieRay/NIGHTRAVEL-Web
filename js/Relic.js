const relics = [
    {
        name: "アタックチップ",
        rarity: "コモン",
        effect: "攻撃力+5%上昇",
        image: "images/Relic/アタック1.png"
    },
    {
        name: "ディフェンスチップ",
        rarity: "コモン",
        effect: "防御力+3%アップ",
        image: "images/Relic/ディフェンス2.png"
    },
    {
        name: "ビットコイン",
        rarity: "アンコモン",
        effect: "経験値獲得量15%増加",
        image: "images/Relic/ビットコイン8.png"
    },
    {
        name: "デジタルミート",
        rarity: "アンコモン",
        effect: "20秒ごとに最大HP3%を回復する肉塊を3つ\n" +
                "近くに生成する　15秒経過で消滅する",
        image: "images/Relic/デジタルミート13.png"
    },
    {
        name: "バックアップHDMI",
        rarity: "ユニーク",
        effect: "一度復活する。\n" +
                "その後破壊される",
        image: "images/Relic/バックアップHDMI17.png"
    },
    {
        name: "識別AI",
        rarity: "ユニーク",
        effect: "状態異常が付与されている敵に対して与える\n" +
                "ダメージが100%増加",
        image: "images/Relic/識別AI18.png"
    },
    {
        name: "違法スクリプト",
        rarity: "ボス",
        effect: "ボスを除いて2%の確率で99999ダメージを与える",
        image: "images/Relic/違法スクリプト21.png"
    },
    {
        name: "段ボール人形",
        rarity: "ボス",
        effect: "相手の防御を5%無視する。",
        image: "images/Relic/段ボール人形19.png"
    },
];

// ====== 自動生成処理 ======
const container = document.getElementById("relic-carousel");
relics.forEach(r => {
    const card = document.createElement("div");
    card.className = "relic-card";
    card.innerHTML = `
    <img src="${r.image}" alt="${r.name}" class="relic-image">
    <h4 class="relic-name">${r.name}</h4>
    <p class="relic-rarity rarity-${r.rarity.toLowerCase()}">${r.rarity}</p>
    <p class="relic-effect">${r.effect}</p>
  `;
    container.appendChild(card);
});
