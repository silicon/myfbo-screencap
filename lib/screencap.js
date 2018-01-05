var page = require('webpage').create();
page.settings.javascriptEnabled = true;
page.settings.loadImages = true;
phantom.cookiesEnabled = true;
phantom.javascriptEnabled = true;

page.open('FBOURL', function (status) {
  // step 2
  page.onLoadFinished=function(){
    // step 4
    page.onLoadFinished=function(){
      page.viewportSize = { width: 1024, height: 768 };
      page.clipRect = { top: 0, left: 0, width: 1024, height: 768 };
      page.render('/tmp/myFbo.png');

      var fs = require('fs');
      var result = page.evaluate(function() {
        return document.querySelectorAll("html")[0].outerHTML;
      });
      fs.write('/tmp/myFbo.html',result,'w');

      console.log("load finished");
      phantom.exit();
    }

    // step 3
    console.log("load finished");

    console.log("load started");
    var t = new Date()
    var dd = t.getDate();
    var mm = t.getMonth()+1;
    var yyyy = t.getFullYear();
    var today = mm + '/' + dd + '/' + yyyy;

    page.customHeaders = { "referrer" : "FBOURL" }
    page.evaluate(function(){
      location.href='https://s05.myfbo.com/r/list_day_sched.asp?list_date=${today}&apt=KOA&r_group=&fsz=7';
    });
  }

  // step 1
  console.log("load started");
  page.switchToFrame('myfbo2');
  page.evaluate(function(){
    document.querySelector("input[name='email']").value = "FBOUSER";
    document.querySelector("input[name='password']").value ="FBOPASS";
    document.querySelector("form[name='f']").submit();
  });
});

