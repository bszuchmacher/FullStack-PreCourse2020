footerDataDisplay =(languagesList, elementToAppend) => {
    const webfoot = document.createElement("div");
    webfoot.className = "webfoot";
    webfoot.innerText = `This Webpage has been coded with:`;
    for (let i = 0; i < languagesList.length; i++) {
      if (i === languagesList.length -1) {
        webfoot.innerText += `  ${languagesList[i]}.  `;
      }  else{
        webfoot.innerText += `  ${languagesList[i]},  `;
        }
      }
    document.getElementById(`${elementToAppend}`).appendChild(webfoot);
  };
  
  footerDataDisplay(["HTML ", "CSS ", " Javascript"],"webfoot")