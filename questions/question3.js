let largeCountries= ["Meowland", "India", "USA", "Indonesia", "Anime"]



largeCountries.pop()
largeCountries.push("Pakistan")


largeCountries.shift()
largeCountries.unshift("China")


console.log("The " + largeCountries.length + " largest countries in the world:")
for(let i =0; i<largeCountries.length; i++ ){
    console.log("- " + largeCountries[i] + "\n")
}