//Question # 1 :
function myFunction1() {
  alert("Hello! Welcome to my page");
}



//Question # 2 :
function myFunction2() {
  alert("Error! Please enter a valid password");
}



//Question # 3 :

function myFunction3() {
  alert("Welcome to JS Land... \n Happy Coding");

}

//Question # 4 :
function myFunction4() {
  alert("Welcome to JS Land... ");
  alert("Happy Coding");


}

//Question # 5 :
//I have also done this code in web browser's console

function myFunction5() {
  var msg = "Hello... I can run JS through my web browser's console";
  alert(msg);

}
//CHAPTER # 02

//Question # 1 :

function c2_q1() {
  var username = prompt("Enter your name :", );
  alert("Hello! " + username);
  

}

//Question # 2 :

function c2_q2() {
  var myName = "Hafiza Bushra";
  alert("Hello! " + myName);
  

}

//Question # 3 :

function c2_q3() {
  var message = "Hello World!";
  alert(message);
  

}

//Question # 4 :

function c2_q4() {
 var std_name = prompt("Enter your name :", ) ,
 std_age = prompt("Enter your age :", ) ,
 std_course = prompt("Enter your course :", ) ;
 alert("Your Bio Data is :  \n Name: " +std_name + "\n Age: " +std_age + "\n Course: " +std_course);



}


//Question # 5 :

function c2_q5() {
  var str = "PIZZA \n PIZZ \n PIZ \n PI \n P";
     alert(str);
    
     }
  



//Question # 6 :

function c2_q6() {
  var email = "hafizabushra997@gmail.com";
  alert("My email address is " + email);
  

}

//Question # 7 :

function c2_q7() {
  var book = "A smarter way to learn JavaScript";
  alert("I'm trying to learn from the Book " + book);
  

}
//Question # 8 :

function c2_q8() {
  
  document.write("Yah! I can write Html content through Javascript");
  

}
//Question # 9 :

function c2_q9() {
  
  var str = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
  alert(str);
  
  

}



//CHAPTER # 03

//Question # 1 :

function c3_q1() {
  var age=22;
  alert("I'm " + age + " years old");
  

}

//Question # 2 :

function c3_q2() {
  var no_of_visits = 14;
  alert("You have visited this site " + no_of_visits + " times");
  

}

//Question # 3 :

function c3_q3() {
  var birth_year = 1999;
  document.write("My Birth year is " + birth_year + " \n Data type of my declared variable is number");
  
  

}

//Question # 4 :

function c3_q4() {
 var visitors_name = prompt("Enter your name :", ) ,
 product_title = prompt("Enter the product title :", ) ,
 quantity = prompt("How much quantity of this product you want :", ) ;
 document.write(visitors_name +" ordered " + quantity + " " + product_title + " on XYZ Clothing Store.");



}

//CHAPTER # 04

// Question # 1 :

// function c4_q1() {
//   var name , age , city ;
  
//   }

// Question # 2 :

// function c4_q2() {
//   Legal variable names

//   var name, age1 , city , my_name , varClass;

//   Illegal variable names

//   var 1name, age.1 , my city , "myname" , alert;
  

// }

//Question # 3 :

function c4_q3() {
  document.write("<h1>“Rules for naming JS variables”</h1>" );
  document.write("<br/> Variable names can only contain numbers, $ and _. For example $my_1stVariable" ); 
  document.write("<br/> Variable names are case sensitive" ); 
  document.write("<br/> Variable names should not be JS keywords" ); 
  
}

//CHAPTER # 05

//Question # 1 :

function c5_q1() {

  var no1 = +prompt("Enter 1st no :", ),
 no2 = +prompt("Enter 2nd no :", );
 sum = no1 + no2 ;
 document.write("Sum of " + no1 + " and " + no2 + " is " + sum);
  
  
  

}

//Question # 2 :


function c5_q2_sub() {
  var no1 = +prompt("Enter 1st no :", ),
 no2 = +prompt("Enter 2nd no :", );
 sub = no1 - no2 ;
 document.write("Subtraction of " + no1 + " and " + no2 + " is " + sub);
}
  
 function c5_q2_mul() {
  var no1 = +prompt("Enter 1st no :", ),
 no2 = +prompt("Enter 2nd no :", );
 mul = no1 * no2 ;
 document.write("Sum of " + no1 + " and " + no2 + " is " + mul);

}
function c5_q2_div() {
  var no1 = +prompt("Enter 1st no :", ),
 no2 = +prompt("Enter 2nd no :", );
 div = no1 / no2 ;
 document.write("Sum of " + no1 + " and " + no2 + " is " + div);

}
function c5_q2_mod() {
  var no1 = +prompt("Enter 1st no :", ),
 no2 = +prompt("Enter 2nd no :", );
 mod = no1 % no2 ;
 document.write("Sum of " + no1 + " and " + no2 + " is " + mod);

}


