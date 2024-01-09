class Component_Header extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <div class="header">
            <h1 class="title">排球訓練輔助系統</h1>
            <ul class="nav">
              <li><a href="/index.html">首頁</a></li>
              <li class="concept">
                <a href="../Page/FrontPage/concept.html">觀念</a>
                <ul class="concept-list">
                  <li>球員位置</li>
                  <li>場上站位</li>
                  <li>球種</li>
                  <li>思考</li>
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
                <a href="../Page/FrontPage/training.html">體能</a>
                <ul class="training-list">
                  <li>胸</li>
                  <li>臀</li>
                  <li>腿</li>
                  <li>肩</li>
                  <li>背</li>
                </ul>
              </li>
            </ul>
          </div>
        
        `;
    }
}
customElements.define('component-header', Component_Header);
