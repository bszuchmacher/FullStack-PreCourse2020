footerDataDisplay =(languagesList, elementAppended) => {
    const footer = document.createElement("div");
    footer.className = "footerclass";
    footer.innerText = `This Webpage has been created with:`;
    for (let i = 0; i < languagesList.length; i++) {
      if (i === languagesList.length -1) {
        footer.innerText += ` and ${languagesList[i]}.  `;
      }  else{
        footer.innerText += ` ${languagesList[i]},  `;
        }
      }
    document.getElementById(`${elementAppended}`).appendChild(footer);
  };

  footerDataDisplay(["HTML", "CSS", "Javascript"],"webfoot")
