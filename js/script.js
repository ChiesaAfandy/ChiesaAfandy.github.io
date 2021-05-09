
$(document).ready(function() {
    $('.filterBrand').select2(
        {
            placeholder: "Select Brand"
        }
    );
    
});

$(document).ready(function() {
    $('.filterModels').select2(
        {
            placeholder: "Select Models"
        }
    );
    
});

$(document).ready(function() {
    $('.filterYear').select2(
        {
            placeholder: "Select Year"
        }
    );
    
});

function hideClass(){
    document.getElementById("buttonHide").className = "d-none";
  }

  function showClass(){
    document.getElementById("buttonShow").className = "col-12 .bg-white pt-5 d-block";
  }