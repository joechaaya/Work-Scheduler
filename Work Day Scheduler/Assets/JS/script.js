// Adds the current date to the class data
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

//creates colour coding for the time blocks based on whether the time slot is in the past, present or future 

function timeRefresh() {
    //checks for the current time
    var currentTime = moment().hour();
     

    //pulls the time blocks
    $(".time-block").each(function () {
        var hourSlot = parseInt($(this).attr("id").split("hour")[1]);

        // a loop that compares the current time and will check to see if a time slot is in the past, present or future

        //checks if a time is in the past
        if (hourSlot < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        //checks if a time is in the present 
        else if (hourSlot === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        //checks if a time is in the future
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
};

timeRefresh();

//Saves entered text to local storage after it has been saved

$(".saveBtn").on("click", function () {
    var schedule = $(this).siblings(".description").val();
    var hour = $(this).siblings(".hour").text();

    localStorage.setItem(hour, schedule);
})

//Page refreshed events persist
// run an each for .time-block
$(".time-block").each(function () {
    var savedhourNode = $(this).children(".hour");
    var savedHour = savedhourNode[0].innerHTML;
    console.log('savedHour: ', savedHour);
    var savedVal = localStorage.getItem(savedHour);
    
    console.log(savedVal)

    if (savedVal !== null) {
        console.log('IT RAN')
        $(this).children(".description").text(savedVal);
    }


    // store value of .hour div in a variable
    // check local storage with the value of hour to see if you have a description saved
    // if you have a description saved udpate the innerText of .description with the returned value of getItem

})