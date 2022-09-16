# Plain English Solution

We need a function that takes in a string and converts it to pig latin. To start with, we need to select the first character of each word and then add it to the end. Perhaps we could first define a new variable with an empty array. We could turn the string into an array seperated by spaces (split method). Then, looping through the array, we push to the array the rest of the word followed by the starting letter.

Finally, we return the array turned back to a string, with 'ay' added to each index. 