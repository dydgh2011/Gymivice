const character = document.getElementById("character");


var HRMrawsensor = tizen.sensorservice.getDefaultSensor("HRM_RAW");
var status = "resting"


function onGetSuccessCB(sensorData)
{
  console.log("HRMRaw light intensity: " + sensorData.lightIntensity);
}

function onerrorCB(error)
{
  console.log("Error occurred");
}

function onsuccessCB()
{
  console.log("HRMRaw sensor start");
  HRMrawsensor.getHRMRawSensorData(onGetSuccessCB, onerrorCB);
}

function animation(status){
	switch (status){
	case "resting":
		resting();
		break;
	case "exercising":
		exercising();
		break;
	}
}

function resting(){
	
}

function exercising(){
	
}

function status_checker(){
	
}



status = status_checker();
HRMrawsensor.start(onsuccessCB);