//Question # 3 :

function c5_q3() {
  var num;
  document.write("Value after variable declaration is undefined");
  num=5;
  document.write("<br/> Initial value: " + num);
  num = ++num;
  document.write("<br/> Value after increment is: " + num);
  num=num+7;
  document.write("<br/> Value after addition is: " + num);
  num= --num;
  document.write("<br/> Value after decrement is: " + num);
  num=num % 3;
  document.write("<br/> The remainder is : " + num);
  
}

//Question # 4 :

function c5_q4() {
 var ticket_price=600;
 var five_ticket_price=ticket_price*5;
 document.write("Total cost to buy 5 tickets to a movie is : "  + five_ticket_price + "PKR");

}


//Question # 5 :

function c5_q5() {
  var num = +prompt("Enter any no to calculate its table :", );
  document.write("Table of "+ num );

  for(var i=1 ; i<=10 ; i++){
    var res=num*i;
    document.write("<br/>"+ num + " x" + " "+ i + " = " + res);

}
  
    
    
     }
  



//Question # 6 :

function c5_q6() {
  var temp_in_cel= +prompt("Enter temperature in Celcius :", ),
  txt="o",
  res_in_feh= (temp_in_cel*9/5)+32;
  document.write(""+temp_in_cel+txt.sup()+"C is "+ res_in_feh + txt.sup()+"F");
  var temp_in_feh=+prompt("Enter temperature in Fehrenheit :", ),
  res_in_cel= (temp_in_feh-32)*5/9;
  document.write("<br/>"+temp_in_feh+ txt.sup()+"F is "+ res_in_cel + txt.sup()+"C");
  

}

//Question # 7 :

function c5_q7() {
  var Price_of_item1 = +prompt("Enter Price of Item 1 :", ),
  Ordered_quantity_of_item1 = +prompt("Enter Ordered Quantity of Item 1 :", ), 
   Price_of_item2 = +prompt("Enter Price of Item 2 :", ),
  Ordered_quantity_of_item2 = +prompt("Enter Ordered Quantity of Item 2 :", ),
   Shipping_charges = +prompt("Enter Shipping charges :", ),
 total_cost=(Price_of_item1*Ordered_quantity_of_item1)+(Price_of_item2*Ordered_quantity_of_item2)+Shipping_charges;
 document.write("<h1>SHOPPING CART</h1>");
 document.write("Price of Item 1 is "+Price_of_item1);
 document.write("<br/> Price of Item 2 is "+Price_of_item2);
 document.write("<br/> Quantity of Item 1 is "+Price_of_item1);
 document.write("<br/> Quantity of Item 2 is "+Price_of_item2);
 document.write("<br/> Shipping charges "+Shipping_charges);
 document.write("<br/><br/> Total cost of your order is "+total_cost);
 
  
}
//Question # 8 :

function c5_q8() {
  var total_marks = +prompt("Enter Total Marks :", ),
  marks_obtained = +prompt("Enter Marks obtained by a Studant :", ),
  per=(marks_obtained/total_marks)*100;
  
  document.write("<h1>MARK SHEET</h1>");
 document.write("<br/><br/>Total Marks : " +total_marks);
 document.write("<br/> Marks obtained :  "+marks_obtained);
 document.write("<br/> Percentage :  "+per+"%");
 
  

}
//Question # 9 :

function c5_q9() {
  var US_dollars = +prompt("Enter US dollars you have :", ),
  Saudi_Riyals = +prompt("Enter Saudi Riyals you have :", ),
  Pakistani_Rupee=(US_dollars*104.80)+(Saudi_Riyals*28);
  document.write("<h1>Currency Converter</h1>");
 document.write("<br/><br/>US Dollar : " +US_dollars);
 document.write("<br/> Saudi Riyals :  "+Saudi_Riyals);
 document.write("<br/> Pakistani Rupee :  "+Pakistani_Rupee);
 

}

//Question # 10 :

