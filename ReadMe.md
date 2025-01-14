# JS Minifier
## <i>Jasmine</i>
A lightweight Java application to compress JavaScript files by minifying them. This tool reduces file size and optimizes JavaScript code for faster loading times and better performance.

## Features
- Minifies JavaScript files by removing unnecessary whitespace, comments, and redundant code.
- Supports SIMPLE_OPTIMIZATIONS for effective file size reduction.
- Outputs the minified code to a new .min.js file.

## Getting Started
### Prerequisites
- Java Runtime Environment (JRE) 11 or later.
- A JavaScript file containing the code to be minified.

### Installation
Clone this repository:
```bash
git clone https://github.com/your-username/JSCompressor.git
cd JSCompressor
```
Download the .exe file or compile the JAR file from the source code. I have included JSMinifier.xml that you can use for the configuration in Launch4j.

## Usage
### Using the Executable (Jasmine.exe)
Place your JavaScript file in the same directory as Jasmine.exe.
Run the executable:
```bash
Jasmine.exe
Enter the name of the JS file in this directory: script
Minification successful! Minified file saved to: script.min.js
```
The minified file, (fileName).min.js, will be generated in the same directory.

### Using the JAR File
Ensure the (input).js file is in the same directory.
Run the JAR file from the command line:
```bash
java -jar JSMinifier.jar
```
## Example
Before Minification (script.js)
```javascript
// Set up the Intersection Observer for both the profile image and the graph bars
const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // For profile image
        if (entry.target === profileImage) {
          if (entry.isIntersecting) {
            profileImage.classList.add("enlarged");
          } else {
            profileImage.classList.remove("enlarged");
          }
        }
```
After Minification (output.min.js)
```javascript
const observer=new IntersectionObserver(d=>{d.forEach(a=>{a.target===profileImage&&(a.isIntersecting?profileImage.classList.add("enlarged"):profileImage.classList.remove("enlarged"));a.target===graphSheet&&(a.isIntersecting?
```
## Files in This Repository
- Jasmine.exe: The precompiled executable for the program.
- JSMinifier.jar: The Java Archive file to run the program.
- JSMinifier.xml
- src/: Source code for the project.
- README.md: Project documentation.
- .gitignore: Specifies ignored files (e.g., temporary build artifacts).

## Contributions
Contributions are welcome! Feel free to submit pull requests or raise issues for bug fixes and feature requests.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
