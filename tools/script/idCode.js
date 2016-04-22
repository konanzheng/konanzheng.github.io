//idCode.js 根据地区码 ，出生日期，性别随机产生身份证号
function idCardGenerate(location,birthday,sex){
	var idcardnum=location+birthday+getRandomSexCode(sex);
	var numArray=idcardnum.split('');
	var weight=new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2);
	var sum=0;
	for(var i=0;i<numArray.length;i++){
		sum+=weight[i]*numArray[i];
	}
	var mod=sum%11;
	var checkCodeArray=new Array('1','0','X','9','8','7','6','5','4','3','2');
	var checkCode=checkCodeArray[mod];
	return idcardnum+''+checkCode;
}
//获取随机性别码 1 男，0 女
function getRandomSexCode(sex){
	var bw=Math.round(9*Math.random());
	var sw=Math.round(9*Math.random());
	var gw=sex==1?(Math.round(4*Math.random())*2+1):(Math.round(4*Math.random())*2);
	return bw+''+sw+''+gw;
}
function checkIdCard18(idcardNum){
	if(idcardNum&&idcardNum.length==18){
		var numArray=idcardNum.split('');
		var weight=new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2);
		var sum=0;
		for(var i=0;i<17;i++){
			sum+=weight[i]*numArray[i];
		}
		var mod=sum%11;
		var checkCodeArray=new Array('1','0','X','9','8','7','6','5','4','3','2');
		var checkCode=checkCodeArray[mod];
		return numArray[17]==checkCode;
	}else{
		return false;	
	}
		
	
}