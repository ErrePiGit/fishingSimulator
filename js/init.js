function init() {

    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    var rect = canvas.getBoundingClientRect();

    // float position
    var startX = 500;
    var startY = 200;
    var x = startX;
    var y = startY;
    var waves = 0;
    var i = 0;
    var force = 25;
    var mouse = 0;
    var startFloatWidth = 16;
    var startFloatHeight = 16;
    var floatWidth = startFloatWidth;
    var floatHeight = startFloatHeight;
    var startSourceFloatHeight = 16;
    var startSourceFloatWidth = 16;
    var sourceFloatWidth = startSourceFloatWidth;
    var sourceFloatHeight = startSourceFloatHeight;
    var sourceFloatX = 0;
    var sourceFloatY = 0;

    // mouse position
    var mposX = 0;
    var mposY = 0;

    // score
    var totCatch = 0;
    var totKg = 0;
    var catchedFish;

    // status 0 = wait, 1 = fish, 2 = return, 3 = catch
    var status = 0;
    var frequency = 1000;

    // game 0 = time attack, 1 = catch, 2 = main menu, 3 = location menu
    var game = 2;

    // var for fps
    var t = Date.now();
    var timePassed = 0;
    var fps = 0;
    var speed = 3;

    // timer
    var t0 = 0;
    var t1 = 0;
    var countT = 0;

    // images src
    let fishFloat = new Image();
    fishFloat.src = 'img/float_01.png';
    let bgMain = new Image();
    bgMain.src = 'img/bg_main.png';
    let bgLocation = new Image();
    bgLocation.src = 'img/bg_location.png';
    let bgRiver = new Image();
    bgRiver.src = 'img/bg_river.png';
    let bgCatch = new Image();
    bgCatch.src = 'img/bg_catch.png';

    function main() {

        // control FPS
        timePassed = (Date.now() - t) / 1000;
        t = Date.now();
        fps = Math.round(1 / timePassed);

        // handle events
        document.onmousedown = function (event) {

            mposX = event.clientX - rect.left;
            mposY = event.clientY - rect.top;

            // click on main menu
            if (game == 2) {

                if (mposY < 241 && mposY > 219) {
                    mouse = 1;
                }

            }

            // click on location menu
            if (game == 3) {

                if (mposY < 241 && mposY > 219) {
                    mouse = 1;
                }

            }

            // click on time attack
            if (game == 0) {

                mouse = 1;

            }

            // click on catch
            if (game == 1) {

                if (mposY < 241 && mposY > 219) {
                    mouse = 1;
                }

            }

            // click on resume
            if (game == 4) {

                if (mposY < 241 && mposY > 220) {
                    mouse = 1;
                }

            }
        }

        // status event
        i = i + (speed * timePassed * 1.1);

        // time attack
        if (game == 0) {

            // timer 
            if (countT == 0) {
                t0 = Date.now();
                countT = 1;
            }

            t1 = Math.round((Date.now() - t0) / 1000);

            if (t1 > 119) {
                game = 4;
                mouse = 0;
            }

            // float movement
            x = startX + ((startFloatWidth - floatWidth)/2);
            y = startY + ((startFloatHeight - sourceFloatHeight)/2);
            sourceFloatX = ((startSourceFloatWidth - sourceFloatWidth)/2);
            sourceFloatY = ((startSourceFloatHeight - sourceFloatHeight)/2);

            if (status == 0) {
                waves = (3 * Math.sin(i)) * Math.random();
                sourceFloatWidth += speed * waves * timePassed;
                sourceFloatHeight += speed * waves * timePassed;
                floatWidth += speed * waves * timePassed;
                floatHeight += speed * waves * timePassed;

                if (sourceFloatWidth > startSourceFloatWidth) {
                    sourceFloatWidth = startSourceFloatWidth;
                    sourceFloatHeight = startSourceFloatHeight;
                    floatWidth = startFloatWidth;
                    floatHeight = startFloatHeight;
                }

                if (mouse == 1) {
                    i = 0;
                    mouse = 0;
                }

                if (i > (frequency * Math.random())) {
                    if (Math.random() < 0.2) {
                        status = 1;
                        i = 0;
                    }
                }
            }

            // if mouse down in this status you catch the fish
            if (status == 1) {
                sourceFloatWidth -= speed * timePassed * force;
                sourceFloatHeight -= speed * timePassed * force;
                floatWidth -= speed * timePassed * force;
                floatHeight -= speed * timePassed * force;


                if (floatHeight <= 1) {
                    floatHeight = 1;
                    floatWidth = 1;
                    sourceFloatHeight = 1;
                    sourceFloatWidth = 1;
                }

                if (mouse == 1) {
                    status = 3;
                    mouse = 0;

                    // random fish
                    catchedFish = getRandomFish();

                    totCatch++;
                    totKg += catchedFish.weight;


                }

                if (i > ((frequency / 500) * Math.random())) {
                    if (Math.random() < 0.2) {
                        status = 2;
                        i = 0;
                    }
                }

            }

            if (status == 2) {
                if (floatHeight < startFloatHeight) {
                    floatHeight += speed * timePassed * force;
                    floatWidth += speed * timePassed * force;
                    sourceFloatHeight += speed * timePassed * force;
                    sourceFloatWidth += speed * timePassed * force;
                    force -= timePassed;

                }

                if (floatHeight >= startFloatHeight) {
                    status = 0;
                    force = 25;
                }
            }

        }

        // after catch
        if (status == 3) {

            x = startX;
            y = startY;
            sourceFloatHeight = startSourceFloatWidth;
            sourceFloatWidth = startSourceFloatWidth;
            floatHeight = startFloatHeight;
            floatWidth = startFloatWidth;
            sourceFloatX = 0;
            sourceFloatY = 0;
            game = 1;

            if (mouse == 1) {
                game = 0;
                status = 0;
            }

        }

        // main menu handle events
        if (game == 2) {

            if (mouse == 1) {
                game = 3;
                mouse = 0;
            }

        }

        // location menu handle events
        if (game == 3) {

            if (mouse == 1) {
                game = 0;
                mouse = 0;
            }

        }

        // resume
        if (game == 4) {
            if (mouse == 1) {
                game = 2;
                mouse = 0;
                status = 0;
                countT = 0;
                totKg = 0;
                totCatch = 0;
            }
        }

        mouse = 0;

        // water


        // drawing
        context.clearRect(0, 0, canvas.width, canvas.height);

        if (game == 2) {

            context.drawImage(bgMain, 0, 0);

            context.font = '30px Courier';
            context.textAlign = "center";
            context.fillStyle = '#DDDDDD';
            context.fillText("Fishing Simulator 3000", 400, 50);

            context.font = 'bold 20px Courier';
            context.textAlign = "left";
            context.fillStyle = '#DDDDDD';
            context.fillText("Choose an option:", 10, 200);

            context.font = '20px Courier';
            context.fillStyle = '#DDDDDD';
            context.fillText("1. Time Attack", 10, 240);

            context.font = '20px Courier';
            context.fillStyle = '#DDDDDD';
            context.fillText("2. Tournament (coming soon)", 10, 280);

            context.font = '20px Courier';
            context.fillStyle = '#DDDDDD';
            context.fillText("3. Endless (coming soon)", 10, 320);

        }

        if (game == 3) {

            context.drawImage(bgLocation, 0, 0);

            context.font = '30px Courier';
            context.textAlign = "center";
            context.fillStyle = '#DDDDDD';
            context.fillText("Fishing Simulator 3000", 400, 50);

            context.font = 'bold 20px Courier';
            context.textAlign = "left";
            context.fillStyle = '#DDDDDD';
            context.fillText("Choose a location:", 10, 200);

            context.font = '20px Courier';
            context.fillStyle = '#DDDDDD';
            context.fillText("1. River", 10, 240);

            context.font = '20px Courier';
            context.fillStyle = '#DDDDDD';
            context.fillText("2. Lake(coming soon)", 10, 280);

            context.font = '20px Courier';
            context.fillStyle = '#DDDDDD';
            context.fillText("3. Sea (coming soon)", 10, 320);

        }

        if (game == 0) {

            context.drawImage(bgRiver, 0, 95);

            context.drawImage(fishFloat, sourceFloatX, sourceFloatY, sourceFloatWidth, sourceFloatHeight, x, y, floatWidth, floatHeight);

            context.font = '20px Courier';
            context.textAlign = "center";
            context.fillStyle = '#DDDDDD';
            context.fillText("Timer: " + (120 - t1), 400, 50);

            context.font = '20px Courier';
            context.fillStyle = '#DDDDDD';
            context.fillText("Total catch: " + totCatch, 200, 50);

            context.font = '20px Courier';
            context.fillStyle = '#DDDDDD';
            context.fillText("Total Kgs: " + totKg.toFixed(2), 600, 50);

            context.beginPath();
            context.strokeStyle = "#666666";
            context.lineWidth = 5;
            context.moveTo(0, 93);
            context.lineTo(800, 93);
            context.stroke();
            context.closePath();

        }

        if (game == 1) {

            context.drawImage(bgCatch, 0, 0);

            context.font = '20px Courier';
            context.textAlign = "left";
            context.fillStyle = '#DDDDDD';
            context.fillText("Catch!", 10, 50);

            context.font = '20px Courier';
            context.fillStyle = '#DDDDDD';
            context.fillText("Fish: " + catchedFish.name, 10, 80);

            context.font = '20px Courier';
            context.fillStyle = '#DDDDDD';
            context.fillText("Kgs: " + catchedFish.weight.toFixed(2), 10, 110);

            context.font = '20px Courier';
            context.fillStyle = '#DDDDDD';
            context.fillText("Continue", 10, 240);

        }

        if (game == 4) {

            context.drawImage(bgCatch, 0, 0);

            context.font = '20px Courier';
            context.textAlign = "left";
            context.fillStyle = '#DDDDDD';
            context.fillText("Congratulations, here your results:", 10, 50);

            context.font = '20px Courier';
            context.fillStyle = '#DDDDDD';
            context.fillText("Total catch: " + totCatch, 10, 80);

            context.font = '20px Courier';
            context.fillStyle = '#DDDDDD';
            context.fillText("Total Kgs: " + totKg.toFixed(2), 10, 110);

            context.font = '20px Courier';
            context.fillStyle = '#DDDDDD';
            context.fillText("Main menu", 10, 240);

        }

        window.requestAnimationFrame(main);

    }

    main();

}