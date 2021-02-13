##Password Generator##

**Description**
---
A password generator coded with JavaScript, with minor HTML and CSS for page structuring.  Upon clicking "Generate Password", the user is guided through a series of prompts that asks what kind of elements they would like in their new password: lowercase, uppercase, numbers, and special characters.  The user must pick at least one of these criteria to proceed.  Upon satisfying the character criteria, the user will enter the length of the password, with acceptable values falling between 8 and 128 characters.  If the user chooses a length outside 8 and 128 characters, they will be prompted to enter an acceptable value.  The textbox in the center of the screen then displays a random password with the chosen criteria.

After using this generator for some time, I found that there were too many alert boxes to click through in order to generate a single password.  Not only that, but the page must be refreshed to generate a new password.  I updated the code to use a series of checkboxes written directly on the page to choose character criteria and a textbox to choose password length.  These changes allow for a smoother user experience with less clicking and the ability to click the "Generate Password" for a new password without refreshing the page.  I have this copy of code in the Develop branch of the repository.

**Screenshots**
---
Version 1.0 when the page loads

![Screenshot](/assets/images/Generator-1.0-Empty)

Version 1.0 user prompts

![Screenshot](/assets/images/Generator-1.0-Prompt)

Version 1.0 password output

![Screenshot](/assets/images/Generator-1.0-Output)

Version 2.0 when the page loads