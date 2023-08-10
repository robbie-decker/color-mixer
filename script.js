// Get the color input elements and the "Mix" button
const color1Input = document.getElementById('color1');
const color2Input = document.getElementById('color2');
const mixButton = document.getElementById('mixButton');

// Add event listeners for color input changes and mixing
// color1Input.addEventListener('input');
// color2Input.addEventListener('input');
mixButton.addEventListener('click', mixColorsAndApply);

// // Update the background color with the selected colors
// function updateBackgroundColor() {
//     const color1 = color1Input.value;
//     const color2 = color2Input.value;

//     // Set custom CSS variables to hold color values
//     document.body.style.setProperty('--color1', color1);
//     document.body.style.setProperty('--color2', color2);
// }

// Mix the colors, update the background, and initiate animation
function mixColorsAndApply() {
    const color1 = color1Input.value;
    const color2 = color2Input.value;

    // Set custom CSS variables for the initial and final colors
    document.body.style.setProperty('--color1', color1);
    document.body.style.setProperty('--color2', color2);

    console.log(`color 1: ${color1}   color2: ${color2}`);
    // Wait for the initial color animation, then set the mixed color
    document.body.style.setProperty('animation', 'swirl 2s linear')
    document.body.style.setProperty('--mixedColor', mixColors(color1, color2));
    setTimeout(() => {
        document.body.style.removeProperty('animation');
        docuemnt.body.style.setProperty('background-color', 'var(--mixedColor)')
        console.log("happened");
    }, 2000); // Delay to allow animation to take effect
}

// Calculate the mixed color and return the RGB format
function mixColors(color1, color2) {
    const r1 = parseInt(color1.slice(1, 3), 16);
    const g1 = parseInt(color1.slice(3, 5), 16);
    const b1 = parseInt(color1.slice(5, 7), 16);

    const r2 = parseInt(color2.slice(1, 3), 16);
    const g2 = parseInt(color2.slice(3, 5), 16);
    const b2 = parseInt(color2.slice(5, 7), 16);

    const mixedR = Math.floor((r1 + r2) / 2);
    const mixedG = Math.floor((g1 + g2) / 2);
    const mixedB = Math.floor((b1 + b2) / 2);

    return `rgb(${mixedR}, ${mixedG}, ${mixedB})`;
}
