console.log("Starting Pre Class");

var main = function (input) {
  var myOutputValue = "Hello World";
  return myOutputValue;
};

var greetingMain = function (input) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var myOutputValue = "hello " + input + ", you are doing awesome!";
  return myOutputValue;
};

var metricMain = function (input) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.
  var distanceInKm = input;
  var distanceInMiles = distanceInKm * 0.62;
  var myOutputValue = `Hi! ${input}km is equal to ${distanceInMiles}miles.`;
  return myOutputValue;
};

var functionsExampleMain = function (input) {
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
  var myOutputValue = "Example 2";
  return myOutputValue;
};

//Additional speed required = delayed time (in mins) converted to kph
// formula = input / 60

//New time required by T2 to reach tokyo = 2hrs - delayed time

//New speed required by T2 to reach tokyo = 400km / T2 new time

// Distance to Tokyo = 200kph * 2 = 400km (speed*time=distance)

//Input will be delay in mins

//distance to tokyo is 400km

var trainSpeedMain = function (input) {
  var train1Speed = 200;
  var timeToTokyo = 2;
  var distanceToTokyo = train1Speed * timeToTokyo;

  var train2Time = 120 - input;
  var train2TimeInHrs = train2Time / 60;
  var newTrain2SpeedInKm = 400 / train2TimeInHrs;

  var myOutputValue = `Given a ${input} mins delay, train 2 will need to travel at ${newTrain2SpeedInKm.toFixed(
    2
  )} km to catch up with Train 1`;
  return myOutputValue;
};

var clockMain = function (input) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.
  var myOutputValue = "Example 4";
  return myOutputValue;
};
