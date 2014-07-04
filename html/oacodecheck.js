function oacode_check(OAcode){
  var code_str=OAcode.toString();
	var code_val_temp;
	if(code_str.length!=9){
		return false;
	}else{
		var weights_array=new Array(3,7,9,10,5,8,4,2);
		var sum_mod=0;
		code_Array=code_str.split("");
		
		for(var i=0;i<8;i++){
			code_val_temp=get_code_val(code_Array[i]);
			if(code_val_temp==0){
				return false;
			}else{
				sum_mod+=code_val_temp*weights_array[i];
			}
		}
		var checksum=11-(sum_mod%11);
		if(checksum==10){
			 return code_Array[8]=="X";
		}else if(checksum==11){
			 code_Array[8]=="0";
		}else{
			return code_Array[8]==checksum;
		}
 
	}
 
}
function get_code_val(code){
	var stringcode="1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
	var code_val_array=stringcode.split(",");
	//2分查找
	var low=0;
	var high=34;
	var middle;
	while(low<=high){
		middle=parseInt((low + high) / 2);
		if(code>code_val_array[middle]){
			low=middle+1;
		}else{
			if(code<code_val_array[middle]){
			high=middle-1;
			}else{
			return middle+1;
			}
		}
	}
	return 0;
}
