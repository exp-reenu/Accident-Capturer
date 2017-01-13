$(document).ready(function () {
    $("#idAccidentDate").datepicker({ maxDate: '0', dateFormat: 'dd-mm-yy' });

    //automatically convert time
    $("#idAccidentTime").change(function () {
        var timeString = $("#idAccidentTime").val();
        if (!timeString.includes(":")) {
            var pattern = /^(0[0-9]|1[0-9]|2[0-3])([0-5][0-9])$/;
        }
        else {
            var pattern = /^^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/;
        }
        var timeFormat = timeString.replace(pattern, '$1:$2');
        if (!timeFormat.includes(":")) {
            $("#idAccidentTime").val("");
        }
        else {
            $("#idAccidentTime").val(timeFormat);
        }
    });

    $("#saveButton").click(function () {
        sendData();
    });

})    

    //checking if the image is valid.
   /* var image64 = '';
    $("#idAccidentImage").change(function () {

        var flag = 0;
        var filename = $("#idAccidentImage").val();
        var extension = filename.replace(/^.*\./, '');
        if (extension == filename) {
            extension = '';
        }
        else {
            extension = extension.toLowerCase();
        }

        switch (extension) {
            case 'jpg':
            case 'jpeg':
            case 'png': flag = 1; break;
            default:
              //  flag = 0;
        }

       // if (flag == 0) {
         //   $("#validateImage").append($("<label/>", { class: 'validation-label' }).text("The image format should be .jpg or .png"))
       //}
        //else {
            var selectedFile = this.files[0];
            selectedFile.convertToBase64(function (base64) {
                image64 = base64;
            })
       // }

    });

File.prototype.convertToBase64 = function (callback) {
var reader = new FileReader();
reader.onload = function (e) {
callback(e.target.result)
};
reader.onerror = function (e) {
callback(null);
};
reader.readAsDataURL(this);
};*/

function sendData() {
    var idReferenceNumber = $("#idReferenceNumber").val();
    var idAccidentDate = $("#idAccidentDate").val();
    var idAccidentTime = $("#idAccidentTime").val();
    var idAccidentType = $("#idAccidentType").val();
    var idCityName = $("#idCityName").val();
    var idDistrictName = $("#idDistrictName").val();
    var idNumberOfVehicles = $("#idNumberOfVehicles").val();
    var idNumberOfCasualties = $("#idNumberOfCasualties").val();
    var idReportingOfficerName = $("#idReportingOfficerName").val();


    //defining JSON object
    var accidentDetailsJson = { "referenceNumber": idReferenceNumber, "accidentDate": idAccidentDate, "accidentTime": idAccidentTime, "accidentType": idAccidentType, "cityName": idCityName, "districtName": idDistrictName, "numberOfVehicles": idNumberOfVehicles, "numberOfCasualties": idNumberOfCasualties, "reportingOfficerName": idReportingOfficerName };
    //convert JSON to string for storing in localStorage
    var accidentDetailsString = JSON.stringify(accidentDetailsJson);
    //store in local storage
    localStorage.setItem("accidentDetailsStringLocal", accidentDetailsString);
    //redirect to accidentDetails page
    // window.location = "accidentcapturerreadonly.html";
}