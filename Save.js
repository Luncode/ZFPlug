javascript: (function () {
            var iframe = window.top.document.getElementById("iframeautoheight"),
            ifdocument = iframe.contentWindow.document,
            subLength = ifdocument.getElementById("pjkc").length - 1;
            var form = ifdocument.getElementById('Form1');
    var button = "<input type='submit' name='Button1' value='强 制 保  存' class='button'>";
    form.innerHTML += button;
    function execution() {
        for (var e = window.top.document.getElementById("iframeautoheight").contentWindow.document, t =
                /^DataGrid1__ctl\d+_JS1$/, n = e.getElementsByTagName("select"), o = 0; o < n.length; o++)
                  t.test(n[o].getAttribute("id")) && (n[o].value = "A");
        for (var e2 = window.top.document.getElementById("iframeautoheight").contentWindow.document, t2 =
                /^DataGrid1__ctl\d+_JS2$/, n2 = e2.getElementsByTagName("select"), o2 = 0; o2 < n2.length; o2++)
            t2.test(n2[o2].getAttribute("id")) && (n2[o2].value = "A");
        e.getElementById("Button1").click()
    }
    ifdocument.getElementById("TextBox1").value = 0, execution(), iframe.onload = function () {
        subLength-- > 0 && execution()
    };
})();


