// const childname = document.querySelectorAll('childname')
// const child = ['ADAM', 'SARAH', 'JACK', 'SAM']

// $(document).ready(function(){
//     $("button").click(function(event){
//       $("span").text(event.timeStamp);
//     });
//   });
  function captureTime(){
    // Get current time
    var currentTime = new Date();
    //Update the text of the button element to show the capture time
    document.getElementById("time-button").innerHTML = "" + currentTime;
    //disable the button
    document.getElementById("time-button").disabled = true;
  }

  function captureTimeout(){
    let currentTime = new Date();

    document.getElementById("timeout-button").innerHTML = "" + currentTime;
    //disable the button
    document.getElementById("timeout-button").disabled = true;
  }