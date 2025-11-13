const list_file_location = "../python/list.py";
const code_name = "list";

function list() {

    window.addEventListener("hashchange", pyFetchConfig);
    window.addEventListener("DOMContentLoaded", pyFetchConfig);
    function pyFetchConfig() {
        if (location.hash == this.code_name+".html") {
            var math_config = document.getElementById(this.code_name+"-config");
            $("#"+this.code_name+"-config").html(`
                <py-config>
                    [splashscreen]
                        enabled = false
                    plugins = [
                        "https://pyscript.net/latest/plugins/python/py_tutor.py"
                    ]
                    [[fetch]]
                    files = ["`+list_file_location+`"]
                </py-config>
            `);
        }
    } 

    const element = (
        <div className="fade show ">
            <h6 id="list-script-title" className="fs-4 ps-0"></h6>

            <div id="list-config"></div>

            <div className="fs-4 mb-4 p-2 bg-dark card shadow-lg">
                <div className="col-3 p-0 mb-1 align-baseline d-flex">
                    <div className="bg-danger rounded-circle me-1" style={{width:"10px", height:"10px"}}></div>
                    <div className="bg-warning rounded-circle me-1" style={{width:"10px", height:"10px"}}></div>
                    <div className="bg-success rounded-circle" style={{width:"10px", height:"10px"}}></div>
                </div>
                <div id="list-code-in-page" className="fs-4 fw-lighter" style={{paddingLeft:"1rem"}}></div>
                <py-terminal></py-terminal>
            </div>

            <div className="btn-group pb-4" role="group" aria-label="list script">
                <button type="button"  className="btn btn-link btn-none p-0" py-click="list_script()" id="list-manual">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-play-btn" viewBox="0 0 16 16">
                        <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                    </svg> 
                </button>
            </div>            

            <div id="list_script"></div>

            

        </div>
    );

    ReactDOM.render(
        element,    
        document.getElementById('list_component')
    );

}

list();

$(document).ready(() => {

    async function getText(file) {
        let newObject = await fetch(file);
        let printText = await newObject.text();
        if ( newObject.ok !== true ) {
            document.getElementById("list_script").innerHTML = "Unknown error";
        } else {
            document.getElementById("list_script").innerHTML = printText;
        }
    }
    getText(list_file_location);

    fetch(list_file_location)
    .then(response => response.text())
    .then(ab => {

        const msg = _.toString(ab);
        const lines = msg.split('\n');
        const edit_arr_begin = _.tail(lines);
        const edit_arr_end = _.dropRight(edit_arr_begin);

        const getCodeDiv = document.getElementById("list-code-in-page");

        for (let i = 0; i < edit_arr_end.length; i++) {
            const element = edit_arr_end[i];
            
            if (element.startsWith("import ")) {
                const replace_element = element.replace(/import/gm, '<span class="function">import</span>');
                getCodeDiv.innerHTML += '<code class="ps-0 coding">' + replace_element + '</code>';
            } else if (element.startsWith("def ")) {
                const replace_element = element.replace(/def/gm, '<span class="function">def</span>');
                getCodeDiv.innerHTML += '<code class="ps-0 coding">' + replace_element + '</code>';
            } else if (element.startsWith("fmt ")) {
                const replace_element = element.replace(/fmt/gm, '<span class="function-fmt">fmt</span>');
                getCodeDiv.innerHTML += '<code class="ps-0 coding">' + replace_element + '</code>';
            } else {
                const replace_element = element.replace(/(["'])(?:(?=(\\?))\2.)*?\2/g, '<span class="function-quote">$1</span>');
                const replace_start_span = replace_element.replace(/\.*?\)/g, ')');
                var regx_exp = '<span class="function-quote">"</span>'
                const replace_text = replace_start_span.replace(regx_exp, '<span class="function-quote">"');
                const replace_text2 = replace_text.replace(regx_exp, '"</span>');
                const replace_sym1 = replace_text2.replace(/\*/g, '<span class="function-symbol">*</span>');
                const replace_numbers1 = replace_sym1.replace(/[0-9]/g, '<span class="function-number">$&</span>');
                getCodeDiv.innerHTML += '<code class="ps-4 coding">' + replace_numbers1 + '</code>';
            }
            
            console.log(lines);
        }

    })
    .catch(err => console.log(err));

    var btn = document.getElementById("list-manual");
    btn.addEventListener("click", function() {
        $(".py-terminal-docked").remove();
        $(".py-terminal").html("");
        $(".py-terminal").addClass("fs-5 fw-lighter");
    });
    btn.removeEventListener("click", function() {});

    var menutabs = document.getElementById("tabs-nav");
    menutabs.addEventListener("click", function() {
        $(".py-terminal-docked").remove();
        $(".py-terminal").html("");
        $(".py-terminal").addClass("fs-5 fw-lighter");
    }); 
    menutabs.removeEventListener("click", function() {});
    


});      

      








  




