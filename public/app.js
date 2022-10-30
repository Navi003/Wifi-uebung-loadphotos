const linkBtn = document.querySelector(".btn-load");
const linkBtnRemove = document.querySelector(".btn-remove");
const imageContainer = document.querySelector(".container");
const selectEL = document.querySelector(".select");

const BytesConverter = function (bytes, decimals = 2) {
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

const dateFormater = function (date) {
  const month = new Date(date).getMonth() + 1;
  const day = new Date(date).getDate();
  const year = new Date(date).getFullYear();

  return ` <p class="date" ><span>${day} /</span><span>${month} /</span><span>${year}</span></p>`;
};

function imageboxHTMLCreater(imageInfo) {
  const imgboxHTML = `
<div class="image__box">
<div class="image__box__main">
  <img class="image" src="${imageInfo.pfad}" />
</div>
<div class="content">
  <h3 class="image-title">${imageInfo.fileName?.slice(0, 5)}</h3>
  <div class="info-container">
    <p>Modified :</p>
    ${dateFormater(imageInfo.lastModified)}
   
  </div>
  <div class="size">
  <span>Size:</span><span>${BytesConverter(imageInfo.filesize)}</span>
  </div>
</div>
</div>

`;

  return imgboxHTML;
}

linkBtn.addEventListener("click", async () => {
  try {
    console.log(selectEL.value);
    const response = await fetch(`/images/?folder=${selectEL.value}`);
    const data = await response.json();

    imageContainer.innerHTML = "";
    data.data.forEach((e) => {
      imageContainer.insertAdjacentHTML("beforeend", imageboxHTMLCreater(e));
    });
  } catch (error) {
    console.error(error);
  }
});

linkBtnRemove.addEventListener("click", function (e) {
  imageContainer.innerHTML = "";
});
