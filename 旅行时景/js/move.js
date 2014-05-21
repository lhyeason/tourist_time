function getStyle(obj,attr)
		{
			if(obj.currentStyle)
			{
				return obj.currentStyle[attr];
			}
			else{
				return getComputedStyle(obj,false)[attr];
			}
		}
function startMove(obj,attr,iTarget)
		{		
			clearInterval(obj.timer);		
			obj.timer=setInterval(function(){
				var iCurr=0;
				if(attr=='opacity'){
					iCurr=parseInt(parseFloat(getStyle(obj,attr))*100);
				}
				else{
					iCurr=parseInt(getStyle(obj,attr));
				}
				
				var iSpeed=(iTarget-iCurr)/8;
				iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
				if(iCurr==iTarget)	
				{
					clearInterval(obj.timer);	//到达终点
				}
				else{
					if(attr=='opacity'){
						obj.style.filter='alpha(opacity:'+(iCurr+iSpeed)+')';
						obj.style[attr]=(iCurr+iSpeed)/100;
					}
					else{ 
						obj.style[attr]=iCurr+iSpeed+"px";
					}
				}
			},30);
	}	