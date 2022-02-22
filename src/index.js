module.exports = function check(str, bracketsConfig) {
    str.split(''); //разбиваем строку на массив, элементы которого разделенны пробелами
    let arr = [];  
        for ( i = 0; i<str.length; i++) {

            for(j=0;j<bracketsConfig.length;j++) {  

            if (str[i]==bracketsConfig[j][0]) { //если скобки открыты
              arr.push(str[i]);
              if (bracketsConfig[j][0]==bracketsConfig[j][1]){  //если скобки повторяются                
                  if (arr[arr.length - 2]==str[i]){ 
                      arr.pop();arr.pop();
                  }                   
              }
              
              
          }
          else if(str[i]==bracketsConfig[j][1]){ //если скобки закрыты 
              if ((arr[arr.length - 1])==bracketsConfig[j][0]){ //если найдены закрытые скобки
                  arr.pop();
              }else{
                  return false;
              } 
              }
              
          }
       
        }
        return arr!='' ? false : true;
}
