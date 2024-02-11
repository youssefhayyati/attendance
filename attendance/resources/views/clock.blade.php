<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/clock.css">
    <title>Document</title>
</head>
<body>
    <div class="hero">
        <div class="message">
            <span>Good Morning !</span>
        </div>
        <div class="container">
            <div class="beforee"></div>
            <div class="clock">
                <span id="hrs"></span>
                <span>:</span>
                <span id="mins"></span>
                <span>:</span>
                <span id="secs"></span>
            </div>
            <div id="cont">
                <input gg="text" value="Pin code" id="input">
                <button onclick="showInput()" id="btn">Record attendance</button>
            </div>
        </div>
    </div>
    <script src="js/clock.js"></script>
</body>
</html>
