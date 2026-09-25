/**
 * Interactive Accessible Photo Gallery
 * Final Project: Interactivity with JavaScript
 * Web Design for Everybody Specialization (University of Michigan / Coursera)
 * Author: thntue
 * GitHub: https://github.com/thntue/coursera-lastproject-JavaScript
 */

/**
 * Updates the main preview container with the source and alt text of the active thumbnail.
 * Triggered by mouseover and focus events.
 * 
 * @param {HTMLImageElement} previewPic - The thumbnail image element triggering the event.
 */
function upDate(previewPic) {
    console.log("--> upDate() event triggered!");
    console.log("Preview image source:", previewPic.src);
    console.log("Preview image alt:", previewPic.alt);

    const imageDiv = document.getElementById('image');
    
    // Update the background image using the src of the preview image
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Update the text content using the alt text of the preview image
    imageDiv.textContent = previewPic.alt;
}

/**
 * Reverts the main preview container back to its initial default state.
 * Triggered by mouseleave and blur events.
 */
function unDo() {
    console.log("--> unDo() event triggered: Resetting preview to default state.");

    const imageDiv = document.getElementById('image');
    
    // Clear the background image
    imageDiv.style.backgroundImage = "url('')";
    
    // Revert the text content to the initial placeholder prompt
    imageDiv.textContent = "Hover over an image below or use Tab to focus and display here.";
}

/**
 * Initializes keyboard accessibility on page load.
 * Iterates through all gallery preview images with a for loop and adds tabindex="0".
 * Also logs event verification messages to the browser console.
 */
function addTabFocus() {
    console.log("=================================================");
    console.log("[onload Event Triggered]: addTabFocus() is running!");
    console.log("=================================================");

    // Select all thumbnail images belonging to the gallery
    const images = document.querySelectorAll('.preview');
    console.log("Total preview images detected: " + images.length);

    // Loop through each image using a standard for loop as required by the course rubric
    for (let i = 0; i < images.length; i++) {
        // Add tabindex="0" attribute so keyboard navigation can focus each image
        images[i].setAttribute("tabindex", "0");
        console.log("Successfully added tabindex='0' to image " + (i + 1) + ": " + images[i].alt);
    }

    console.log("All " + images.length + " images are now keyboard accessible via the Tab key.");
    console.log("=================================================");
}
