window.onload = function() {
	var oDiv = document.getElementById("nav");
	var oUl = oDiv.getElementsByTagName("ul")[0];
	var aLi = oUl.getElementsByTagName("li");
	var aImg = oUl.getElementsByTagName("img");

	var oBtn = document.getElementById('btn');
	var aA = oBtn.getElementsByTagName('a');
	var imgWidth = 1920;
	var iNow = 0;
	var flag = true;
	var timer;

	toResize();
	toRun();

	oUl.style.width = aImg.length * imgWidth + "px";

	function toResize() {
		var viewWidth = document.documentElement.clientWidth || document.body.clientWidth;
		
		if(viewWidth > 1000) {
			for(var i = 0; i < aImg.length; i++) {
				aImg[i].style.left = -(imgWidth - viewWidth) / 2 + "px";
			}
		}
	}
	window.onresize = function() {
		toResize();
	}

	function toRun() {
		clearInterval(timer);
		timer = setInterval(function() {
			if(flag) {
				if(iNow == aLi.length) { //5
					iNow = 1;
					oUl.style.left = 0;

				}
				for(var i = 0; i < aA.length; i++) {
					aA[i].className = "";
				}

				if(iNow == aLi.length - 1) { //4
					aA[0].className = "active";

				} else {
					aA[iNow].className = "active";
				}

				startMove(oUl, {
					left: -iNow * imgWidth
				});
				iNow++;
			}

		}, 3000);

	}

	for(var i = 0; i < aA.length; i++) {
		aA[i].index = i;
		aA[i].onclick = function() {
			for(var j = 0; j < aA.length; j++) {
				aA[j].className = "";
			}
			this.className = "active";
			iNow = this.index;
			console.log(iNow + "--" + this.index);

			startMove(oUl, {
				left: -this.index * imgWidth
			});

		}
	}

//	oDiv.onmouseover = function() {
//		flag = false;
//	}
//
//	oDiv.onmouseout = function() {
//		flag = true;
//	}

}