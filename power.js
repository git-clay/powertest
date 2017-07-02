//powers
var powerObj = {}

	function readPowerFactory(distance, searchRadius, power){
	  // distance/searchRadius = % of user defined max
	  var percent = distance / searchRadius 
	  percent = Math.sqrt(percent )
	  //get snapObj.power
	  var powerSqr = Math.sqrt(power) //hardcoded for now
	  var distPwr = power / percent  //distPwr favors close locations
console.log(percent)
	  // var followPwr = 
		return distPwr 
	}





	var submitFunc = function (snapid){
			var distance = document.getElementById(`distance${snapid}`).value;
			var radius = document.getElementById(`radius`).value;
			var power = document.getElementById(`power${snapid}`).value;

			var powerRes = readPowerFactory(distance, radius, power)

			var result = document.getElementById(`result${snapid}`);
			result.innerHTML = powerRes;
			
			var snapbox = document.getElementById(`snap${snapid}box`)


			snapbox.style.bottom = `${powerRes*2}px`
	}


	var likeFunc = function (snapid){
	}

	var dislikeFunc = function (snapid){
	}

submitFunc(1)
submitFunc(2)
submitFunc(3)
submitFunc(4)
submitFunc(5)
submitFunc(6)
submitFunc(7)
submitFunc(8)

