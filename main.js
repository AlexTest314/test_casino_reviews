import { getData } from "./getData";
import { updateData } from "./updateData";

let dataCount = 0;
let actualDataCount = 0;

const dataLoad = async () => {
  const data = await getData(4);
  dataCount = data.length;
  actualDataCount = data.length;
  updateData(data);
  if (dataCount >= actualDataCount) {
    const main = document.getElementById("main");
    main.insertAdjacentHTML("beforeend", "<div id='load' class='load-button'><p>Load More Casinos (+5)</p></div>");
  }

  const buttonLoad = document.getElementById("load");
  buttonLoad.addEventListener("click", dataUpload);

  const copiedCode = () => {
    const copyText = document.getElementById("myInput");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    document.getElementById("copyPop").hidden = false;
    setTimeout(() => (document.getElementById("copyPop").hidden = true), 3000);
  };

  const copyCode = document.getElementById("copyCode");
  copyCode.addEventListener("click", copiedCode);
};

window.addEventListener("DOMContentLoaded", dataLoad);

const dataUpload = async () => {
  dataCount += 5;
  const data = await getData(dataCount);
  actualDataCount = data.length;
  updateData(data, true);
};
