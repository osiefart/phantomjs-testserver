// // Size of the browser i.e. viewport
var view_width = 2000, view_height = 768;

// // Size of the clipped image
var clip_width = 1366, clip_height = 768;

var casper = require("casper").create({
 // // Set the viewport size
 viewportSize: {width: view_width, height: view_height},
 // // Set the position and the size of the clipped image
 clipRect: {
  top: 0,
  left: (view_width - clip_width)/2,
  width: clip_width,
  height: clip_height
 }
});

// // Take screenshots of these sites
var links = [
    "https://www.spiegel.de/",
    "https://www.whynopadlock.com/"
];

casper.start();
var i = 0;

casper.each(links, function(self, link) {
    this.thenOpen(link, function() {
        i++;

        // // Output to console on the current page's title
        this.echo(i + ' : ' + this.getTitle() + " @ " + link);

        // // Dump screenshots to directory 'shots'
        this.capture('shots/casper_1_' + i + '.png');
    });
});

casper.run();