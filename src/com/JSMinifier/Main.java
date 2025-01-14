package com.JSMinifier;

import com.google.javascript.jscomp.*;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.charset.StandardCharsets;
import java.util.Collections;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try {

            Scanner scanner = new Scanner(System.in);
            System.out.print("Enter the name of the JS file in this directory: ");
            String fileName = scanner.next();
            String inputFile = fileName +".js";
            String outputFile = fileName + ".min.js";
            scanner.close();

            // Read the input JS file
            String jsCode = new String(Files.readAllBytes(Paths.get(inputFile)), StandardCharsets.UTF_8);

            // Initialize the Closure Compiler
            com.google.javascript.jscomp.Compiler compiler = new com.google.javascript.jscomp.Compiler();
            CompilerOptions options = new CompilerOptions();
            CompilationLevel.SIMPLE_OPTIMIZATIONS.setOptionsForCompilationLevel(options);

            // Create input and extern files
            SourceFile input = SourceFile.fromCode(inputFile, jsCode);

            // Compile the input JavaScript
            Result result = compiler.compile(Collections.emptyList(), Collections.singletonList(input), options);

            // Handle the result
            if (result.success) {
                Files.write(Paths.get(outputFile), compiler.toSource().getBytes(StandardCharsets.UTF_8));
                System.out.println("Minification successful! Minified file saved to: " + outputFile);
            } else {
                System.out.println("Minification failed: ");
                result.errors.forEach(System.out::println);
            }
        } catch (IOException e) {
            System.err.println("File error: " + e.getMessage());
        }
    }
}

