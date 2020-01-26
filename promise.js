const promise = new Promise((resolve, reject) => {
    let x = 100;
    let y = 101;
    if (x === y) {
        resolve();
    } else {
        reject();
    }
}
);

promise.then(() => {
    console.log('success');

}
)
    .catch(() => {
        console.log('fail')
    }
    )