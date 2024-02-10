function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
}
printText("Hello, world", "left");
// printText("G'day, mate", "centre"); 


function compare(a: string, b: string): -1 | 0 | 1 { // this is useful
    return a === b ? 0 : a > b ? 1 : -1;
}

// inference --> types are inferred, this is important
const obj = { counter: 0 };
if (true) {
    obj.counter = 1; // this can mutate only within number types
}
if (true) {
    obj.counter = "wpw" //ts will scream
}


declare function handleRequest(url: string, method: "GET" | "POST"): void; // void means it doesn't output anything


declare function handleRequest(url: string, method: "GET" | "POST"): void;

// const req = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method);
// const req = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method);
// better way, 1st one
// // Change 1:
// const req = { url: "https://example.com", method: "GET" as "GET" };
// // Change 2
// handleRequest(req.url, req.method as "GET");

const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);