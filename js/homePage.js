
var body = document.getElementsByTagName('body')[0];
var githubRepoContainer = document.getElementsByClassName('gitHub-repo')[0];
var courseName = document.getElementsByClassName('courseName')[0];
var cube = document.getElementById('cubeCover');
var contributorArea = document.getElementById('contributorAreaInner');
var author = document.getElementsByClassName('author')[0];
var footer = document.getElementsByClassName('footer')[0];

var progressTimer = 0;

setInterval(showProgress, 1);
function showProgress() {
    
    var progress = progressTimer;
    
    for (; progress <= 100;) {
        githubRepoContainer.style.width = `${progress}%`;
        progress += 100;
    }

    progressTimer++;
    
}


var coded = document.createElement("code");
githubRepoContainer.appendChild(coded);

var coded2 = document.createElement("code");
courseName.appendChild(coded2);

var buttonContent = 'GitHub Repo';
var courseNameContent = 'Js simplified course';

var setTime = 0;

setInterval(buttonHandWriting, 100);
function buttonHandWriting() {
    
    var progress = setTime;
    var bc = buttonContent.charAt(progress);
    var cnc = courseNameContent.charAt(progress);

    for (; progress <= buttonContent.length;) {
        progress++;
    }
    coded.innerHTML += bc;
    /*-------------------------*/
    setTime++;
    
}



var animationTimer = 0;
 
setInterval(forAnimation, 1000);
function forAnimation() {
    animationTimer++;
    if (animationTimer == 2) {
        if (cube.className === 'waitingForBorder') {
            cube.className = 'showCubeAfterBorder';
        }
    }

    if (animationTimer == 3) {
        if (contributorArea.className === 'waitingForCube') {
            contributorArea.className = 'showContributorAreaAfterCube';
            author.style.opacity = '0';

            var setTime = 0;

            setInterval(courseHandWriting, 100);
            function courseHandWriting() {
                
                var progress = setTime;
                var cnc = courseNameContent.charAt(progress);

                for (; progress <= courseNameContent.length;) {
                    progress++;
                }
                coded2.innerHTML += cnc;
                /*-------------------------*/
                setTime++;
    
            }
        }
        body.style.gridTemplateRows = "1fr 0fr";
        body.style.gridTemplateColumns = "1fr";
        

    }

    if (animationTimer == 4) {
        author.style.opacity = '1';

    }

    if (animationTimer == 5) {
        footer.style.opacity = '0.5';
    }

    
}

