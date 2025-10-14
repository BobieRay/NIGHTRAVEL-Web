document.addEventListener("DOMContentLoaded", () => {
    const developers = [
        {name: "Shoki Ito", role: "Web開発エンジニア<br>テストプレイ"},
        {name: "Souma Ueno", role: "クライアント開発"},
        {name: "Rui Enomoto", role: "クライアント開発"},
        {name: "Kyosuke Kawaguchi", role: "キャラクター・UI・ビジュアル・グラフィックデザイナー <br>キャラクターアニメーション"},
        {name: "Kosuke Kida", role: "サーバー開発・設計"},
        {name: "Yuuto Takamiya", role: "キャラクターデザイナー<br>Web開発エンジニア"},
        {name: "Kenta Nakamoto", role: "クライアント開発"},
        {name: "Kouta Nishiura", role: "プランナー<br>ギミック・ステージ設計<br>リアルタイムAPI開発"},
        {name: "Yuki Miura", role: "ギミック設計"},
        {name: "Keigo Huzisaki", role: "ボーンアニメーション"},
        {name: "Ayuto Miyake", role: "ボーンアニメーション<br> テストプレイ"}
    ];


    const container = document.getElementById("developer-container");

    developers.forEach(dev => {
        const div = document.createElement("div");
        div.className = "developer-item";
        div.innerHTML = `
    <span class="developer-name">${dev.name}</span><br>
    <span class="developer-role">${dev.role}</span>
  `;
        container.appendChild(div);
    });
});