<canvas id="myCanvas"></canvas>
    
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 1700;
        canvas.height = 550;
        let ballX = 50;
        let ballY = 200;
        let ballDirectionX = 1;
        let ballDirectionY = 1;
        const colors = ['red', 'blue', 'green', 'yellow'];
        function drawPerson(x, y, color) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.arc(x + 10, y - 30, 10, 0, 2 * Math.PI);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.closePath();
            ctx.beginPath();
            ctx.moveTo(x + 10, y - 20);
            ctx.lineTo(x + 10, y);
            ctx.strokeStyle = color;
            ctx.stroke();
            ctx.closePath();
        }
        function animatePerson() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ballX += ballDirectionX * 5;
            ballY += ballDirectionY * 5;
            if (ballX >= canvas.width - 30 || ballX <= 0) {
                ballDirectionX *= -1;
            }
            if (ballY >= canvas.height / 2 - 30 || ballY <= 0) {
                ballDirectionY *= -1;
            }
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            drawPerson(ballX, ballY, randomColor);
            requestAnimationFrame(animatePerson);
        }
        animatePerson();