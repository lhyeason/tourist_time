function getByClass(oParent,sClass)
		{
			var aEle=oParent.getElementsByTagName('*');
			var aResult=[];
			for(var i=0;i<aEle.length;i++)
				{
					if(aEle[i].className==sClass)
					{
						aResult.push(aEle[i]);
					}
				}	
				return aResult;
		}	
window.onload=function()
	{
		var oDiv=document.getElementById('flow-wrapper');
		var oBtnPrev=getByClass(oDiv,'prev')[0];
		var oBtnNext=getByClass(oDiv,'next')[0];
		var oMarkLeft=getByClass(oDiv,'mark_left')[0];
		var oMarkRight=getByClass(oDiv,'mark_right')[0];


		/*var oLike=getByClass(oDiv,'praise_heart')[0];	*/	
		oBtnPrev.onmouseover=oMarkLeft.onmouseover=function(){
			startMove(oBtnPrev,'opacity',100);
		}
		oBtnPrev.onmouseout=oMarkLeft.onmouseout=function(){
			startMove(oBtnPrev,'opacity',0);
		}
		oBtnNext.onmouseover=oMarkRight.onmouseover=function(){
			startMove(oBtnNext,'opacity',100);
		}
		oBtnNext.onmouseout=oMarkRight.onmouseout=function(){
			startMove(oBtnNext,'opacity',0);
		}
}