function c5_q10() {
  var num=5,
  result=((num+5)*10)/2;
  document.write("Result : " +result);
 
}
//Question # 11 :

function c5_q11() {
  var current_year = +prompt("Enter Current Year :", ),
  birth_year = +prompt("Enter Birth Year :", ),
  age=current_year-birth_year;
  
  document.write("<h1>AGE CALCULATOR</h1>");
 document.write("<br/><br/>Current Year : " +current_year);
 document.write("<br/> Birth Year :  "+birth_year);
 document.write("<br/> Age :  "+age);
 
  

}
//Question # 12 :

function c5_q12() {
  
  var radius = +prompt("Enter Radius of a Circle :", ),
  circumference=2*3.142*radius,
  area=3.142*(radius*radius);
  
  document.write("<h1>The Geometrizer</h1>");
 document.write("<br/><br/>Radius of a Circle : " +radius);
 document.write("<br/> Circumference of a circle :  "+circumference);
 document.write("<br/> Area of a circle is :  "+area);
 
}
//Question # 13 :

function c5_q13() {
  var favorite_snack = prompt("Enter youre favorite snack :", ),
  current_age = +prompt("Enter your current age :", ), 
  maximum_age = +prompt("Enter your estimated maximum age :", ),
  estimated_amount_per_day = +prompt("Enter your amount of snacks per day :", ),
 total_snacks=(maximum_age-current_age)*estimated_amount_per_day;
 document.write("<h1>The Lifetime Supply Calculator</h1>");
 
 document.write("<br/><br/> Favorite snack : "+favorite_snack);
 document.write("<br/> Current age : "+current_age);
 document.write("<br/> Estimated maximum age : "+maximum_age);
 document.write("<br/> Amount of snacks per day : "+estimated_amount_per_day);
 document.write("<br/><br/> You will need "+total_snacks+" "+favorite_snack+" to last you untill the ripe old age of "+maximum_age);
 
}


//CHAPTERS # 6-9 :-

//Question # 1 :

function c6_q1() {

  var num=10;
  document.write("Result : ");

  document.write("<br> The value of a is : "+num);
  document.write("<br><br> ------------------------------------------");

  var new_num=++num;
  document.write("<br> The value of ++a is : "+new_num);

  document.write("<br> Now the value of a is : "+num);
  
  new_num=num++;
  document.write("<br><br> The value of a++ is : "+new_num);

  document.write("<br> Now the value of a is : "+num);
   
  var new_num=--num;
  document.write("<br><br> The value of --a is : "+new_num);

  document.write("<br> Now the value of a is : "+num);
  
  new_num=num--;
  document.write("<br><br> The value of a-- is : "+new_num);

  document.write("<br> Now the value of a is : "+num);
  
  

}

//Question # 2 :


function c6_q2() {
  var a = 2, 
  b = 1,
   result = --a - --b + ++b + b--;
  document.write("a is " + a);
  document.write("<br> b is " + b);
  document.write("<br> Result is " + result);
  document.write("<br><br> ------------------------------------------");
  //Output :-
//   a is 1
// b is 0
// Result is 3

// ------------------------------------------

  result=--a;
  document.write("<br><br> a is " + a);
  document.write("<br> b is " + b);
  document.write("<br> Result is " + result);
  document.write("<br><br> ------------------------------------------");
 //Output :- 
// a is 0
// b is 0
// Result is 0

// ------------------------------------------
  
  result= --a - --b;
   document.write("<br><br> a is " + a);
  document.write("<br> b is " + b);
  document.write("<br> Result is " + result);
  document.write("<br><br> ------------------------------------------");
  //Output :-
// a is -1
// b is -1
// Result is 0

// ------------------------------------------
  
    result=--a - --b + ++b;
    document.write("<br><br> a is " + a);
  document.write("<br> b is " + b);
  document.write("<br> Result is " + result);
  document.write("<br><br> ------------------------------------------");
  //Output :-
// a is -2
// b is -1
// Result is -1

// ------------------------------------------
  
     result=--a - --b + ++b + b--;
     document.write("<br><br> a is " + a);
  document.write("<br> b is " + b);
  document.write("<br> Result is " + result);
  document.write("<br><br> ------------------------------------------");
//Output :-
// a is -3
// b is -2
// Result is -3

// ------------------------------------------
  
  
}
  
 
//Question # 3 :

