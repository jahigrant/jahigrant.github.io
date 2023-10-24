function python() {


    getText("../python/hello_world.py");

    async function getText(file) {
        let newObject = await fetch(file);
        let printText = await newObject.text();
        document.getElementById("python_script").innerHTML = printText;
    }


    getText()
    const element = (
        <div>
            <h6 id="python-scripts">Code</h6>

            <div id="python_component"></div>
            

            <py-config>
                [splashscreen]
                    enabled = false
                packages = [
                    "datetime"
                ]
                plugins = [
                    "https://pyscript.net/latest/plugins/python/py_tutor.py"
                ]

                [[fetch]]
                files = ["../python/hello_world.py"]
            </py-config>



<div className="row pb-0 mb-0">
    <code>
        print("Hello World")
    </code>
</div>
<div className="row pb-0 mb-0">
    <code>
        from datetime import datetime
    </code>
</div>
<div className="row pb-0 mb-0">
    <code>
        now = datetime.now()
    </code>
</div>
<div className="row pb-0 mb-0">
    <code>
        print(now.strftime("%m/%d/%Y, %H:%M:%S"))
    </code>
</div>
<div className="row pt-0 mt-0 pb-0 mb-0">
    <code>
        print('=========================')
    </code>
</div>


    
    

            {/* <py-repl id="page-repl" auto-generate="false"></py-repl> */}
            {/* <button id="run-code">Submit</button> */}


            <div className="btn-group pt-4" role="group" aria-label="python scripts">
                <button type="button" onClick={clearTheTextField} className="btn btn-primary rounded-0" py-click="hello_world_script()" id="hello-world-manual">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-btn" viewBox="0 0 16 16">
  <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg> Run "Hello world" script
                </button>
            </div>

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
//     var btn = await document.getElementById("hello-world-manual");

//     btn.addEventListener("click", function() {
        
//         document.getElementsByTagName("py-repl").innerHTML = '';
      
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









  




