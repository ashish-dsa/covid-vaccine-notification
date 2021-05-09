export const javascriptToInject = `(async () => {
  while (!document.getElementsByName("download-outline")) {
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  const downloadList = document.getElementsByName("download-outline");
  for (let i = 0; i < downloadList.length; i++) {
    const downloadElement = downloadList[i];
    try {
      if (downloadElement.nextElementSibling.innerHTML.toLowerCase().includes("appointment")) {
        downloadElement.onclick = function (event) {
          event.stopPropagation();
          console.log("Please open in Aarogya Sethu App");
        };
        downloadElement.nextElementSibling.onclick = function (event) {
          event.stopPropagation();
          console.log("Please open in Aarogya Sethu App");
        };
      }
    } catch (error) {}
  }
})();`;
