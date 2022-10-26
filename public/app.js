const URL = `127.0.0.1`;
const dataStatic = {
  content: [
    {
      name: "learning",
      pfad: "./images/Learning.avif",
      modified: "22/10/2022",
    },
    {
      name: "learning",
      pfad: "./images/Learning.avif",
      modified: "22/10/2022",
    },
    {
      name: "learning",
      pfad: "./images/Learning.avif",
      modified: "22/10/2022",
    },
    {
      name: "learning",
      pfad: "./images/Learning.avif",
      modified: "22/10/2022",
    },
    {
      name: "learning",
      pfad: "./images/Learning.avif",
      modified: "22/10/2022",
    },
  ],
};

const linkBtn = document.querySelector(".btn");
const imageContainer = document.querySelector(".container");

function imageboxHTMLCreater(imageInfo) {
  console.log(imageInfo);
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
    const response = await fetch(`/photos`);
    const data = await response.json();
    console.log(data);

    data.data.forEach((e) => {
      imageContainer.insertAdjacentHTML("beforeend", imageboxHTMLCreater(e));
    });
  } catch (error) {
    console.error(error);
  }
});
