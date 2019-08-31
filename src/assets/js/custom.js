(function($){
    $(function() {

        preCode("pre code, textarea");

        if (window.hljs) {
            $('pre > code').each(function(i, e) { hljs.highlightBlock(e); });
        }

        $('article').on('click', '[href="#"], [href=""]', function (e) {
            e.preventDefault();
        });

    });


    /**
    * Copyright (c) 2014, Leon Sorokin
    * All rights reserved. (MIT Licensed)
    *
    * preCode.js - painkiller for <pre><code> & <textarea>
    */

    function preCode(selector) {

        var els = Array.prototype.slice.call(document.querySelectorAll(selector), 0);

        els.forEach(function(el, idx, arr){
            var txt = el.textContent
                .replace(/^[\r\n]+/, "")	// strip leading newline
                .replace(/\s+$/g, "");		// strip trailing whitespace

            if (/^\S/gm.test(txt)) {
                el.textContent = txt;
                return;
            }

            var mat, str, re = /^[\t ]+/gm, len, min = 1e3;

            while (mat = re.exec(txt)) {
                len = mat[0].length;

                if (len < min) {
                    min = len;
                    str = mat[0];
                }
            }

            if (min == 1e3) return;

            el.textContent = txt.replace(new RegExp("^" + str, 'gm'), "");
        });
    }
    $.ajax({
                dataType : "jsonp",
                url      : "https://api.github.com/repos/uikit/uikit?callback=ukghapi&nocache="+Math.random(),
                success  : function(data){

                    if(!data) return;

                    if(data.data.watchers){
                        $("[data-uikit-stargazers]").html(data.data.watchers);
                    }

                    if(data.data.forks){
                        $("[data-uikit-forks]").html(data.data.forks);
                    }
                }
            });


})(jQuery);
