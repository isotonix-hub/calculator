document.addEventListener("DOMContentLoaded", function () {
    function click() {

        const container = document.getElementById("button-container");


        container.addEventListener("click", function (event) {

            if (event.target.tagName === "BUTTON") {
                handleButtonClick(event.target.id);
            }
        });
    }

    function handleButtonClick(id) {
        switch (id) {
            case "number_0": {
                const input = document.getElementById("input");
                const number_0 = document.getElementById("number_0");

                input.value += number_0.value;


            }
                break;

            case "number_1": {
                const input = document.getElementById("input");
                const number_1 = document.getElementById("number_1");

                input.value += number_1.value;
            }

                break;
            case "number_2": {
                const input = document.getElementById("input");
                const number_2 = document.getElementById("number_2");

                input.value += number_2.value;

            }

                break;
            case "number_3": {
                const input = document.getElementById("input");
                const number_3 = document.getElementById("number_3");

                input.value += number_3.value;

            }

                break;
            case "number_4": {

                const input = document.getElementById("input");
                const number_4 = document.getElementById("number_4");

                input.value += number_4.value;

            }

                break;
            case "number_5": {
                const input = document.getElementById("input");
                const number_5 = document.getElementById("number_5");

                input.value += number_5.value;

            }

                break;
            case "number_6": {
                const input = document.getElementById("input");
                const number_6 = document.getElementById("number_6");

                input.value += number_6.value;

            }

                break;
            case "number_7": {
                const input = document.getElementById("input");
                const number_7 = document.getElementById("number_7");

                input.value += number_7.value;

            }

                break;
            case "number_8": {
                const input = document.getElementById("input");
                const number_8 = document.getElementById("number_8");

                input.value += number_8.value;

            }

                break;
            case "number_9": {
                const input = document.getElementById("input");
                const number_9 = document.getElementById("number_9");

                input.value += number_9.value;

            }

                break;
            default:
                console.log("Unknown button clicked");
        }
    }



    let add_button_clicked = false;
    let subtract_button_clicked = false;
    let multiply_button_clicked = false;
    let divide_button_clicked = false;

    


    let first_value_store = [];
    let result_value = [];
    let temporarily_store = [];
    let arthemtic_selected = "";
    let insert_number = document.getElementById("insert_number");



    function selected_operator(operator) {


        arthemtic_selected = operator;


    }


    function add() {


        const addition = document.getElementById("addition");

        addition.addEventListener("click", () => {
            const get_first_value = document.getElementById("input").value;
            add_button_clicked = true;

            if (first_value_store.length === 0) {

                first_value_store.push(get_first_value);
                insert_number.textContent = first_value_store[0] + "+";
                document.getElementById("input").value = "";

                console.log(first_value_store);





            }


            if (result_value.length === 1) {
                document.getElementById("input").value = "";
                insert_number.textContent = result_value[0] + "+";

                first_value_store = [];
                temporarily_store = [];





            }

            selected_operator("+");






        })

    }

    function minus() {

        const subtraction = document.getElementById("subtraction");

        subtraction.addEventListener("click", () => {
            const get_first_value = document.getElementById("input").value;
            subtract_button_clicked = true;
        

            if (first_value_store.length === 0) {

                first_value_store.push(get_first_value);
                insert_number.textContent = first_value_store[0] + "-";
                document.getElementById("input").value = "";







            }


            if (result_value.length === 1) {
                document.getElementById("input").value = "";
                insert_number.textContent = result_value[0] + "-";

                first_value_store = [];
                temporarily_store = [];





            }

            selected_operator("-");






        })


    }

    function multiply() {

        const multiplication = document.getElementById("multiplication");

        multiplication.addEventListener("click", () => {
            const get_first_value = document.getElementById("input").value;
           
            if (first_value_store.length === 0) {

                first_value_store.push(get_first_value);
                insert_number.textContent = first_value_store[0] + "*";
                document.getElementById("input").value = "";







            }


            if (result_value.length === 1) {
                document.getElementById("input").value = "";
                insert_number.textContent = result_value[0] + "*";

                first_value_store = [];
                temporarily_store = [];





            }

            selected_operator("*");






        })

    }

    function divide() {
        const multiplication = document.getElementById("division");

        multiplication.addEventListener("click", () => {
            const get_first_value = document.getElementById("input").value;
      

            if (first_value_store.length === 0) {

                first_value_store.push(get_first_value);
                insert_number.textContent = first_value_store[0] + "/";
                document.getElementById("input").value = "";







            }


            if (result_value.length === 1) {
                document.getElementById("input").value = "";
                insert_number.textContent = result_value[0] + "/";

                first_value_store = [];
                temporarily_store = [];





            }

            selected_operator("/");






        })



    }



    function equal() {

        const equal = document.getElementById("equal");

        equal.addEventListener("click", () => {




            if (first_value_store.length === 1) {
                const number_1 = first_value_store[0];
                const number_2 = document.getElementById("input").value;
                let result = 0;

             
               


                switch (arthemtic_selected) {


                    case "+":
                        result = Number(number_1) + Number(number_2);

                  



                        break;
                    case "-":

                        result = Number(number_1) - Number(number_2);
                    

                        break;

                    case "*":
                        result = Number(number_1) * Number(number_2);
                    
                        break;

                    case "/":
                        if (Number(number_2) === 0) {

                          
                            insert_number.textContent = "Cannot divide by zero";
                            document.getElementById("addition").disabled = true;
                            document.getElementById("subtraction").disabled = true;
                            document.getElementById("multiplication").disabled = true;
                            document.getElementById("division").disabled = true;
                            document.getElementById("equal").disabled = true;
                            document.getElementById("input").value = "";


                            first_value_store = [];
                            result_value = [];
                            temporarily_store = [];


                            numbers_click();




                            return;

                        }


                        result = Number(number_1) / Number(number_2);
                       
                        break;




                    default:
                        alert("Please select operation");
                        return;



                }




                insert_number.textContent = first_value_store[0] + arthemtic_selected + number_2 + "=";
                document.getElementById("input").value = result;
                result_value[0] = result;







            } else if (result_value.length === 1) {
                const number_1 = result_value[0];
                const number_2 = document.getElementById("input").value;

                 
           
            

                temporarily_store.push(number_2);
                





                let result = 0;

                switch (arthemtic_selected) {
                    case "+":
                        result = Number(number_1) + Number(number_2);
                        if (temporarily_store.length >= 1) {
                            result = Number(result_value[0]) + Number(temporarily_store[0]);

                            add_button_clicked = false; 


                        }
                        break;
                    case "-":
                        result = Number(number_1) - Number(number_2);
                        if (temporarily_store.length >= 1) {
                            result = Number(result_value[0]) - Number(temporarily_store[0]);
                            subtract_button_clicked = false;

                        }
                        break;
                    case "*":
                        result = Number(number_1) * Number(number_2);
                        if (temporarily_store.length >= 1) {
                            result = Number(result_value[0]) * Number(temporarily_store[0]);
                            multiply_button_clicked = false;


                        }
                        break
                    case "/":
                        result = Number(number_1) / Number(number_2);
                        if (temporarily_store.length >= 1) {
                            result = Number(result_value[0]) / Number(temporarily_store[0]);

                            divide_button_clicked = false;

                        }

                        if (Number(temporarily_store[0]) === 0) {
                            insert_number.textContent = "Cannot divide by zero";
                            document.getElementById("addition").disabled = true;
                            document.getElementById("subtraction").disabled = true;
                            document.getElementById("multiplication").disabled = true;
                            document.getElementById("division").disabled = true;
                            document.getElementById("equal").disabled = true;
                            document.getElementById("input").value = "";

                            first_value_store = [];
                            result_value = [];
                            temporarily_store = [];





                            numbers_click();


                            return;



                        }






                        break;

                    default:
                        alert("Please select an operation");
                        return;
                }




                document.getElementById("input").value = result;

                result_value[0] = result;


                document.getElementById("insert_number").textContent = result;
            }









        })





    }


    function numbers_click() {


        const click_number = {

            number_0: document.getElementById("number_0"),
            number_1: document.getElementById("number_1"),
            number_2: document.getElementById("number_2"),
            number_3: document.getElementById("number_3"),
            number_4: document.getElementById("number_4"),
            number_5: document.getElementById("number_5"),
            number_6: document.getElementById("number_6"),
            number_7: document.getElementById("number_7"),
            number_8: document.getElementById("number_8"),
            number_9: document.getElementById("number_9")




        }


        Object.values(click_number).forEach(number => {

            number.addEventListener("click", () => {




                insert_number.textContent = "";
                document.getElementById("addition").disabled = false;
                document.getElementById("subtraction").disabled = false;
                document.getElementById("multiplication").disabled = false;
                document.getElementById("division").disabled = false;
                document.getElementById("equal").disabled = false;





            })

        })




    }




    function decimal() {
        const decimal_button = document.getElementById("decimal");
        decimal_button.addEventListener("click", () => {

            const input = document.getElementById("input");
            const decimal = document.getElementById("decimal");



            if (result_value.length === 1) {
                document.getElementById("input").value = "";
                first_value_store = [];
                result_value = [];
                temporarily_store = [];
                insert_number.textContent = "";


            }





            if (input.value.includes(decimal.value)) {

                input.value = input.value.replace(decimal.value, '');
            } else {

                input.value += decimal.value;

            }


        })





    }

    function sqrt() {

        const squared = document.getElementById("squared");

        squared.addEventListener("click", () => {


            const input = document.getElementById("input");


            const result = input.value *= input.value;


            if (result_value.length === 1) {
                result_value[0] = result;
            }





        })
    }


    function sqrt_root() {

        const squared_root = document.getElementById("squared_root");

        squared_root.addEventListener("click", () => {


            const input = document.getElementById("input");

            const result = Math.sqrt(input.value);

            document.getElementById("input").value = result;

            if (result_value.length === 1) {
                const result = Math.sqrt(result_value[0]);
                result_value[0] = result;

            }

        })




    }


    function one_divide_x() {


        const one_dividex_y = document.getElementById("one_dividex_y");

        one_dividex_y.addEventListener("click", () => {

            const input = document.getElementById("input")
            const number = 1;


            const result = number / input.value;


            document.getElementById("input").value = result;

            if (result_value.length === 1) {
                const result = Math.sqrt(result_value[0]);
                result_value[0] = result;

            }

        })



    }

    function positiveNegative() {

        const negativePositive = document.getElementById("negativePositive");

        negativePositive.addEventListener("click", () => {

            const input = document.getElementById("input").value;




            if (!input.startsWith("-")) {

                const result = "-" + input;
                document.getElementById("input").value = result;


            } else {
                document.getElementById("input").value = input.slice(1);

            }
          
        })

    }

    function clearInputByOne() {


        const clearInputByOne = document.getElementById("clearInputByOne");

        clearInputByOne.addEventListener("click", () => {



            if (first_value_store.length === 0 || document.getElementById("input").value ) {


                let input = document.getElementById("input").value;

                let arr = input.split("");

                arr.pop();


                const newString = arr.join("");

                document.getElementById("input").value = newString;

            }


            if (result_value.length === 1) {
                insert_number.textContent = "";
                console.log(result_value[0]);
                console.log(temporarily_store[0]);
            }

        })


        

    }


    function ce() {
        const ce = document.getElementById("ce");

        ce.addEventListener("click", () => {

            document.getElementById("input").value = "";

            
        })


    }


    function C() {


        const c = document.getElementById("c");

        c.addEventListener("click", () => {s

            document.getElementById("input").value = "";
            first_value_store = [];
            result_value = [];
            temporarily_store = [];
            insert_number.textContent = "";

        })
    }

    function percentage() {

        const percentage = document.getElementById("percentage");

        percentage.addEventListener("click", () => {


            if (first_value_store.length === 0) {

                insert_number.textContent = "";
                document.getElementById("input").value = "";
            } else {

                const input = document.getElementById("input").value;
                const result = (Number(input) / 100) * Number(first_value_store[0]);
                insert_number.textContent = first_value_store[0] + arthemtic_selected + result + "=";
                document.getElementById("input").value = result;
                
                

            }



        })
        
    }


 
    function numbers_clicks() {


        const click_number = {

            number_0: document.getElementById("number_0"),
            number_1: document.getElementById("number_1"),
            number_2: document.getElementById("number_2"),
            number_3: document.getElementById("number_3"),
            number_4: document.getElementById("number_4"),
            number_5: document.getElementById("number_5"),
            number_6: document.getElementById("number_6"),
            number_7: document.getElementById("number_7"),
            number_8: document.getElementById("number_8"),
            number_9: document.getElementById("number_9")




        }


        Object.values(click_number).forEach(number => {

            number.addEventListener("click", () => {


                if (add_button_clicked === false && result_value.length === 1) {
                    add_button_clicked = true;
                    document.getElementById("input").value = "";
                    first_value_store = [];
                    result_value = [];
                    temporarily_store = [];
                    insert_number.textContent = "";

                }


                if (subtract_button_clicked === false && result_value.length === 1) {
                    subtract_button_clicked = true;
                    document.getElementById("input").value = "";
                    first_value_store = [];
                    result_value = [];
                    temporarily_store = [];
                    insert_number.textContent = "";

                }



                console.log(add_button_clicked);
                console.log()


              

                

               

            })

        })




    }

    
    click();
    add();
    minus();
    multiply();
    divide();
    equal();
    decimal()
    sqrt();
    sqrt_root();
    one_divide_x();
    positiveNegative();
    clearInputByOne();
    ce();
    C();
    percentage();
    numbers_click();
    numbers_clicks();
  

  

});