function c6_q3() {
  var username = prompt("Enter your name :", );
  alert("Hello! " + username + " Welcome to my page");
  
  
  
}

//Question # 4 :

function c6_q4() {
  var num = +prompt("Enter any no to calculate its table :", );
  for(var c=0 ; c<1 ; c++){
    
    if (num<0 || num>=1) {
      document.write("Table of "+ num );
  }
  else if(num===0){
  document.write("Table of 5" );
   
  }


}
  for(var i=1 ; i<=10 ; i++){
    
    if (num<0 || num>=1) {
      

    var res=num*i;
    document.write("<br/>"+ num + " x" + " "+ i + " = " + res);
  }
  else if(num===0){
  
    
    var res=5*i;
    document.write("<br/>"+ 5 + " x" + " "+ i + " = " + res);
   
 
  }


}
  
    
    }


//Question # 5 :

function c6_q5() {
 var  sub1_name = prompt("Enter Name of Subject 1 :", ),
 sub2_name = prompt("Enter Name of Subject 2 :", ),
 sub3_name = prompt("Enter Name of Subject 3 :", ),
 total_marks_sub1 = 100,
 total_marks_sub2 = 100,
 total_marks_sub3 = 100,
  marks_obtained_sub1 = +prompt("Enter obtained marks od Subject 1 :", ),
  marks_obtained_sub2 = +prompt("Enter obtained marks od Subject 2 :", ),
  marks_obtained_sub3 = +prompt("Enter obtained marks od Subject 3 :", ),
 
  total_obtained_marks = marks_obtained_sub1+marks_obtained_sub2+marks_obtained_sub3,
 
  total_marks = 300,
  per_sub1=(marks_obtained_sub1/total_marks_sub1)*100,
  per_sub2=(marks_obtained_sub2/total_marks_sub2)*100,
  per_sub3=(marks_obtained_sub3/total_marks_sub3)*100,
  total_per=(total_obtained_marks/total_marks)*100;
  
  document.write("<h1>MARK SHEET</h1>");
  document.write("<br/>");

 document.write("<table><tr><td>Subject</td> <td>Total Marks</td> <td>Obtained Marks</td><td>Percentage%</td></tr><tr><td> "+sub1_name+" </td> <td> "+total_marks_sub1+" </td> <td> "+marks_obtained_sub1+" </td><td> "+per_sub1+" </td></tr><tr><td> "+sub2_name+" </td> <td> "+total_marks_sub2+" </td> <td> "+marks_obtained_sub2+" </td><td> "+per_sub2+" </td></tr><tr><td> "+sub3_name+" </td> <td> "+total_marks_sub3+" </td> <td> "+marks_obtained_sub3+" </td><td> "+per_sub3+" </td></tr><b><tr><td></td> <td>"+total_marks+" </td> <td>"+total_obtained_marks+" </td><td> "+total_per+" % </td></tr></b></table>"); 

}


//CHAPTER # 9-11:-

//Question # 1 :

function c9_q1() {

  var city = prompt("Enter Your City :", );
 
 if (city==="karachi") {
      

  alert("Welcome to city of lights");
}
else{

  
  
  alert("Welcome to "+city );
 

}
  
  }

//Question # 2 :


function c9_q2() {
  var gender = prompt("Enter Your Gender :", );
 
 if (gender==="male") {
      

  alert("Good Morning Sir");
}
else{

  
  
  alert("Good Morning Ma’am");
 

}
  
}


//Question # 3 :

function c9_q3() {
  var color_of_road_traffic_signal = prompt("Enter color of road traffic signal :", );
 
 if (color_of_road_traffic_signal==="red") {
      

  alert("Must Stop");
}
else if(color_of_road_traffic_signal==="yellow"){

  
  
  alert("Ready to move");
 

}
else if(color_of_road_traffic_signal==="green"){

  
  
  alert("Move now");
 

}
  

}

//Question # 4 :

function c9_q4() {
  var car_fuel = +prompt("Enter fuel in your car (in litres) :", );
 
  if (car_fuel<0.25) {
       
 
   alert("Please refill the fuel in your car");
 }
 else{
 
   
   
   alert("Move now");
  
 
 }
}


//Question # 5 :

