/*
In these drills, you'll practice determining the big O complexity of algorithms. 
For each drill, we'll provide a code snippet with a function, and you'll work out the big O complexity by analyzing the code without running it.
*/

/*
1) Determine the Big O for the following algorithm: 
You are sitting in a room with 15 people. 
You want to find a playmate for your dog, preferably of the same breed. 
So you want to know if anyone out of the 15 people have the same breed as your dog. 
You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. 
Someone yells - "I do, be happy to bring him over"

Solution: Constant Time - no matter how many people or dogs are in the room, you are addressing the whole room asking who has a golden retriever - and whoever does will respond.
*/

/*
2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

Solution: Logarithmic time - you would do a single loop through an array of people/dogs until the condition was met.
*/