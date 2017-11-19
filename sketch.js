var answer = 'No'
var rightNow = new Date().toString()
var dtArray = rightNow.split(" ")
var weekday = dtArray[0]
var month = dtArray[1]
var dayNumber = dtArray[2]
var year = dtArray[3]
var time = dtArray[4]
var timeTimeArray = time.split(":")
var hours = timeTimeArray[0]
var minutes = timeTimeArray[1]
var seconds = timeTimeArray[2]

if(weekday === "Sat" || weekday ==="Sun"){
    answer='Yes!'
}
if(weekday === "Fri")
console.log(dtArray)
// "Thu Nov 16 2017 18:46:17 GMT+0000 (UTC)"
function setup(){
    createCanvas(windowWidth, windowHeight)
}
function draw(){
    background('dodgerblue')
    textSize(32)
    fill('white')
    text('Is it the weekend?' + answer,40,40)
}