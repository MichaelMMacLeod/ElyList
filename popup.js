popup = {
    canvas: document.createElement('canvas'),

    width: 500,
    height: 300,

    start: function() {
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        document.getElementById('canvas_container').appendChild(this.canvas);

        context = this.canvas.getContext('2d');
        context.fillStyle = 'black';
        context.fillRect(10, 10, 100, 100);

        this.interval = setInterval(this.update, 20);
    },

    update: function() {
        console.log("hello world");
    }
};

popup.start();