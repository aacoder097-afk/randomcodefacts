document.addEventListener('DOMContentLoaded',
    function () {
        const generateButtoon = document.getElementById('generateFactsB');
        const displayText = document.getElementById('displayText');

        const randomFactsString = [
            "The first computer programmer was Ada Lovelace—in the 1800s!",
            "The first high-level programming language was Fortran, developed in the 1950s!",
            "Python is named after Monty Python, not the snake.",
            "Java was originally called Oak!",
            "The “Hello, World!” program is often the first thing coders learn!",
            "COBOL is still used in many banks and government systems.",
            "The first bug in a computer was an actual moth",
            "Git was created by Linus Torvalds, the creator of Linux.",
            "The term “debugging” was popularized by Grace Hopper.",
            "The @ symbol in email addresses was chosen by Ray Tomlinson in 1971.",
            "JavaScript was created in just 10 days!",
            "C++ is an extension of C, adding object-oriented features.",
            "PHP originally stood for “Personal Home Page.",
            "Ruby was influenced by Perl, Smalltalk, and Lisp.",
            "Swift was introduced by Apple in 2014.",
            "Kotlin is now the preferred language for Android development.",
            "TypeScript is a superset of JavaScript.",
            "Go (or Golang) was created at GoogleRust focuses on memory safety without garbage collection.",
            "Dart is used primarily for Flutter apps.",
            "In Python, indentation is syntax—not just style.",
            "JavaScript has both == and ===, with different meanings.",
            "In C, main() is the entry point of the program.",
            "HTML is not a programming language—it's a markup language.",
            "CSS stands for Cascading Style Sheets.",
            "SQL is used for querying databases.",
            "In Bash, $ is used to access variables.",
            "In Java, everything is inside a class.",
            "In Python, None is the equivalent of null.",
            "In JavaScript, NaN stands for “Not a Number.",
            "VS Code is one of the most popular code editors.",
            "GitHub was founded in 2008.",
            "Stack Overflow launched in 2008 and revolutionized Q&A for coders.",
            "The terminal is still a vital tool for developers.",
            "Docker helps package applications into containers.",
            "CI/CD stands for Continuous Integration/Continuous Deployment.",
            "Agile development emphasizes iterative progress.",
            "Pair programming involves two developers working together.",
            "Linting helps catch syntax and style errors.",
            "Unit testing verifies individual pieces of code",
            "Tim Berners-Lee invented the World Wide Web.",
            "HTTP stands for HyperText Transfer Protocol.",
            "HTTPS adds encryption via SSL/TLS.",
            "The first website is still online at CERN.",
            "WebAssembly allows running compiled code in browsers.",
            "React was developed by Facebook.",
            "Angular was developed by Google.",
            "Vue.js was created by Evan You.",
            "REST APIs use HTTP methods like GET, POST, PUT, DELETE.",
            "JSON stands for JavaScript Object Notation.",
            "The “foo” and “bar” variables are used as placeholders in examples.",
            "The term “foobar” comes from military slang “FUBAR.”",
            "The longest valid domain name has 63 characters.",
            "The first computer virus was called “Creeper.”",
            "The first ransomware was “AIDS Trojan” in 1989.",
            "Some developers use dark mode religiously.",
            "“Rubber duck debugging” involves explaining your code to a duck.",
            "The Stack Overflow logo is a stack of pancakes.",
            "The “404” error means “Not Found.”",
            "There’s a programming language called Brainfuck—yes, really."
        ];

        generateButtoon.addEventListener('click',
            function () {
                const randomIndex = Math.floor(Math.random() * randomFactsString.length);
                displayText.textContent = randomFactsString[randomIndex];
            }
        )
    }
)

const button = document.querySelector('.animated-button');

button.addEventListener('click', () => {
    // Add the 'clicked' class for a simple press effect
    button.classList.add('clicked');

    // Optional: Add the 'bouncing' class for a keyframe animation
    // button.classList.add('bouncing');

    // Remove the classes after a short delay to reset the animation
    setTimeout(() => {
        button.classList.remove('clicked');
        // button.classList.remove('bouncing'); // Uncomment if using bouncing animation
    }, 200); // 200ms delay for the animation to play
});