const b = document.querySelector(".no_btn");
b.addEventListener("mouseover", moveHover);

function moveHover(){
  const i=Math.floor(Math.random()*500)+1 ;
  const j=Math.floor(Math.random()*500)+1 ;

  b.style.left=i+"px"
  b.style.top=j+"px"
};
