//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is dog, and I have purple eyes!"
let dog_names = ["Max","HaS","Purple","dog"]

function findWords(d_names, d_string){
    for (i in d_names) {
        if (d_string.includes(d_names[i])){
            console.log(d_names[i], 'matched dog_name');
        }
        else {
            console.log(d_names[i], 'has no matches');
        }
    }
}
//Call method here with parameters
findWords(dog_names, dog_string)


//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
function evenIndex(g_array){
    for (i in g_array){
        if (i % 2 == 0){
            g_array.splice(i, 1, 'even index');
        } 
    }
}

evenIndex(given_arr)
console.log(given_arr)
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