function c9_q5_a() {
  var a = 4; 
  if (++a === 5){ 
    alert("given condition for variable a is true"); 
}
  }
  //Output :-
  //alert message would be displayed
  
     function c9_q5_b() {
      var b = 82; 
      if (b++ === 83)
      { 
        alert("given condition for variable b is true"); 
      }
       }
       //Output :-
  //alert message would not be displayed
  
    
       function c9_q5_c() {
        var c = 12; 
        if (c++ === 13){ alert("condition 1 is true"); } 
        if (c === 13){ alert("condition 2 is true"); } 
        if (++c < 14){ alert("condition 3 is true"); } 
        if(c === 14){ alert("condition 4 is true"); }
         }
         //Output :-
  //alert message of condition 2 and condition 4 would be displayed
  
         function c9_q5_d() {
          var materialCost = 20000;
           var laborCost = 2000;
            var totalCost = materialCost + laborCost;
           if (totalCost === laborCost + materialCost)
           { alert("The cost equals"); }
           }
           //Output :-
  //alert message would be displayed
  
           function c9_q5_e() {
            if (true)
            { alert("True"); } 
            if (false)
            { alert("False"); }
             }
             //Output :-
  //alert message of true condition would be displayed
  
 
             function c9_q5_f() {
              if("car" < "cat")
              { alert("car is smaller than cat"); }
               }
               //Output :-
  //alert message would be displayed
  
                         
                       

//Question # 6 :

function c9_q6() {
 
 var marks_obtained_sub1 = +prompt("Enter obtained marks od Subject 1 :", ),
  marks_obtained_sub2 = +prompt("Enter obtained marks od Subject 2 :", ),
  marks_obtained_sub3 = +prompt("Enter obtained marks od Subject 3 :", ),
 
  total_obtained_marks = marks_obtained_sub1+marks_obtained_sub2+marks_obtained_sub3,
 
  total_marks = +prompt("Enter Total marks :", ),
  per=(total_obtained_marks/total_marks)*100;
  
  document.write("<h1>MARK SHEET</h1>");
  document.write("<br/><br/>Total Marks : " +total_marks);
  document.write("<br/> Marks obtained :  "+total_obtained_marks);
  document.write("<br/> Percentage :  "+per+"%");
 
  if (per>=80) {
    document.write("<br/> Grade : A-one ");
  document.write("<br/> Remarks : Excellent ");   
  }
  else if (per>=70){
    document.write("<br/> Grade : A ");
    document.write("<br/> Remarks : Good ");   
  }
  else if (per>=60){
    document.write("<br/> Grade : B ");
    document.write("<br/> Remarks : You need to improve ");   
  }
  else if (per<60){
    document.write("<br/> Grade : Fail ");
    document.write("<br/> Remarks : Sorry ");   
  }
 
 

}

//Question # 7 :

function c9_q7() {
  var secret_number=7,
  
    no = +prompt("Guess any secret number :",);
    if (no===secret_number) {
alert("Bingo! Correct answer");

    }
      
        else if (no===secret_number+1) {

            
            alert("Close enough to the correct answer");
            
                }
                else{
                  alert("oop's! Wrong answer")
                }
  

}
//Question # 8 :

function c9_q8() {
  var no = +prompt("Enter any no to check whether it is is divisible by 3 or not :", );
  if(no%3===0)
              { 
                document.write(no + " is divisible by 3");
 
               }
               else{
                document.write(no + " is not divisible by 3");
 
               }
              
  
  

}
//Question # 9 :

function c9_q9() {
  var no = +prompt("Enter any number to check whether it is an even number or an odd number :",);
  if (no%2===0) {


    alert(num+" is even no");
  }
  else {
    alert(num+" is odd no");
 
  }
  
}

//Question # 10 :

function c9_q10() {
  var t = +prompt("Enter today's weather temperature :",);
  if (t>40) {


    alert("It is too hot outside.");
  }
  else if(t>30) {
    alert("The Weather today is Normal");
 
  }
  else if(t>20) {
    alert("Today’s Weather is cool");
 
  }
  else if(t>10) {
    alert("OMG! Today’s weather is so Cool");
 
  }
  
}
//Question # 11 :

