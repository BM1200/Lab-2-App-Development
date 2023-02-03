function buildName1(firstName: string) {
    
    return firstName.length;
  }

  function buildName2(lastName: string) {
    
    

    var length = lastName.split(" ").join("").length;

    
    return length;

    
  }

  function myFunction(value: string, space?: boolean):number
  {
    if (space == true)
    
    {
        return value.length;
    }
    else
    {
        var length = value.split(" ").join("").length;

    
        return length; 
    }
     

  }
  var result1 = buildName2("Mc Shane");
  console.log(result1);

 