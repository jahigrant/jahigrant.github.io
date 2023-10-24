function python() {


    getText("../hello_world.py");

    async function getText(file) {
        let newObject = await fetch(file);
        let printText = await newObject.text();
        document.getElementById("python_script").innerHTML = printText;
    }


    
    const element = (
        <div>
            <h1 id="python-scripts">Python Scripts</h1>

            <div id="python_component"></div>
            
            <div className="btn-group" role="group" aria-label="python scripts">
                <button type="button" onClick={clearTheTextField} className="btn btn-primary" py-click="hello_world_script()" id="hello-world-manual">Hello World Script</button>
                <button type="button" className="btn btn-primary" py-click="math_script()" id="math-manual">Math Script</button>
                <button type="button" className="btn btn-primary" py-click="list_script()" id="list-manual">List Script</button>
                <button type="button" className="btn btn-primary" py-click="validate_username()" id="validate-username-manual">Validate Username Script</button>
                {/* <button type="button" className="btn btn-primary" py-click="datetime_script()" id="datetime-manual">Date & Time Script</button> */}
            </div>

            {/* <pre id="code-text"><code>
                print("Hello World")

                print("Hello World")
                print('=========================')
            </code></pre> */}

            <py-config>
                [splashscreen]
                    enabled = false
                packages = [
                    "datetime"
                ]
                plugins = [
                ]

                [[fetch]]
                files = ["../utils.py"]
            </py-config>

            <py-repl id="page-repl" auto-generate="false"></py-repl>
            {/* <button id="run-code">Submit</button> */}

            <div id="python_script"></div>
            <py-terminal></py-terminal>
        </div>
    );

    ReactDOM.render(
        element,
        document.getElementById('python_component')
    );

    function clearTheTextField(){
        document.getElementsByClassName("py-terminal").innerHTML = '';
     }


}

async function clearCLI() {
    var cliObjArr = await document.getElementsByTagName("py-terminal");
    cliObjArr[1].remove();
}

async function printCode() {
    var cliObjArr = await document.getElementsByTagName("code");
    cliObjArr.innerHTML = "hello";
}

// async function btnClick() {
//     var input = await document.getElementsByTagName("py-repl");

//     input.addEventListener("keypress", function(event) {
//       event.preventDefault();
    
//       // Number 13 is the "Enter" key on the keyboard
    
//       if (event.key === 13) {
//         event.preventDefault();
//                 document.getElementById("run-code").click();
//       }
//     });
// }





async function clearREPL() {

    var replObjArr = await document.getElementsByTagName("py-repl");
    replObjArr[1].remove();

}
printCode();
// btnClick();
python();
clearCLI();









  




