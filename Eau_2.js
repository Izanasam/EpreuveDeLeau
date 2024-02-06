  for (let i = 0; i <= 99; i++) {
      for (let j = i; j <= 99; j++) {
          if ( j < 10 && i >= 10) {
        console.log( i + " " + "0" + j);
      } else if (i < 10 && j >= 10) {
          console.log("0" + i +" "+ j);
    
      } else if (j < 10  && i < 10) {
          console.log("0"+ i + " " + "0"+ j);
        } else {
          console.log( i + " " + j);
        }
    }
    
  }