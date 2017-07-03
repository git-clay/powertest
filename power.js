//powers
var powerObj = {}
var distWt = 70
var powerWt = 7
var displayDist = document.getElementById('displayDist')
var displayPow = document.getElementById('displayPow')
			displayDist.innerHTML=distWt
			displayPow.innerHTML=powerWt


	function readPowerFactory(distance, searchRadius, power){
	  // distance/searchRadius = % of user defined max
	  // power = Math.abs(Math.tan(power) * powerWt)
	  // distance = Math.abs(-distance/4) *distWt
	  // distance = Math.abs(Math.LN2 * (distance)  * distWt)
// distance = Math.pow(distance,2)
	  // var percent = distance / searchRadius *100
	  // percent = Math.sin(percent )
	  distance = distance * distWt
	  distance = Math.exp(distance/100)
	  power = power* powerWt
	  power = Math.exp(power/200)
	  // power = power/distance
// console.log("cos:",Math.exp(power/100))
// console.log("sin",Math.exp(power)/10)
// console.log("tan",Math.exp(power)/10)
	  // var powerSqr = Math.pow(power,2) 

	  var distPwr = power/ distance *11 //distPwr favors close locations
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
		var snapbox = document.getElementById(`power${snapid}`).value
		var powerVal = parseFloat(snapbox) + .2
		console.log(powerVal)

		document.getElementById(`power${snapid}`).value = powerVal
		submitFunc(snapid)
	}

	var dislikeFunc = function (snapid){
		var snapbox = document.getElementById(`power${snapid}`).value		
		var powerVal = parseFloat(snapbox) - .3
		document.getElementById(`power${snapid}`).value = powerVal
		submitFunc(snapid)		
	}

	var addWeight = function (what){
		if(what == 'distance'){
			distWt +=1
			displayDist.innerHTML=distWt
		} else if(what == 'power'){
			powerWt +=.2
			displayPow.innerHTML=powerWt

		}
		callAll()
	}

	var subtractWeight = function (what){
		if(what == 'distance'){
			distWt -=1
			displayDist.innerHTML=distWt

		} else if(what == 'power'){
			powerWt -=.2
			displayPow.innerHTML=powerWt

		}
		callAll()
	}
function callAll(){
	submitFunc(1)
	submitFunc(2)
	submitFunc(3)
	submitFunc(4)
	submitFunc(5)
	submitFunc(6)
	submitFunc(7)
	submitFunc(8)
}
callAll()