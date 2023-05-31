import "./style.css";

document.querySelector("#app").innerHTML = `
  
    <header>
    <div class='head-line'>
    </div>
    <div class='headers'>
    <h1>
    Online Casino Reviews
    </h1>
    
    <div class='bottom-header'>
    <h3>
    All Casinos
    </h3>
    <p class='head-info'>3,000 Casinos</p>
    </div>
    </div>
    
    </header>
    <main>
    <div class='casino-card'>
    <div class='casino-logo'>
    <image src='./logos/sports_interaction_casino.png' alt='casino-logo'></image>
    </div>
      <div class='casino-info'>
        <div class='info-new'>NEW</div>
        <div class='info-name'>Sports Interaction Casino Review</div>
        <div class='flag-rating-info'>
          <div class='flag'>
          <image src='./icons/flag-usa.svg' alt='casino-flag'></image>
          </div>
          <div class='rate'>
          4.4
          </div>
          <div class='stars'>
          <image src='./icons/star_rounded.svg' alt='casino-flag'></image>
          <image src='./icons/star_rounded.svg' alt='casino-flag'></image>
          <image src='./icons/star_rounded.svg' alt='casino-flag'></image>
          <image src='./icons/star_rounded.svg' alt='casino-flag'></image>
          <image src='./icons/star_rounded_empty.svg' alt='casino-flag'></image>
          </div>
        </div>
      </div>
      <div class='casino-bonus'>
        <div class='bonus-spins'>20 Free spins</div>
        <div class='bonus-deposit'>200% First deposit bonus + 250 FS</div>
      </div>
    <div class='casino-button'>
    <button>VISIT</button>
    </div>
    </div>
    </main>
    
  
`;
