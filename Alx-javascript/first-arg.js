#!/usr/bin/node

if (ProcessingInstruction.argv < 2) {
    console.log('No argument')
} else {
    console.log(process.argv[2])
}