function c9_q11() {
  var no1 = +prompt("Enter 1st no :",),
    no2 = +prompt("Enter 2nd no :",),
    operation = prompt("Which operation you want to perfom from these Operation (+, -, *, /, %) :",),
    result;
    if (operation==="+") {

result=no1+no2;
alert("Sum of " + no1 + " and " + no2 + " is " + result);

    }
      
        
         
          else if (operation==="-") {

            result=no1-no2;
            alert("Subtraction of " + no1 + " and " + no2 + " is " + result);
            
                }
                else if (operation==="*") {

                  result=no1*no2;
      alert("Product of " + no1 + " and " + no2 + " is " + result);
                  
                      }

                      else if (operation==="/") {

                        result = no1/no2;
                        alert("Division of " + no1 + " and " + no2 + " is " + result);
                        
                            }
                            else if (operation==="%") {

                              result=no1%no2;
      alert("Modulus of " + no1 + " and " + no2 + " is " + result);
                              
                                  }
                           
                                        
               
}
//CHAPTER # 12-13:-

//Question # 1 :

function c12_q1() {

  var anykey = prompt("Enter any key :", );
 
  if ((anykey >= String.fromCharCode(65) && anykey <= String.fromCharCode(90)) || (anykey >= String.fromCharCode(97) && anykey <= String.fromCharCode(122))) 
  {
        alert(" Alphabet "); 
      }
  
  
    else if (anykey >= String.fromCharCode(48) && anykey <= String.fromCharCode(57))
     {

        alert( " Digit "); 
      }
      else if (anykey > String.fromCharCode(122))
     {

        alert( " String "); 
      }
    
      else{
        alert (" Special Character "); 
      }
} 

                     
  
  

//Question # 2 :


function c12_q2() {
  var no1 = +prompt("Enter First number :", ),
  no2 = +prompt("Enter Second number :", );
 
  if (no1>no2) 
  {
        alert(no1+" is greater than "+no2); 
      }
  
  
    else if (no1<no2)
    {
      alert(no1+" is lesser than "+no2); 
    }
 else if (no1===no2)
 {
  alert(no1+" is equal to "+no2); 
}

      } 

  
  



//Question # 3 :

function c12_q3() {
  var no = +prompt("Enter any number to check whether it is positive, negative or zero :", );
 
 if (no>0) {
      

  alert(no+" is Positive number");
}
else if(no<0){
  alert(no+" is Negative number");
}
else if(no===0){
  alert("It is Zero number");

}
  

}

//Question # 4 :

function c12_q4() {
  var any_char = prompt("Enter any Character :", );
 
  if (any_char===String.fromCharCode(65, 69, 73, 79, 85) || any_char===String.fromCharCode(97, 101, 105, 111, 117)) 
  {
       
 
   alert("It is a vowel");
 }
 else{
 
   
   
   alert("It is not a vowel");
  
 
 }
}


//Question # 5 :

function c12_q5() {
  var password=prompt("Enter your password :", ),
  correct_password="bushra";
  if (password=="" || password==null){ 
    alert("Please enter your password"); 
}
else if (password==correct_password){ 
  alert("Correct! The password you entered matches the original password"); 
}
else if (password!=correct_password){ 
  alert("Incorrect password"); 
}
  }
  
//Question # 6 :

function c12_q6() {
  var greeting; 
  var hour = 13; 
  if (hour < 18) { 
    greeting = "Good day";
    alert(greeting+" ");
  }
     else {
     greeting = "Good evening";
     alert(greeting+" ");
   
}

}
//Question # 7 :

function c12_q7() {
  var time=+prompt("Enter your current time in 24 hours clock format like: 1900 = 7pm :", );
  
  if (time>=0000 && time<1700){ 
    alert("Good Morning"); 
}
else if (time>=1200 && time<1700){ 
  alert("Good afternoon"); 
}
else if (time>=1700 && time<2100){ 
  alert("Good evening!"); 
}
else if (time>=2100 && time<=2359){ 
  alert("Good night!"); 
}

}
  

//CHAPTER # 14-16:-

//Question # 1 :

function c14_q1() {

  var city = prompt("Enter Your City :", );
 
 if (city==="karachi") {
      

  alert("Welcome to city of lights");
}
else{

  
  
  alert("Welcome to "+city );
 

}
  
  }

//Question # 2 :


function c14_q2() {
  var gender = prompt("Enter Your Gender :", );
 
 if (gender==="male") {
      

  alert("Good Morning Sir");
}
else{

  
  
  alert("Good Morning Ma’am");
 

}
  
}


//Question # 3 :

function c14_q3() {
  var color_of_road_traffic_signal = prompt("Enter color of road traffic signal :", );
 
 if (color_of_road_traffic_signal==="red") {
      

  alert("Must Stop");
}
else if(color_of_road_traffic_signal==="yellow"){

  
  
  alert("Ready to move");
 

}
else if(color_of_road_traffic_signal==="green"){

  
  
  alert("Move now");
 

}
  

}

