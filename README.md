# myfbo-screencap

A tool designed to screen scrape myFbo to use on digital signage

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

- PhantomJS

```
apt-get install phantomjs
```

## Deployment

First, you'll need to clone the github repository locally.

```
cd /tmp
git clone https://github.com/silicon/myfbo-screencap.git
```

Next, you'll want to relocate things to their respective locations

```
mkdir -p /usr/local/bin /usr/local/lib/myfbo/
cp myfbo-screencap/bin/screencap.sh /usr/local/bin/screencap.sh
cp myfbo-screencap/lib/screencap.js /usr/local/lib/myfbo/
```

Next, you'll want to configure things to their respective URLs. The FBO url should look something like 'https://s05.myfbo.com/link.asp?fbo=<your org>'

```
sed -i'' -e's#FBOURL#https://<your fbo base url>#' /usr/local/lib/myfbo/screencap.js
sed -i'' -e's#FBOUSER#<fbo username>#' /usr/local/lib/myfbo/screencap.js
sed -i'' -e's#FBOPASS#<fbo password>#' /usr/local/lib/myfbo/screencap.js
```

Finally, we execute screencap

```
/usr/local/bin/screencap.sh
```

Optionally, you'll want to create a cronjob to produce the required output on some interval

```
echo '*/15 * * * * *  pi  /usr/local/bin/screencap.sh 2>&1 >/dev/null' > /etc/cron.d/myfbo-screencap
```

## Built With

* [PhantomJS](http://http://phantomjs.org/) - The web kit used (v2.1)

## Authors

* **Joshua Hamor** - *Initial work* - [github](https://github.com/silicon)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

