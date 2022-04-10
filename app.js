const slider = document.querySelectorAll(".slide");
let radioBtns = document.querySelectorAll("input[name='tari_col1']");
let result = document.getElementById("rezultat");

if (document.querySelector('input[name="tari_col1"]')) {
    document.querySelectorAll('input[name="tari_col1"]').forEach((elem) => {
      elem.addEventListener("change", function(event) {
        var item = event.target.dataset.value;
        document.querySelector("#img1").setAttribute('src', item)
        console.log(item);
        var borderRgb = event.target.dataset.rgb
        document.querySelector('.coloana1').style.border=borderRgb
      });
    });
  }

  if (document.querySelector('input[name="tari_col2"]')) {
    document.querySelectorAll('input[name="tari_col2"]').forEach((elem) => {
      elem.addEventListener("change", function(event) {
        var item = event.target.dataset.value;
        document.querySelector("#img2").setAttribute('src', item)
        console.log(item);
        var borderRgb = event.target.dataset.rgb
        document.querySelector('.coloana2').style.border=borderRgb
      });
    });
  }

  if (document.querySelector('input[name="tari_col3"]')) {
    document.querySelectorAll('input[name="tari_col3"]').forEach((elem) => {
      elem.addEventListener("change", function(event) {
        var item = event.target.dataset.value;
        document.querySelector("#img3").setAttribute('src', item)
        console.log(item);
        var borderRgb = event.target.dataset.rgb
        document.querySelector('.coloana3').style.border=borderRgb
      });
    });
  }

    document.querySelector("#img1").addEventListener('click', function (){
    document.querySelector("#rezultat").innerHTML=document.querySelector('input[name="tari_col1"]:checked').value
  })

    document.querySelector("#img2").addEventListener('click', function (){
    document.querySelector("#rezultat").innerHTML=document.querySelector('input[name="tari_col2"]:checked').value
  })

    document.querySelector("#img3").addEventListener('click', function (){
    document.querySelector("#rezultat").innerHTML=document.querySelector('input[name="tari_col3"]:checked').value
  })

  document.querySelector('input[name="tari_col1"]').dispatchEvent( new Event('change'))
  document.querySelector('input[name="tari_col2"]').dispatchEvent( new Event('change'))
  document.querySelector('input[name="tari_col3"]').dispatchEvent( new Event('change'))