//Question # 4 :

function c14_q4() {
  var car_fuel = +prompt("Enter fuel in your car (in litres) :", );
 
  if (car_fuel<0.25) {
       
 
   alert("Please refill the fuel in your car");
 }
 else{
 
   
   
   alert("Move now");
  
 
 }
}


//Question # 5 :

function c14_q5() {
  var a = 4; 
  if (++a === 5){ 
    alert("given condition for variable a is true"); 
}
  }
                         

//Question # 6 :

function c14_q6() {
 
 var marks_obtained_sub1 = +prompt("Enter obtained marks od Subject 1 :", ),
  marks_obtained_sub2 = +prompt("Enter obtained marks od Subject 2 :", ),
  marks_obtained_sub3 = +prompt("Enter obtained marks od Subject 3 :", ),
 
  total_obtained_marks = marks_obtained_sub1+marks_obtained_sub2+marks_obtained_sub3,
 
  total_marks = +prompt("Enter Total marks :", ),
  per=(total_obtained_marks/total_marks)*100;
  
  document.write("<h1>MARK SHEET</h1>");
  document.write("<br/><br/>Total Marks : " +total_marks);
  document.write("<br/> Marks obtained :  "+total_obtained_marks);
  document.write("<br/> Percentage :  "+per+"%");
 
  if (per>=80) {
    document.write("<br/> Grade : A-one ");
  document.write("<br/> Remarks : Excellent ");   
  }
  else if (per>=70){
    document.write("<br/> Grade : A ");
    document.write("<br/> Remarks : Good ");   
  }
  else if (per>=60){
    document.write("<br/> Grade : B ");
    document.write("<br/> Remarks : You need to improve ");   
  }
  else if (per<60){
    document.write("<br/> Grade : Fail ");
    document.write("<br/> Remarks : Sorry ");   
  }
 
 

}

//Question # 7 :

function c14_q7() {
  var secret_number=7,
  
    no = +prompt("Guess any secret number :",);
    if (no===secret_number) {
alert("Bingo! Correct answer");

    }
      
        else if (no===secret_number+1) {

            
            alert("Close enough to the correct answer");
            
                }
                else{
                  alert("oop's! Wrong answer")
                }
  

}
//Question # 8 :

function c14_q8() {
  var no = +prompt("Enter any no to check whether it is is divisible by 3 or not :", );
  if(no%3===0)
              { 
                document.write(no + " is divisible by 3");
 
               }
               else{
                document.write(no + " is not divisible by 3");
 
               }
              
  
  

}
//Question # 9 :

function c14_q9() {
  var no = +prompt("Enter any number to check whether it is an even number or an odd number :",);
  if (no%2===0) {


    alert(num+" is even no");
  }
  else {
    alert(num+" is odd no");
 
  }
  
}

//Question # 10 :

function c14_q10() {
  var t = +prompt("Enter today's weather temperature :",);
  if (t>40) {


    alert("It is too hot outside.");
  }
  else if(t>30) {
    alert("The Weather today is Normal");
 
  }
  else if(t>20) {
    alert("Today’s Weather is cool");
 
  }
  else if(t>10) {
    alert("OMG! Today’s weather is so Cool");
 
  }
  
}
//Question # 11 :


function c14_q11() {
  var gender = prompt("Enter Your Gender :", );
 
 if (gender==="male") {
      

  alert("Good Morning Sir");
}
else{

  
  
  alert("Good Morning Ma’am");
 

}
  
}
//Question # 12 :


function c14_q12() {
  var gender = prompt("Enter Your Gender :", );
 
 if (gender==="male") {
      

  alert("Good Morning Sir");
}
else{

  
  
  alert("Good Morning Ma’am");
 

}
  
}
//Question # 13 :


function c14_q13() {
  var gender = prompt("Enter Your Gender :", );
 
 if (gender==="male") {
      

  alert("Good Morning Sir");
}
else{

  
  
  alert("Good Morning Ma’am");
 

}
  
}
//Question # 14 :


function c14_q14() {
  var gender = prompt("Enter Your Gender :", );
 
 if (gender==="male") {
      

  alert("Good Morning Sir");
}
else{

  
  
  alert("Good Morning Ma’am");
 

}
  
}
//Question # 15 :


