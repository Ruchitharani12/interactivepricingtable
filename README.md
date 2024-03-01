# interactivepricingtable 
 code creates an interactive pricing table where users can click on different plans, and the selected plan gets highlighted visually. 
 It is having for storage of the files.Here I used html,css and javascript.Javascript is used for dynamically toggle between the plans. 
<script> section containing JavaScript code.
It selects all elements with the class "plan" using document.querySelectorAll('.plan').
It then adds a click event listener to each plan using forEach().
When a plan is clicked, it removes the "selected" class from all plans and adds it only to the clicked plan, allowing users to visually indicate their selection
