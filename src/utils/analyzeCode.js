function detectLanguage(code) {
  if (
    code.includes("System.out.println") ||
    code.includes("public static") ||
    code.includes("class ")
  ) {
    return "java";
  }
  return "javascript";
}

export function analyzeCode(code) {
  const lines = code.split("\n");
  const language = detectLanguage(code);

  let loopCount = 0;
  let maxNestedDepth = 0;
  let currentDepth = 0;
  let hasRecursion = false;
  let functionName = null;

  const warnings = [];

  lines.forEach((line) => {
    const trimmed = line.trim();

    /* -------- FUNCTION NAME DETECTION -------- */
    if (!functionName) {
      if (language === "javascript" && trimmed.startsWith("function")) {
        functionName = trimmed.split(" ")[1]?.split("(")[0];
      }

      if (language === "java" && trimmed.includes("(") && trimmed.includes(")")) {
        const parts = trimmed.split("(")[0].split(" ");
        functionName = parts[parts.length - 1];
      }
    }

    /* -------- LOOP DETECTION -------- */
    if (
      trimmed.startsWith("for") ||
      trimmed.startsWith("while")
    ) {
      loopCount++;
      currentDepth++;
      maxNestedDepth = Math.max(maxNestedDepth, currentDepth);
    }

    /* -------- BLOCK END -------- */
    if (trimmed === "}") {
      currentDepth = Math.max(0, currentDepth - 1);
    }

    /* -------- RECURSION DETECTION -------- */
    if (functionName && trimmed.includes(functionName + "(")) {
      hasRecursion = true;
    }

    /* -------- COSTLY OPS -------- */
    if (
      currentDepth > 0 &&
      (
        trimmed.includes(".includes(") ||
        trimmed.includes(".indexOf(") ||
        trimmed.includes(".find(") ||
        trimmed.includes(".contains(")
      )
    ) {
      warnings.push(
        "Costly lookup operation detected inside a loop. Consider using a Set or Map."
      );
    }
  });

  /* -------- COMPLEXITY ESTIMATION -------- */
  let complexity = "O(1)";

  if (maxNestedDepth === 1) complexity = "O(n)";
  if (maxNestedDepth === 2) complexity = "O(n²)";
  if (maxNestedDepth >= 3) complexity = "O(n³)";

  if (hasRecursion) {
    complexity = "Possibly exponential (recursion detected)";
    warnings.push("Recursive function detected. Check for overlapping subproblems or missing memoization.");
  }

  if (loopCount > 1 && maxNestedDepth === 1) {
    warnings.push(
      "Multiple independent loops detected. Overall complexity is additive, not multiplicative."
    );
  }

  return {
    language,
    loopCount,
    maxNestedDepth,
    hasRecursion,
    complexity,
    warnings
  };
}
