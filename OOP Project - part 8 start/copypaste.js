
//COPY 1
        //Transfer Data
        this.type = obj.type;
        this.id = obj.id;
        this.questionText = obj.questionText;
        this.distractorText = obj.distractors;
        this.correctResp = obj.correctResp;
        this.feedback = obj.feedback;
        this.weight = obj.weight;
        this.result = "no-answer";
        this.studentResp = "";
        this.correct = false;




//COPY 2
        //Assign DOM elements
        htmlDiv = $('#'+this.questionDiv)[0];
        this.questionField = htmlDiv.querySelector(".question-text");
        this.noAnswerFeed = htmlDiv.querySelector(".feedback.no-answer");
        this.correctFeed = htmlDiv.querySelector(".feedback.correct");
        this.inccorrectFeed = htmlDiv.querySelector(".feedback.incorrect");
        this.htmlDiv = htmlDiv;




//COPY 3
        this.questionDiv = (obj.type === "true-false") ? "multi-choice" : obj.type;



//COPY 4
    Question.prototype.displayQuestion = function() {
        domU.removeClass([this.htmlDiv],'hidden-question');
    };
    Question.prototype.hideQuestion = function() {
        domU.addClass([this.htmlDiv], 'hidden-question');
    };
    Question.prototype.populateQuestion = function() {
        //Set Question text
        this.questionField.innerHTML = this.questionText;
        this.noAnswerFeed.innerHTML = '<p><span>X </span>' + this.feedback.noAnswer + '</p>';
        this.correctFeed.innerHTML = '<p><span>&#10003 </span>' + this.feedback.correctAnswer + '</p>';
        this.inccorrectFeed.innerHTML = '<p><span>X </span>' + this.feedback.wrongAnswer + '</p>';
    };
    Question.prototype.hideFeedback = function() {
        var feedback = this.htmlDiv.querySelectorAll('.feedback.visible');
        domU.removeClass(feedback, 'visible');
    };
    Question.prototype.displayFeedback = function() {
        var feedback = $('.feedback.' + this.result);
        domU.addClass(feedback, 'visible');
    };
    Question.prototype.checkAnswer = function() {

    };

       


//COPY 5
        switch (this.questionDiv) {
            case "fill-in":
                this.populateTheQuestion = function() {
                    
                };
                this.checkTheAnswer = function() {
                    console.log("fill-in");
                    
                };
                break;
            case "multi-choice":
                
                this.populateTheQuestion = function() {
                    
                };
                this.checkTheAnswer = function() {
                    
                };
                break;
            default:
                this.populateTheQuestion = function() {
                    this.populateQuestion();
                };
                break;
        }





//COPY 6
                    this.populateQuestion();
                    domU.addClass(distractors, 'remove');
                    for (let i = 0; i < distractors.length; i++) {
                        if (this.distractorText[i] !== undefined) {
                            distractors[i].innerHTML = this.distractorText[i];
                            domU.removeClass([distractors[i]],'remove');
                        }
                    }
                    for (let i = 0; i < distractorsRadio.length; i++) {
                        distractorsRadio[i].checked = false;
                    }




//COPY 7
                    var ans,
                        value = htmlDiv.querySelector('textarea').value;

                    if (value !== "") {
                        ans = strU.breakOut(this.correctResp, ",");
                        this.correct = ans.every(function(val) {
                            return (value.indexOf(val) > -1);
                        });
                        this.result = (this.correct) ? 'correct' : 'incorrect';
                    }
                    this.hideFeedback();
                    this.displayFeedback();






//COPY 8
                    console.log("multi-choice");

                    for (let i = 0; i < distractors.length; i++) {
                        if (distractorsRadio[i].checked) {
                            this.studentResp = $('#' + distractorsRadio[i].id + '_label')[0].innerHTML;
                        }
                    }
                    if (this.studentResp !== "") {
                        this.correct = this.studentResp === this.correctResp;
                        this.result = (this.correct) ? 'correct' : 'incorrect';
                    }
                    this.hideFeedback();
                    this.displayFeedback();





//COPY 9
        navigationProto = {
            questionsArray: questionsArray,
            totalQuestions: questionsArray.length,
            currentQuestion: 0,
            hideQuestion: function() {
                var curQuestion = this.questionsArray[this.currentQuestion];
                curQuestion.hideQuestion();
            },
            showQuestion: function() {
                var newQuestion = this.questionsArray[this.currentQuestion];
                newQuestion.hideFeedback();
                newQuestion.populateTheQuestion();
                newQuestion.displayQuestion();
            }
        };





//COPY 10
        prevBtn = Object.create(navigationProto);
        prevBtn.goPrev = function(e) {
            if (this.currentQuestion > 0){
                this.hideQuestion();
                this.currentQuestion = this.currentQuestion - 1;
                this.showQuestion();
            }
        };






