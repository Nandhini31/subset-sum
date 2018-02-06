### How to set up and run
- Clone repo and navigate to the folder
- `npm install` to install node
- `node findUniq` to run the function for  findUniq JS gist
- `node subsetSum` to run the function for combos JS gist


### Approach
- findUniq : I went with the most obvious and simple solution of iterating through every element of the array and comparing it with adjacent elements until the unique element is found.
Other approach I might consider is to build a hash map of the values and frequency and filter the element with frequency of 1.

- Combinations of elements that sum up to a given number:
  This problem could be solved iteratively and recursively. I researched and gathered that given the requirement is to find an optimised solution, I went with recurrsion.

- I used an array from the calling function to store all the subarrays that contain each combination of the sum.I used previous item in the subarray and iteratively reduce the sum to find each unique combination of the number.


### Testing
  - As the task was to write pure functions,
   I chose to manually testing my calling the function with different parameters that would cover positive, negative and edge cases.

### References
  - GeeksforGeeks
  - Stackoverflow
