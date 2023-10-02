$(document).ready(() => {

async function calcSetup() {
    
    function clearScreen(){
        document.getElementById('result').value = ''
    }

    let addCalcScreen = document.getElementById('calc-screen');
    addCalcScreen.innerHTML = `<input type='text' id='result' class ='screen form-control' style="text-align:right" disabled readonly>`;

    let calcScreenClear = document.getElementById('calc-screen-clear');
    calcScreenClear.innerHTML = `<input type='button' value = 'C' onclick="` + clearScreen() + `" class="wipe-screen btn btn-danger">`;

    function solve(){
        let x = document.getElementById('result').value
        let y = eval(x);
        document.getElementById('result').value = y
        return y
    }

    let addCalcKeys = document.getElementById('calc-keys');
    addCalcKeys.innerHTML = `
    <input type="button" value="7" class="button btn btn-primary ">
    <input type="button" value="8" class="button btn btn-primary">
    <input type="button" value="9" class="button btn btn-primary">
    <input type="button" value="/" class="operator btn btn-warning">
    <input type="button" value="4" class="button btn btn-primary">
    <input type="button" value="5" class="button btn btn-primary">
    <input type="button" value="6" class="button btn btn-primary">
    <input type="button" value="*" class="operator btn btn-warning">
    <input type="button" value="1" class="button btn btn-primary">
    <input type="button" value="2" class="button btn btn-primary">
    <input type="button" value="3" class="button btn btn-primary">
    <input type="button" value="-" class="operator btn btn-warning">
    <input type="button" value="0" class="button btn btn-primary">
    <input type="button" value="." class="button btn btn-primary">
    <input type="button" value= "=" class="equal-sign button btn btn-success">
    <input type="button" value="+" class="operator btn btn-warning">
    `;
    

    $('input[class^="button"]').on("click", function(event) {
        let result = document.getElementById('result').value;
        if (result == "Don\'t be a sod" || undefined || _.isString()) {
            clearScreen()
        } else {
            let getBtnVal = this.value;
            let resultScreen = document.getElementById('result')
            resultScreen.value += getBtnVal
        }
    })

    $('input[class^="operator"]').on("click", function(event) {
        let result = document.getElementById('result').value
        let pattern = /[0-9999999999]/g;
        let res = result.match(pattern);
        console.log(result);
        if (result == res) {
            let getBtnVal = this.value;
            let resultScreen = document.getElementById('result')
            resultScreen.value += getBtnVal
        } 
    })

    $('input[class^="equal-sign"]').on("click", function() {
        let x = document.getElementById('result').value
        let result = x.includes("/0", 1);
        if (result) {
            document.getElementById('result').value = "Error"
        } else if (result == _.isEmpty(true)) {
            document.getElementById('result').value = ""
        } else {
            console.log(x)
            let y = eval(x);
            document.getElementById('result').value = _.toString(y)
            console.log(y * 11)  
        }
    })

    $('input[class^="wipe-screen"]').on("click", function() {
        document.getElementById('result').value = ''
    })
}


function calculator() {
    const element = (

        <div>
            <h1 style={{textAlign:'center'}}>Calculator App</h1>
            <div className="container">
                <table class="ms-2">
                    <tbody>
                        <tr>
                            <td colSpan="3" id="calc-screen"  class="keys-and-screen"></td>
                            <td className="keys-and-screen">
                                <div id="calc-screen-clear" className="d-grid gap-2 col-6 mx-auto">
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <div className="keys" id="calc-keys"></div>

            </div>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('calculator_component')
    );
}


calculator();
calcSetup();

});


  




