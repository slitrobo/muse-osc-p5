# muse-osc-p5
Connector that transmits data from Muse Device to P5 front-end using OSC.
To use this you'll need to buy [MindMonitor App](https://mind-monitor.com/).

# Get started

```
$ git clone https://github.com/slitrobo/muse-osc-p5
$ cd muse-osc-p5/
$ npm install
```

# Run

```
node bridge.js
```

1. Start the script to receive OSC (The standart port is 5000)
2. Start streaming the data from MindMonitor app
3. Open `/client/index.html` in your browser.

Now you should see the data transmitting directly in your browser.


# Data

The brainwave data can be obtained from `osc.data` object: just use the name the name of the wave (`osc.data.delta`).
You can extract custom data by setting [different OSC Tags](https://mind-monitor.com/FAQ.php#oscspec) in `base/osc.js` file.


Inspired by [Gene Kogan's p5js-osc](https://github.com/genekogan/p5js-osc).
