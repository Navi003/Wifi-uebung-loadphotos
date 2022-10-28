const URL = `127.0.0.1`;

const linkBtn = document.querySelector(".btn-load");
const linkBtnRemove = document.querySelector(".btn-remove");
const imageContainer = document.querySelector(".container");
const selectEL = document.querySelector(".select");
function imageboxHTMLCreater(imageInfo) {
  const month = new Date(imageInfo.lastModified).getMonth() + 1;
  const day = new Date(imageInfo.lastModified).getDate();
  const year = new Date(imageInfo.lastModified).getFullYear();

  const imgboxHTML = `
<div class="image__box">
<div class="image__box__main">
  <img class="image" src="${imageInfo.pfad}" />
</div>
<div class="content">
  <h3 class="image-title">${imageInfo.fileName?.slice(0, 5)}</h3>
  <div class="info-container">
    <p>Modified :</p>
    <p class="date" ><span>${day} /</span><span>${month} /</span><span>${year}</span></p>
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
