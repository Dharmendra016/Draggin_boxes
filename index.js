const papers = document.querySelectorAll(".paper");

let highestIndex = 1;
class drag {
  check = false;
  mouseX = 0;
  mouseY = 0;
  preMouseX = 0;
  preMouseY = 0;

  currPaperX = 0;
  currPaperY = 0;
  velocityX = 0;
  velocityY = 0;
  //mouse down
  init(paper) {
    paper.addEventListener("mousedown", (e) => {
      this.check = true;
      paper.style.zIndex = highestIndex;
      highestIndex++;

      if (e.button === 0) {
        this.preMouseX = this.mouseX;
        this.preMouseY = this.mouseY;

        // console.log(preMouseX, preMouseY);
      }
    });

    //mouse move
    document.addEventListener("mousemove", (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;

      this.velocityX = this.mouseX - this.preMouseX;
      this.velocityY = this.mouseY - this.preMouseY;

      //   console.log(check);

      if (this.check === true) {
        this.currPaperX += this.velocityX;
        this.currPaperY += this.velocityY;
        this.preMouseX = this.mouseX;
        this.preMouseY = this.mouseY;
        paper.style.transform = `translateX(${this.currPaperX}px) translateY(${this.currPaperY}px)`;
      }
    });

    //mouse up
    window.addEventListener("mouseup", () => {
      this.check = false;
      //   console.log(check);
    });
  }
}

papers.forEach((paper) => {
  let p = new drag();
  p.init(paper);
});
