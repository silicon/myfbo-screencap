#!/bin/bash
DESTDIR="~pi/screenly/static"

QT_QPA_PLATFORM=offscreen phantomjs /usr/local/lib/myfbo/screencap.js 

/bin/sed -i'' -e"s#\.\./#https://s05.myfbo.com/#g" /tmp/myFbo.html
/bin/sed -i'' -e's#<div id="mainbody" style="display: none;">#<div id="mainbody" style="display: yes;">#' /tmp/myFbo.html
/bin/sed -i'' -e's#onunload="unPop(); pnm.disablePrevNext();"##' /tmp/myFbo.html
/bin/sed -i'' '274,285d' /tmp/myFbo.html
/bin/sed -i'' '306d' /tmp/myFbo.html
/bin/mv -f /tmp/myFbo.html $DESTDIR
