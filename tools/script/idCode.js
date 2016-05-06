//idCode.js 根据地区码 ，出生日期，性别随机产生身份证号
function idCardGenerate(location,birthday,sex){
	var idcardnum=location+birthday+getRandomSexCode(sex);
	var numArray=idcardnum.split('');
	var weight=new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2);
	var sum=0;
	for(var i=0;i