
function getGrade (s1, s2, s3) {
    //Find mean avg by adding up all the scores...
    var grade = s1 + s2 + s3;
    // then dividing by the amount of scores given (which is 3)
    grade = grade / 3;
    // Now we sort the result in to grades using if else statements;
    // If the grade is equal to or more than 90 we return an 'A';
    if (grade >=90) {
      return "A";
    // Else if the grade is equal to or more than 80 AND less than 90 we return an 'B';  
    } else if ( grade >= 80 && grade < 90) {
      return "B";
    } else if ( grade >=70 && grade < 80) {
      return "C";
    } else if ( grade >= 60 && grade < 70) {
      return "D";
    // If the grade returned is anything other than the previous numbers (eg less than 60)
    // we return an 'F';  
    } else {
      return "F";
    }
    }
    
    console.log(getGrade(50, 53, 52))
    
    
    
    /*Grade book
    
    Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.
    
    Numerical Score	Letter Grade
    90 <= score <= 100	'A'
    80 <= score < 90	'B'
    70 <= score < 80	'C'
    60 <= score < 70	'D'
    0 <= score < 60	'F'
    Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
    
    function getGrade (s1, s2, s3) {
      // Code here
    }
    
    describe('grade book', function () {
      it('should return an A', function () {
        Test.assertEquals(getGrade(95,90,93), 'A')
        Test.assertEquals(getGrade(100,85,96), 'A')
        Test.assertEquals(getGrade(92,93,94), 'A')
      })
    
    */
    
    // HINT 1: The mean is the average of the numbers. Add up all the numbers, then divide by how many numbers there are.
    
    // HINT 2: Once you have found the mean, you need to sort the result into A, B, C, D or F.
    
    // HINT 3: If the result equals 90 or more, then you want to return an 'A'
    
    // HINT 4: Else if the result is equal to or more than 80, but less than 90, then return
    // a 'B'