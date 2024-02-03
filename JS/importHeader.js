class Component_Header extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <link rel="stylesheet" href="/css/header.css">
            <div class="header">
            <h1 class="title">排球訓練輔助系統</h1>
            <ul class="nav">
              <li><a href="/index.html">首頁</a></li>
              <li class="concept">
                <a href="/Page/FrontPage/concept.html">觀念</a>
                <ul class="concept-list">
                  <li><a href="/Page/FrontPage/players.html">球員位置</a></li>
                  <li><a href="/Page/FrontPage/rotation.html">接發球站位</a></li>
                  <li><a href="/Page/FrontPage/defense.html">防守站位</a></li>
                  <li><a href="/Page/FrontPage/tactics.html">戰術球種</a></li>
                  <li><a href="/Page/FrontPage/think.html">球員思考</a></li>
                </ul>
              </li>
              <li class="skill">
                <a href="../Page/FrontPage/skill.html">技術</a>
                <ul class="skill-list">
                  <li>主攻(Wing Spiker)</li>
                  <li>攔中(Middle Blocker)</li>
                  <li>舉球(Setter)</li>
                  <li>舉對/副位(Oppsite)</li>
                  <li>自由(Libero)</li>
                </ul>
              </li>
              <li class="training">
                <a href="/Page/FrontPage/fitness.html">體能</a>
                <ul class="training-list">
                  <li><a href="/Page/FrontPage/chest.html">胸</a></li>
                  <li>臀</li>
                  <li><a href="/Page/FrontPage/leg.html">腿</a></li>
                  <li><a href="/Page/FrontPage/shoulder.html">肩</a></li>
                  <li><a href="/Page/FrontPage/back.html">背</a></li>
                </ul>
              </li>
            </ul>
          </div>
        
        `;
    }
}
customElements.define('component-header', Component_Header);

