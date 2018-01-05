#!/bin/bash
SRCHOST="https://s05.myfbo.com/"
DESTDIR="~pi/screenly/static"

QT_QPA_PLATFORM=offscreen phantomjs /usr/local/lib/myfbo/screencap.js 

sed -i'' -e"s#\.\./#${SRCHOST}#g" /tmp/myFbo.html
sed -i'' -e's#<div id="mainbody" style="display: none;">#<div id="mainbody" style="display: yes;">#' /tmp/myFbo.html
sed -i'' -e's#onunload="unPop(); pnm.disablePrevNext();"##' /tmp/myFbo.html
sed -i'' '274,285d' /tmp/myFbo.html
sed -i'' '306d' /tmp/myFbo.html
mv /tmp/myFbo.html $DESTDIR
