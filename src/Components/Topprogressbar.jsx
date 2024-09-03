document.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;
  const docHeight = document.body.clientHeight;
  const winHeight = window.innerHeight;
  const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
  document.getElementById("progress-bar").style.width = scrollPercent + "%";
});

function Topprogressbar(){
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-1 bg-[#222] z-10">
                <div id="progress-bar" className="h-full bg-[#5027e6] w-[1px]"></div>
            </div>
        </>
    )
}

export default Topprogressbar