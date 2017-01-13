$("document").ready(function () {
    var accidentDetailsString = localStorage.getItem("accidentDetailsStringLocal");
    var accidentDetailsJson  = JSON.parse(accidentDetailsString);
    $("#referenceNumberId").append(" "+accidentDetailsJson.referenceNumber);
    $("#accidentDateId").append(" "+accidentDetailsJson.accidentDate);
    $("#accidentTimeId").append(" "+accidentDetailsJson.accidentTime);
    $("#accidentTypeId").append(" "+accidentDetailsJson.accidentType);
    $("#cityNameId").append(" "+accidentDetailsJson.cityName);
    $("#districtNameId").append(" "+accidentDetailsJson.districtName);
    $("#numberOfVehiclesId").append(" "+accidentDetailsJson.numberOfVehicles);
    $("#numberOfCasualtiesId").append(" "+accidentDetailsJson.numberOfCasualties);
    $("#reportingOfficerNameId").append(" "+accidentDetailsJson.reportingOfficerName);

    $("#editButton").click(function(){
        goBack();
    });
});

function goBack(){
    window.history.back();
}