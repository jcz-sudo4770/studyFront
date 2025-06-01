function fibonacci(n) {
    if (n <= 1||n===2) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
fibonacci(10)