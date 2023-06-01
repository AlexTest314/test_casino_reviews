export const initialData = (data) => {
  data.map((casinoData) => {
    const { name, isNew, logo, flag, rate, bonuses } = casinoData;

    document.querySelector("#main").insertAdjacentHTML(
      "beforeend",
      `
	  <div class='casino-card'>
		 <div class='casino-logo'>
			<image
			  src=${logo}
			  alt='casino-logo'></image>
		 </div>
		 <div class='casino-info'>
		${isNew === "true" ? "<div class='info-new'>New</div>" : "<div></div>"}
			
			<div class='info-name'>${name}</div>
			<div class='flag-rating-info'>
			  <div class='flag'>
				 <image
					src=${flag}
					alt='casino-flag'></image>
			  </div>
			  <div class='rate'>${rate}</div>
			  <div class='stars'>
				 <image
					src='./icons/star_rounded.svg'
					alt='star-icon'></image>
				 <image
					src='./icons/star_rounded.svg'
					alt='star-icon'></image>
				 <image
					src='./icons/star_rounded.svg'
					alt='star-icon'></image>
				 <image
					src='./icons/star_rounded.svg'
					alt='star-icon'></image>
				 <image
					src='./icons/star_rounded_empty.svg'
					alt='star-icon'></image>
			  </div>
			</div>
		 </div>
		 <div class='casino-bonus'>
		 
			<div class='bonus-spins popup'>
			  ${bonuses[0]}
			  <div class='popup-content'>
				 <h3 class='popup-bonus-header'>20 Free Spins at 21 Dukes Casino</h3>
				 <div class='popup-welcome'>
					<p class='welcome-text' id='copyLink'>WELCOME</p>
				 </div>
				 <div class='games-allowed'>
					<div class='games-label'>Games allowed:</div>
					<div class='games'>
					  <div class='game'>Slots, </div>
					  <div class='game'>Keno, </div>
					  <div class='game'>Scratch, </div>
					  <div class='game'>Cards, </div>
					  <div class='game'>Bingo</div>
					</div>
				 </div>
				 <div class='cash-out'>
					<div class='cash-out-label'>Max cash out:</div>
					<div class='cash-value'>$100</div>
				 </div>
				 <div class='min-deposit'>
					<div class='min-deposit-label'>Min. deposit:</div>
					<div class='min-deposit-value'>FREE</div>
				 </div>
			  </div>
			</div>
		 ${bonuses[1] ? `<div class='bonus-spins'>${bonuses[1]}</div>` : "<div></div>"}
			
		 </div>
		 <div class='casino-button'>
			<button><a href="#">VISIT</a></button>
		 </div>
	  </div>`
    );
  });
};
