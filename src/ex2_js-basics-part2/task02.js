function chooseElements() {
    var arr=[];
       let items = prompt("Перечислите через запятую элементы", "");
          if ((typeof(items)) === "string" && (typeof(items)) != null && items != ""){
                    console.log('ввод верный');
                    arr = items.split(",");
              
                } else {
            alert ("Введите корректные данные");
              i--;
              }
            arr.forEach( function(item, i, arr)  {
            console.log(++i + ': ' + item);
            
            }); 
            console.log("Number of elements: " + arr.length); 
    }
  
  chooseElements();