function c14_q15() {
  var gender = prompt("Enter Your Gender :", );
 
 if (gender==="male") {
      

  alert("Good Morning Sir");
}
else{

  
  
  alert("Good Morning Ma’am");
 

}
  
}

//CHAPTER # 17-20:-

//Question # 1 :

function c14_q1() {

  var city = prompt("Enter Your City :", );
 
 if (city==="karachi") {
      

  alert("Welcome to city of lights");
}
else{

  
  
  alert("Welcome to "+city );
 

}
  
  }

//Question # 2 :


function c14_q2() {
  var gender = prompt("Enter Your Gender :", );
 
 if (gender==="male") {
      

  alert("Good Morning Sir");
}
else{

  
  
  alert("Good Morning Ma’am");
 

}
  
}


//Question # 3 :

function c14_q3() {
  var color_of_road_traffic_signal = prompt("Enter color of road traffic signal :", );
 
 if (color_of_road_traffic_signal==="red") {
      

  alert("Must Stop");
}
else if(color_of_road_traffic_signal==="yellow"){

  
  
  alert("Ready to move");
 

}
else if(color_of_road_traffic_signal==="green"){

  
  
  alert("Move now");
 

}
  

}

//Question # 4 :

function c14_q4() {
  var car_fuel = +prompt("Enter fuel in your car (in litres) :", );
 
  if (car_fuel<0.25) {
       
 
   alert("Please refill the fuel in your car");
 }
 else{
 
   
   
   alert("Move now");
  
 
 }
}


//Question # 5 :

function c14_q5() {
  var a = 4; 
  if (++a === 5){ 
    alert("given condition for variable a is true"); 
}
  }
                         

//Question # 6 :

function c14_q6() {
 
 var marks_obtained_sub1 = +prompt("Enter obtained marks od Subject 1 :", ),
  marks_obtained_sub2 = +prompt("Enter obtained marks od Subject 2 :", ),
  marks_obtained_sub3 = +prompt("Enter obtained marks od Subject 3 :", ),
 
  total_obtained_marks = marks_obtained_sub1+marks_obtained_sub2+marks_obtained_sub3,
 
  total_marks = +prompt("Enter Total marks :", ),
  per=(total_obtained_marks/total_marks)*100;
  
  document.write("<h1>MARK SHEET</h1>");
  document.write("<br/><br/>Total Marks : " +total_marks);
  document.write("<br/> Marks obtained :  "+total_obtained_marks);
  document.write("<br/> Percentage :  "+per+"%");
 
  if (per>=80) {
    document.write("<br/> Grade : A-one ");
  document.write("<br/> Remarks : Excellent ");   
  }
  else if (per>=70){
    document.write("<br/> Grade : A ");
    document.write("<br/> Remarks : Good ");   
  }
  else if (per>=60){
    document.write("<br/> Grade : B ");
    document.write("<br/> Remarks : You need to improve ");   
  }
  else if (per<60){
    document.write("<br/> Grade : Fail ");
    document.write("<br/> Remarks : Sorry ");   
  }
 
 

}

//Question # 7 :

function c14_q7() {
  var secret_number=7,
  
    no = +prompt("Guess any secret number :",);
    if (no===secret_number) {
alert("Bingo! Correct answer");

    }
      
        else if (no===secret_number+1) {

            
            alert("Close enough to the correct answer");
            
                }
                else{
                  alert("oop's! Wrong answer")
                }
  

}
//Question # 8 :

function c14_q8() {
  var no = +prompt("Enter any no to check whether it is is divisible by 3 or not :", );
  if(no%3===0)
              { 
                document.write(no + " is divisible by 3");
 
               }
               else{
                document.write(no + " is not divisible by 3");
 
               }
              
  
  

}
//Question # 9 :

function c14_q9() {
  var no = +prompt("Enter any number to check whether it is an even number or an odd number :",);
  if (no%2===0) {


    alert(num+" is even no");
  }
  else {
    alert(num+" is odd no");
 
  }
  
}

//Question # 10 :

function c14_q10() {
  var t = +prompt("Enter today's weather temperature :",);
  if (t>40) {


    alert("It is too hot outside.");
  }
  else if(t>30) {
    alert("The Weather today is Normal");
 
  }
  else if(t>20) {
    alert("Today’s Weather is cool");
 
  }
  else if(t>10) {
    alert("OMG! Today’s weather is so Cool");
 
  }
  
}






