let generate = document.getElementById("Generate");
generate.addEventListener("click", (e) => {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let date = document.getElementById("date").value;
  let length = document.getElementById("length").value;
  let course = document.getElementById("course").value;
  e.preventDefault();

  let form = document.getElementById("form");
  let container = document.querySelector(".container");

  form.style.display = "none";
  container.style.backgroundColor = "white";

  //Random Digits
  let rand = Math.floor(Math.random() * 9) + 1;
  let rand2 = Math.round(Math.random() * 9);
  let rand3 = Math.floor(Math.random() * 9) + 1;
  let rand4 = Math.round(Math.random() * 9);

  let certificateContainer = document.getElementById("certificate");
  certificateContainer.style.display = "block";
  certificateContainer.innerHTML = `
    <div class="outer">
      <div class="light-br">
        <div class="dark-br">
          <div class="main-content">
            <div class="left-side">
              <img src="img/LinkedIn left-2.png" alt="">
            </div>
            <div class="right-content">
              <div class="logo">
                <img id="logo" src="img/Learning.png" alt="">
              </div>
              <div class="congrats">
                <h2>Certificate of Completion</h2>
                <h3>Congratulations, ${fname} ${lname}</h3>
              </div>
              <div class="course-name">
                <h1>${course}</h1>
                <div class="completion">
                  <h3>Course completed on ${date}</h3>
                  <h3 id="clength">•&nbsp;&nbsp;${length}</h3>
                </div>
              </div>
              <div class="para">
                <h2>By continuing to learn, you have expanded your perspective, sharpened your skills, and made yourself even more in demand.
                </h2>
              </div>
              <div class="authority">
                <div class="part-1">
                  <img id="sign" src="img/zone.png" alt="">
                  <h3>VP, Learning Content at Easy learn</h3>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="vl"></div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="part-2">
                  <h3>Easy learn</h3>
                  <h3>Sector 17-A, Chandigarh, India</h3>
                </div>
              </div>
              <div class="certificate-id">Certificate Id: AU${rand4}IZ${rand2}a${rand2}rPeUmO_IE${rand4}R${rand4}0L${rand4}ac${rand2}sN</div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

  document.getElementById("download").style.display = "block";
});


let download = document.getElementById("download");
download.addEventListener("click", () => {
  var opt = {
    margin: 1,
    filename: "LinkedIn-certificate.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "px", format: "a2", orientation: "landscape" },
  };

  let certificateContainer = document.getElementById("certificate");
  html2pdf().set(opt).from(certificateContainer).outputPdf('datauristring').then(function(pdfAsString){
    const pdf = atob(pdfAsString.split('base64,')[1]);
    const blob = new Blob([pdf], {type: 'application/pdf'});
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'LinkedIn-certificate.pdf';
    link.click();
  });
});
