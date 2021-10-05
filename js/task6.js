arr = [2, 2, 2, 2, 2, 2];

diff = 0;

for (i = 0; i < arr.length; i++) {
    if (arr[0] !== arr[i]) {
        diff++;
        break;
    }
}

if (diff === 0) {
    console.log('true')
} else {
    console.log('false')
}