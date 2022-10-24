const URL = `127.0.0.1`;
const data = {
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
  const imgboxHTML = `
<div class="image__box">
<div class="image__box__main">
  <img class="image" src="${imageInfo.pfad}" />
</div>
<div class="content">
  <h3 class="image-title">${imageInfo.name}</h3>
  <div class="info-container">
    <p>Modified :</p>
    <p>${imageInfo.modified}</p>
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
  } catch (error) {
    console.error(error);
  }

  data.content.forEach((e) => {
    imageContainer.insertAdjacentHTML("beforeend", imageboxHTMLCreater(e));
  });
});
