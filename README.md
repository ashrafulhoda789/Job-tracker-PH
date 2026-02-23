# Question-1: 
## getElementById Vs getElementsByClassName
  getElementById():
  - It's select one element by its id
  - return a single DOM element or null

  getElementsByCLassName():
  - It's select all elements with a specific class name
  - return an HTMLCollection

## querySelector Vs querySelectorAll
  querySelector():
  - It's select the first element matching a CSS selector
  - returns a single DOM element or null

  querySelectorAll():
  - It's select all elements
  - returns a NodeList

# Question-2:
## Create Element:

  const mainContainer = document.getElementById('.main-container'); 
  const div = document.createElement('div');
  
## Insert new element:
  div.innerHTML = ``;
  mainContainer.appendChild(div);

# Question-3:
## Event Bubbling:
  - Event Bubbling is a type of event propagation in DOM where an event triggered on a child element.

    ## It Works:
    - we attach event listeners to elements.
    - When an event occurs on a child element, it first triggers the child's event listener.
    - Then, the event propagates to its parent, then it's parent
    - This continues unless you stop it manually.
# Question-4:
  ## Event Delegation:
  - Event Delegation is a technique where attach a single event listener to parent element instead of adding separate listeners to each child.

    ## It's useful because:
    - Efficient
    - Dynamic elements
    - CLeaner code
    - Memory-friendly
    
# Question-5:
 PreventDefault():
  - It stops the default behaviour of an element from happening.
  - It doesn't stop the event from propagation

stopPropagation():
  - It stops the event from bubbling up
  - It doesn't prevent default behaviour.

      
  
  
   
   
